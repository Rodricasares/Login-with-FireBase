import { Link,useNavigate} from "react-router-dom";
import { useState  } from "react";
import styles from "./Login.module.css";
import { InputControl } from "../InputControl/InputControl";
import { signInWithEmailAndPassword } from "firebase/auth"
import{auth} from "../../../firebase"



export function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({  email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitBtnDisable, setSubmitBtnDisable] = useState(false);
  
  const registro = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Todos los campos son obligatorios");
      return;
    }
    setErrorMsg("");
    setSubmitBtnDisable(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitBtnDisable(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitBtnDisable(false);
        setErrorMsg(err.message)
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <InputControl label='Email ' placeholder='Ingrese un email'
        onChange={(event)=>setValues((prev)=> ({...prev, email:event.target.value}))}
        ></InputControl>
              <InputControl label='Passwork ' placeholder='Ingrese un passwork'
        onChange={(event)=>setValues((prev)=> ({...prev, pass:event.target.value}))}
        ></InputControl>
        <div className={styles.footer}>{errorMsg}
        <button onClick={registro} disabled={submitBtnDisable}>Login</button>
        <p>Crear cuenta 
            <span>
                <Link to='/signup'>Signup</Link>
            </span>
        </p>
        </div>
      </div>
    </div>
  );
}
