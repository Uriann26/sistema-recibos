from flask import Flask, request, send_file, render_template_string
from weasyprint import HTML
from io import BytesIO

app = Flask(__name__)

@app.route('/gerar-pdf', methods=['POST'])
def gerar_pdf():
    data = request.get_json()

    html = f"""
    <h1>Recibo de Consulta</h1>
    <p><strong>Profissional:</strong> {data['Profissional']['nome']}</p>
    <p><strong>Cliente:</strong> {data['Cliente']['nome']}</p>
    <p><strong>Descrição:</strong> {data['descricao']}</p>
    <p><strong>Valor:</strong> R$ {data['valor']}</p>
    <p><strong>Data:</strong> {data['data'][:10]}</p>
    """

    buffer = BytesIO()
    HTML(string=html).write_pdf(buffer)
    buffer.seek(0)

    return send_file(buffer, mimetype='application/pdf')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
