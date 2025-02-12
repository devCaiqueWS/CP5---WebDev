import {} from 'react';
import { Link,useNavigate } from 'react-router-dom';
// import '../style/Nav.css'

function Nav() {
/*Hook- useNavigate */
  const navigate = useNavigate();

  //criando a função logout

  const handleLogout = async ()=>{
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('senhaData');
    alert("SAINDO DA SESSÃO");
    navigate('/');

  }

  return (

    <>
      <header>
        <h1> 美 味 し い</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/cadastrar/pedido">Pedidos</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <button onClick={handleLogout} id='navBtn'>Logout</button>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Nav;
