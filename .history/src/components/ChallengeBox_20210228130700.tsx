import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  return (
    <div className={styles.challengeBoxContainer}>
      <div className={styles.challegeNotActive}>
        <strong> Finalize um ciclo para receber um desafio</strong>
      </div>
    </div>
  );
}
