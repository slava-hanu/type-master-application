import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = ({ login }) => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.login}>{login}</div>
        <div>
          <h1>TYPE_MASTER </h1>
        </div>
        <div className={styles.nav}>
          <NavLink to="/homepage">О нас</NavLink>
          <NavLink to="/typing-test">Тест скорости</NavLink>
          <NavLink to="/results-history">История результатов</NavLink>
          <NavLink to="/information">Информация</NavLink>
        </div>
      </div>
    </div>
  );
};
export default Header;
