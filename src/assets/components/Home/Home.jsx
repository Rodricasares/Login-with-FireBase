import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import styles from "./Home.module.css";

function salir() {
  return auth.signOut();
  navigate("/");
}

export function Home(props) {
  return (
    <div className={styles.home}>   

      <div>
      <h1>Login with Firebase</h1>
      <img src="data:image/png;base64,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" alt="Firebase" />
        <h1>
          <Link to="/login"   style={{
           textDecoration: 'none'
          }}>Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup"   style={{
           textDecoration: 'none'
          }}>Signup</Link>
        </h1>
        <br />
        <h2>{props.name ? `Bienvenido - ${props.name}` : `Inicie sesión`}</h2>
      <button className={styles.button} onClick={salir}>
        Salir
      </button>
      </div>

    
    </div>
  );
}
