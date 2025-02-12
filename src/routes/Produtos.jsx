import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GrFormEdit as Editar } from 'react-icons/gr';
import { RiDeleteBin2Fill as Excluir } from 'react-icons/ri';

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({
    id: '',
    nome: '',
    desc: '',
    valor: ''
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoProduto({ ...novoProduto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextId = produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) + 1 : 1;
    const produtoComId = { ...novoProduto, id: nextId };
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produtoComId),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProdutos([...produtos, data]);
        setNovoProduto({ id: '', nome: '', desc: '', valor: '' });
      })
      .catch((error) => console.error(error));
  };

  return (
    <section>
      <h2>LISTA DE PRODUTOS</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          value={novoProduto.nome}
          onChange={handleInputChange}
          placeholder="Nome do Produto"
          required
        />
        <input
          type="text"
          name="desc"
          value={novoProduto.desc}
          onChange={handleInputChange}
          placeholder="Descrição do Produto"
          required
        />
        <input
          type="number"
          name="valor"
          value={novoProduto.valor}
          onChange={handleInputChange}
          placeholder="Valor do Produto"
          required
        />
        <button type="submit">Adicionar Produto</button>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>PREÇO</th>
              <th>EDITAR | EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td>R$ {item.valor}</td>
                <td>
                  <Link to={`/editar/produtos/${item.id}`}>
                    <Editar />
                  </Link>
                  <Link to={`/excluir/produtos/${item.id}`}>
                    <Excluir />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Produtos;
