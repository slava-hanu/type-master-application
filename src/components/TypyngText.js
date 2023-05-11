import Panel from "./Panel";
import styles from "./TypyngText.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { mainSliceActions } from "../store/mainSlice";
import { useSelector } from "react-redux";

const TypyngText = ({ login }) => {
  const dispatch = useDispatch();

  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalTypedCount, setTotalTypedCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const textareaVisibilyti = useSelector(
    (state) => state.main.isTextareaVisibilyti
  );

  useEffect(() => {
    if (text.length === 0) {
      setStartTime(null);
      setEndTime(null);
      setCurrentIndex(0);
      setTotalTypedCount(0);
    } else if (text.length === 1) {
      setStartTime(Date.now());
      setEndTime(null);
      setCurrentIndex(0);
      setTotalTypedCount(0);
    } else if (currentIndex === text.length - 1) {
      setEndTime(Date.now());
    }
    setTotalTypedCount(text.length);
  }, [text, currentIndex]);

  const handleKeyPress = (event) => {
    setCurrentIndex((index) => index + 1);
    setIsVisible(false);
  };

  const calculateWPM = () => {
    const minutes = (endTime - startTime) / 1000 / 60;
    const grossWPM = totalTypedCount / 5 / minutes;
    const netWPM = grossWPM.toFixed(2);
    return netWPM;
  };

  const calculateSessionTime = () => {
    if (startTime && endTime) {
      const sessionTime = ((endTime - startTime) / 1000).toFixed(2);
      return sessionTime;
    }
    return "";
  };

  const getSkillLevel = (wpm) => {
    if (wpm >= 90) {
      return "Чемпион";
    } else if (wpm >= 21 && wpm <= 30) {
      return "Новичок";
    } else if (wpm >= 31 && wpm <= 40) {
      return "Средний";
    } else if (wpm >= 41 && wpm <= 50) {
      return "Продвинутый";
    } else if (wpm >= 51 && wpm <= 60) {
      return "Опытный";
    } else if (wpm >= 61 && wpm <= 70) {
      return "Профессионал";
    } else if (wpm >= 71 && wpm <= 80) {
      return "Эксперт";
    } else if (wpm >= 81 && wpm <= 90) {
      return "Мастер";
    } else {
      return;
    }
  };

  const revealResultHandler = () => {
    dispatch(mainSliceActions.onRevealResult());

    
    const date = new Date();
    const month = date.toLocaleString();
    const results = {
      newDate: month,
      wpm: calculateWPM(),
      totalTypedCount,
      sessionTime: calculateSessionTime(),
      skillLevel: getSkillLevel(calculateWPM()),
    };

    fetch(
      `https://slava-e3ecb-default-rtdb.firebaseio.com/${login}typing-test-results.json`,
      {
        method: "POST",
        body: JSON.stringify(results),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    textareaVisibilyti && (
      <div className={styles.control}>
        <div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeyPress}
            isVisible={isVisible}
          />
          {isVisible && (
            <div className={styles.p}>
              <p>Начните печатать, и таймер автоматически запустится!</p>
              <p style={{ color: "black" }}>
                {" "}
                Таймер автоматически останавливается, когда вы прекращаете
                печатать. <br></br>Если вы продолжите печатать после паузы,
                время паузы будет добавлено к общей продолжительности сессии.
              </p>
            </div>
          )}
        </div>

        {!isVisible && (
          <button onClick={revealResultHandler}>показать результаты</button>
        )}
        <div>
          <div>
            <div>
              <Panel
                WPM={calculateWPM()}
                TotalTypedCount={totalTypedCount}
                SessionTime={calculateSessionTime()}
                Level={getSkillLevel(calculateWPM())}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default TypyngText;
