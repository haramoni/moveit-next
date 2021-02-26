import { useState } from "react";
import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
  const [time, setTime] = useState(25 * 60);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(minutes).padStart(2, "0").split("");

  function startContdown() {}

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{minuteRight}</span>
        </div>
      </div>

      <button
        onClick={startContdown}
        type="button"
        className={styles.countdownButton}
      >
        Iniciar um ciclo
      </button>
    </div>
  );
}
