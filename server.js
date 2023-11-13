const express = require('express');
const { Request, Response } = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Criando a conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Wi@20081998',
  database: 'financas_mensais',
});

const app = express();
const port = 3001;

// Configurando middlewares
app.use(express.json());
app.use(cors());

// Definindo rotas
app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Acessou' });
});

// Definindo interface para Produto


app.post('/api/produtos', async (req, res) => {
  const newProduct = req.body;

  try {
    const [result] = await connection.promise().execute(
      'INSERT INTO lista_de_compras (nome_produto, valor_produto, tipo_produto, local_comprar, estoque, data_compra) VALUES (?, ?, ?, ?, ?, ?)',
      [newProduct.nome_produto, newProduct.valor_produto, newProduct.tipo_produto, newProduct.local_comprar, newProduct.estoque, newProduct.data_compra]
    );

    const insertedId = result.insertId;
    newProduct.id = insertedId;

    res.json(newProduct);
  } catch (error) {
    console.error('Erro ao inserir produto:', error);
    res.status(500).json({ error: 'Erro ao inserir produto' });
  }
});

app.get('/api/produtos', async (req, res) => {
    try {
      const [rows] = await connection.promise().query('SELECT * FROM lista_de_compras');
      res.json(rows);
    } catch (error) {
      console.error('Erro ao obter lista de produtos:', error);
      res.status(500).json({ error: 'Erro ao obter lista de produtos' });
    }
  });
  

// Tratamento de erro para rota não encontrada
app.use((req, res) => {
  res.status(404).json({ message: 'Deu erro, tente novamente' });
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
