import { Link,  } from "react-router-dom";
import styles from "./Panel.module.css";
import { useDispatch, useSelector } from "react-redux";
import { mainSliceActions } from "../store/mainSlice";

const Panel = (props) => {
  const onReveal = useSelector((state) => state.main.isRevealResult);
  const isVisibilytiModal = useSelector(
    (state) => state.main.isVisibilytiModal
  );
  const dispatch = useDispatch();

  const hideModal = () => {
    dispatch(mainSliceActions.onVisibilytiModal());

    window.location.reload();
  };

  return (
    isVisibilytiModal && (
      <div>
        {onReveal && (
          <div className={styles.control}>
            <div onClick={hideModal} className={styles.mod}></div>
            <div className={styles.modal}>
              <div className={styles.panel}>
                <h1>Поздравляем!</h1>

                <p>
                  Ваш уровень:{" "}
                  <span style={{ color: "red" }}>{props.Level}</span>
                </p>
                <div className={styles.discription}>
                  <h6>
                    Количество набранных символов: {props.TotalTypedCount}
                  </h6>
                  <h6>Скорость, шт./мин.: {props.WPM} </h6>

                  <h6>Время сеанса,секунд: {props.SessionTime} </h6>
                </div>
                <div className={styles.link}>
                  <a href="/typing-test">попробовать ещё раз</a>
                  <Link to="/results-history">к истории результатов</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default Panel;
