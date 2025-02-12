import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { ListaProdutos } from '../components/ListaProdutos';

function Pedido() {
  const [produtos, setProdutos] = useState([]);
  const [pedido, setPedido] = useState({
    id: '',
    cliente: '',
    endereco: '',
    total: 0,
    produtosSelecionados: [],
  });

  useEffect(() => {
    fetch('http://localhost:5000/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => setProdutos(data))
      .catch((error) => console.error(error));
  }, []);

  const adicionarProdutoAoPedido = (produto) => {
    const novosProdutosSelecionados = [...pedido.produtosSelecionados, produto];
    const novoTotal = novosProdutosSelecionados.reduce((acc, prod) => acc + parseFloat(prod.valor), 0);
    setPedido({
      ...pedido,
      produtosSelecionados: novosProdutosSelecionados,
      total: novoTotal,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextId = pedido.length > 0 ? Math.max(...pedido.map(p => p.id)) + 1 : 1;
    const pedidoComId = { ...pedido, id: nextId };
    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pedidoComId),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('Pedido cadastrado com sucesso:', data);
        setPedido({
          id: '',
          cliente: '',
          endereco: '',
          total: 0,
          produtosSelecionados: [],
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <section>
      <h1>Pedidos</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>PRODUTOS DISPONÍVEIS: </legend>
          <ul>
            {produtos.map((produto) => (
              <li key={produto.id}>
                <button
                  type="button"
                  onClick={() => adicionarProdutoAoPedido(produto)}
                  className="addBtn"
                >
                  <FaPlus />
                </button>
                {produto.nome} - R$ {produto.valor}
              </li>
            ))}
          </ul>
        </fieldset>

        <fieldset>
          <legend>DADOS DO CLIENTE: </legend>
          <p>
            <label htmlFor="idCliente">Nome do Cliente:</label>
            <input
              type="text"
              name="cliente"
              id="idCliente"
              value={pedido.cliente}
              onChange={(e) => setPedido({ ...pedido, cliente: e.target.value })}
            />
          </p>
          <p>
            <label htmlFor="idEndereco">Endereço de Entrega:</label>
            <input
              type="text"
              name="endereco"
              id="idEndereco"
              value={pedido.endereco}
              onChange={(e) => setPedido({ ...pedido, endereco: e.target.value })}
            />
          </p>
          <p>
            <label htmlFor="idTotal">Total do Pedido:</label>
            <input
              type="text"
              name="total"
              id="idTotal"
              value={pedido.total}
              readOnly
            />
          </p>
        </fieldset>
        <button type="submit" className='cc'>CADASTRAR PEDIDO</button>
      </form>

      <h2>Produtos Selecionados</h2>
      <ul>
        {pedido.produtosSelecionados.map((produto, index) => (
          <li key={index}>
            {produto.nome} - R$ {produto.valor}
          </li>
        ))}
      </ul>
      <br /><br /><br /><br /><br /><br />
    </section>
  );
}

export default Pedido;
