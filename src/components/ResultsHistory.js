import styles from "./ResultsHistory.module.css";
import { useState, useEffect } from "react";

const ResultsHistory = ({ login }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(
      `https://slava-e3ecb-default-rtdb.firebaseio.com/${login}typing-test-results.json`
    )
      .then((response) => response.json())
      .then((data) => {
        const fetchedResults = [];
        for (const key in data) {
          fetchedResults.push({
            id: key,
            ...data[key],
          });
        }
        setResults(fetchedResults);
      })
      .catch((error) => console.log(error));
  }, [login]);

  return (
    <div className={styles.control}>
      <div>
        <table>
          <thead>
            <tr>
              <th>Дата и время</th>
              <th>Время сессии</th>
              <th>Набрано символов</th>
              <th>Скорость печати</th>
              <th>Уровень навыка</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.newDate}>
                <td>{result.newDate}</td>
                <td>{result.sessionTime} сек.</td>
                <td>{result.totalTypedCount}</td>
                <td>{result.wpm}</td>
                <td>{result.skillLevel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.bottom}></div>
    </div>
  );
};

export default ResultsHistory;
