import styles from "../styles/TeaList.module.css";
import TeaCard from "./TeaCard";

const TeaList = ({ teaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST TEA IN THE WORLD</h1>
      <p className={styles.desc}>
        Tea holds a significant position in the heart of the customs and
        traditions in the Saharan regions of Morocco. It also represents a
        symbol of generosity and hospitality. The Sahrawis have surrounded it
        with special rituals, imprinting their daily lifestyle for decades.
      </p>
      <div className={styles.wrapper}>
        {teaList.map((tea) => (
          <TeaCard key={tea._id} tea={tea} />
        ))}
      </div>
    </div>
  );
};

export default TeaList;
