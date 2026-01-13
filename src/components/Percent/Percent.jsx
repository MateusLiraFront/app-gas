import styles from "./Percent.module.css";

export function Percent({ percent, className }) {
  const getColorClass = () => {
    if (percent < 40) return "colorRed";
    if (percent <= 60) return "colorYellow";
    return "colorGreen";
  };

  return (
    <div className={`${styles.wrapper} ${className || ""}`}>
      <div className={`${styles.display} ${styles[getColorClass()]}`}>
        <div className={styles.body}></div>
        <div className={styles.top}></div>
        <div className={styles.bot}></div>

        <div className={styles.alca}></div>

        <div className={styles.pin}>
          <div className={styles.pinVert}></div>
          <div className={styles.pinHor}></div>
        </div>

        <div className={styles.center}></div>

        <label className={styles.percent}>{percent}%</label>
      </div>
    </div>
  );
}

export function Status(){
  return(

      <label style={{ color: "#d49100" }}>Mediano</label>
   
  )
}