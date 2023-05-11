import Authorization from "./Authorization";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.css";

import { useSelector } from "react-redux";

const Layout = (props) => {
  const loggedIn = useSelector((state) => state.main.loggedIn);
  const login = props.login;
  return (
    <div>
      {!loggedIn && (
        <div>
          <Authorization />{" "}
        </div>
      )}

      <div className={styles.control}>
        <Header login={login} />

        <div className={styles.content}>{props.children}</div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
