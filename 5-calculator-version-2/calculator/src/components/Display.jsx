import styles from './Display.module.css';

const Display = ({ displayValue }) => {
  return (
    <input
      type="text"
      name=""
      className={styles.display}
      value={displayValue}
      readOnly
    />
  );
};

export default Display;
