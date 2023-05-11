import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.control}>
        <a href="https://t.me/Slavventii_01" target="_blank">
          telegram
        </a>

        <h5>
          {" "}
          TM <sup>'23</sup> - удобный и простой клавиатурный тренажер
        </h5>
        <a href="mailto:2279400a@gmail.com">почта</a>
      </div>
    </footer>
  );
};

export default Footer;
