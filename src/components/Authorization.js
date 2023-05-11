import { useDispatch } from "react-redux";
import styles from "./Authorization.module.css";
import { mainSliceActions } from "../store/mainSlice";
import { useEffect, useState } from "react";

const Authorization = () => {
  const [login, setLogin] = useState("");

  const dispatch = useDispatch();
  const loggedInHandler = () => {
    dispatch(mainSliceActions.onLogeIn());

    localStorage.setItem("login", login);
    dispatch(mainSliceActions.login(login));
  };
  useEffect(() => {
    const savedLogin = localStorage.getItem("login");
    if (savedLogin) {
      setLogin(savedLogin);
    }
  }, []);

  const inputLoginHandler = (event) => {
    setLogin(event.target.value);
  };

  return (
    <div className={styles.control}>
      <div className={styles.content}>
        <h1>Придумайте имя</h1>
        <input autoFocus onChange={inputLoginHandler} value={login} />
        <button onClick={loggedInHandler}>готово</button>
      </div>
    </div>
  );
};
export default Authorization;
