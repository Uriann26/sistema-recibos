````markdown
# 📄 Sistema de Emissão de Recibos Profissionais

Aplicação fullstack para emissão de recibos personalizados por profissionais (como médicos, psicólogos, engenheiros, etc), com geração automática de PDF via microserviço Python + WeasyPrint.

---

## 🧱 Tecnologias

- **Node.js + Express** – API principal
- **Sequelize + PostgreSQL** – ORM e banco de dados
- **Python (Flask)** – Microserviço para gerar PDFs
- **Docker** – Containerização do microserviço
- **Postman** – Testes de rotas
- **Git + GitHub** – Versionamento e publicação

---

## 🚀 Como executar localmente

### Pré-requisitos

- Node.js ≥ 18
- Python ≥ 3.11
- Docker (para o serviço de PDF)
- PostgreSQL em execução
- Git

---

### 📦 Instalação do backend Node.js

```bash
cd backend-node
npm install
````

Crie um arquivo `.env` com:

```env
DB_USERNAME=postgres
DB_PASSWORD=senha
DB_DATABASE=recibos_db
DB_HOST=localhost
PORT=3000
```

---

### 🛠️ Rodando o backend

```bash
npx sequelize-cli db:migrate
npm run dev
```

---

### 🐍 Rodando o microserviço Flask com Docker

```bash
cd ../pdf-service-python
docker build -t recibo-pdf .
docker run -p 5000:5000 recibo-pdf
```

---

## 🔌 Principais Endpoints

### 👨‍⚕️ Profissionais

* `POST /api/profissionais`
* `GET /api/profissionais`

### 👤 Clientes

* `POST /api/clientes`
* `GET /api/clientes`

### 📄 Recibos

* `POST /api/recibos`
* `GET /api/recibos`
* `GET /api/recibos/:id/pdf` → Geração de PDF via Flask

---

## 🧾 Exemplo de payload do recibo

```json
{
  "profissionalId": 1,
  "clienteId": 1,
  "valor": 250.00,
  "data": "2024-05-05",
  "descricao": "Consulta psicológica",
  "extras": {
    "observacoes": "Atendimento presencial"
  }
}
```

---

## 🧰 Futuras melhorias

* Autenticação com JWT
* Templates diferentes por tipo de profissional
* Envio de recibo por e-mail
* Dashboard com histórico de recibos

---

## 🧑‍💻 Desenvolvedor

**Leonardo Guedes Barbosa**
Mestre em Engenharia Estrutural | Desenvolvedor Back-End
[GitHub](https://github.com/Uriann26) | [LinkedIn](https://linkedin.com)

---

## 📝 Licença

Este projeto está sob a licença **MIT** – use, modifique e compartilhe com atribuição.

```
