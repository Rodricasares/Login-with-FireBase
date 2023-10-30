import styles from "./Signup.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { InputControl } from "../InputControl/InputControl";

export function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: "", email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitBtnDisable, setSubmitBtnDisable] = useState(false);
  const signup = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Todos los campos son obligatorios");
      return;
    }
    setErrorMsg("");
    setSubmitBtnDisable(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitBtnDisable(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
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
        <h1 className={styles.heading}>Signup</h1>
        <InputControl label='Nombre ' placeholder='Ingrese un nombre'
        onChange={(event)=>setValues((prev)=> ({...prev, name:event.target.value}))}
        ></InputControl>
        <InputControl label='Email ' placeholder='Ingrese un email'
        onChange={(event)=>setValues((prev)=> ({...prev, email:event.target.value}))}
        ></InputControl>
              <InputControl label='Passwork ' placeholder='Ingrese un passwork'
        onChange={(event)=>setValues((prev)=> ({...prev, pass:event.target.value}))}
        ></InputControl>
        <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
            <button onClick={signup} disabled={submitBtnDisable}>Creár usuario</button>
            <p>Iniciar sesión si dispones de tú cuenta de usuario
                <span>
                    <Link to='/login'> Login </Link>
                </span>
            </p>
        </div>
      </div>
    </div>
  );
}
