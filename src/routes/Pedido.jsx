import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { ListaProdutos } from '../components/ListaProdutos';
import '../style/Pedido.css';

function Pedido() {
  const [pedido, setPedido] = useState({
    id: '',
    cliente: '',
    endereco: '',
    total: '',
    produtosSelecionados: [],
  });

  const adicionarProdutoAoPedido = (produto) => {
    setPedido({
      ...pedido,
      produtosSelecionados: [...pedido.produtosSelecionados, produto],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pedido);
  };

  return (
    <section>
      <h1>Pedidos</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>PRODUTOS DISPONÍVEIS: </legend>
          <ul>
            {ListaProdutos.map((produto) => (
              <li key={produto.id}>
                <button
                  onClick={() => adicionarProdutoAoPedido(produto)}
                  className="adicionar-botao"
                >
                  <FaPlus />
                </button>
                {produto.nome} - R$ {produto.valor},00
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
              onChange={(e) => setPedido({ ...pedido, total: e.target.value })}
            />
          </p>
        </fieldset>
        <button type="submit" className='cc'>CADASTRAR PEDIDO</button>
      </form>
    </section>
  );
}

export default Pedido;
