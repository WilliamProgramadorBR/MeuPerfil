import React, { useState, useEffect } from "react";
import GlobalStyle, { Addbutton, AtualizarButon, Celula, DataTexto, DetalhesProduto, DetalhesTexto, EstoqueTexto, GridContainer, InputField, LocalTexto, StyledTexto, Sty, TipoTexto, ValorTexto, StyledSelect } from "./ListacomprasStyle.js";

function ListaCompras() {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({
    nome_produto: "",
    valor_produto: "",
    tipo_produto: "",
    local_comprar: "",
    estoque: "",
    data_compra: "",
  });

  useEffect(() => {
    fetch("http://localhost:3001/api/produtos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao obter lista de produtos");
        }
        return response.json();
      })
      .then((data) => setProdutos(data))
      
      .catch((error) => console.error("Erro ao obter lista de produtos:", error));
  }, []);

  const handleNovoProdutoChange = (event) => {
    const { name, value } = event.target;
    setNovoProduto((prevProduto) => ({
      ...prevProduto,
      [name]: value,
    }));
  };

  const handleSubmitNovoProduto = async (event) => {
    event.preventDefault();
    
    // Convertendo valor_produto para o formato correto (substituir vírgula por ponto)
    const novoProdutoComPonto = {
      ...novoProduto,
      valor_produto: novoProduto.valor_produto.replace(",", ".")
    };
  
    try {
      const response = await fetch("http://localhost:3001/api/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoProdutoComPonto),
         // Enviar o novoProduto com valor formatado
      });
  
      if (!response.ok) {
        throw new Error("Erro ao adicionar novo produto");
      }
  
      const newProduct = await response.json();
      setProdutos((prevProdutos) => [...prevProdutos, newProduct]);
  
      setNovoProduto({
        nome_produto: "",
        valor_produto: "",
        tipo_produto: "",
        local_comprar: "",
        estoque: "",
        data_compra: "",
      });
    } catch (error) {
      console.error("Erro ao adicionar novo produto:", error);
    }
  };
  
  function Atualizar() {
    let confirmacao = window.confirm("Você quer atualizar a lista?");
    if (confirmacao) {
      window.location.reload();
    } else {
      alert("Cancelado com sucesso");
    }
  }
  const tiposDeProdutos = [...new Set(produtos.map(produto => produto.tipo_produto))];

  console.log(tiposDeProdutos)

   
    return (
      <div>
        <GlobalStyle/>
        
        <StyledTexto>Aqui você pode realizar a sua lista de compras</StyledTexto>

        
        <div>
        <div>
          <h2>Adicionar Novo Produto</h2>
          <form onSubmit={handleSubmitNovoProduto}>
            <label>
              Nome do Produto:
              <InputField
                type="text"
                name="nome_produto"
                value={novoProduto.nome_produto}
                onChange={handleNovoProdutoChange}
              />
            </label>
            <label>
              Valor:
              <InputField
                type="text"
                name="valor_produto"
                value={novoProduto.valor_produto.replace(',','.')}
                onChange={handleNovoProdutoChange}
              />
            </label>
            <label>
              Tipo:
              <StyledSelect
            name="tipo_produto"
            value={novoProduto.tipo_produto}
            onChange={handleNovoProdutoChange}
          >
            <option value="">Selecione o tipo</option>
            {tiposDeProdutos.map((tipo, index) => (
              <option key={index} value={tipo}>
                {tipo}
              </option>
            ))}
          </StyledSelect>
            </label>
            <label>
              Local de Compra:
              <InputField
                type="text"
                name="local_comprar"
                value={novoProduto.local_comprar}
                onChange={handleNovoProdutoChange}
              />
            </label>
            <label>
              Estoque:
              <InputField
                type="text"
                name="estoque"
                value={novoProduto.estoque}
                onChange={handleNovoProdutoChange}
              />
            </label>
            <label>
              Data de Compra:
              <InputField
                type="date"
                name="data_compra"
                value={novoProduto.data_compra}
                onChange={handleNovoProdutoChange}
              />
            </label>
            <Addbutton onClick={handleSubmitNovoProduto} type="submit">Adicionar Produto</Addbutton>
          </form>
        </div>
          <AtualizarButon onClick={Atualizar}>Atualizar lista</AtualizarButon>
        </div>
        <div>
          <h2>Lista de Produtos</h2>
          <GridContainer>
          {produtos.map((produto, index) => (
            <Celula key={produto.id} isOdd={index % 2 !== 0}>
              <DetalhesTexto>
                <strong>Produto:</strong> {produto.nome_produto}
              </DetalhesTexto>
              <DetalhesTexto>
                <strong>Valor:</strong> R$ {produto.valor_produto}
              </DetalhesTexto>
              <DetalhesTexto>
                <strong>Tipo:</strong> {produto.tipo_produto}
              </DetalhesTexto>
              <DetalhesTexto>
                <strong>Local de Compra:</strong> {produto.local_comprar}
              </DetalhesTexto>
              <DetalhesTexto>
                <strong>Estoque:</strong> {produto.estoque}
              </DetalhesTexto>
              <DetalhesTexto>
                <strong>Data de Compra:</strong> {produto.data_compra}
              </DetalhesTexto>
            </Celula>
          ))}
        </GridContainer>
        </div>
        
      </div>
    );
  }


export default ListaCompras;




