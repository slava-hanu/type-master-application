import { useDispatch, useSelector } from "react-redux";
import { nextText } from "./nextText.js";
import styles from "./TextField.module.css";
import { mainSliceActions } from "../store/mainSlice.js";
import { useState } from "react";
import TypyngText from "./TypyngText.js";
import Typewriter from "./Typewriter.js";

const TextField = ({ login }) => {
  const [text, setText] = useState("");

  const messageInvisible = useSelector((state) => state.main.textHide);

  const buttonVisibilyti = useSelector(
    (state) => state.main.isButtonVisibilyti
  );
  const buttonVisibilytis = useSelector(
    (state) => state.main.isButtonVisibilytis
  );

  const dispatch = useDispatch();

  const nexxtText = () => {
    setText(nextText[Math.floor(Math.random() * 8)].text);

    dispatch(mainSliceActions.isButtonVisibilyti());
    dispatch(mainSliceActions.onTextHide());
  };
  const buttonVisibilytisHandler = () => {
    dispatch(mainSliceActions.isButtonVisibilytis());
    dispatch(mainSliceActions.onTextareaVisibilyti());
  };

  const message_1 =
    "Начните печатать, и таймер автоматически запустится!. Таймер автоматически остановится, когда вы прекратите печатать. Если вы продолжите печатать после паузы, время паузы будет добавлено к общей продолжительности сессии.";

  return (
    <div className={styles.content}>
      {messageInvisible && (
        <h4>
          {" "}
          <Typewriter login={login} text={message_1} delay={40} />
        </h4>
      )}

      <div className={styles.text}>{text}</div>
      {buttonVisibilytis && (
        <div className={styles.selected}>
          <button onClick={nexxtText}>
            {!buttonVisibilyti ? "выбрать текст" : "выбрать другой текст"}
          </button>
          {buttonVisibilyti && (
            <button onClick={buttonVisibilytisHandler}>готово</button>
          )}
        </div>
      )}
      <TypyngText login={login} />
    </div>
  );
};
export default TextField;
