import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/tea-assets/bg.webp"
          objectFit="cover"
          layout="fill"
          alt=""
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            The tea of the Sahara in Morocco is a cherished cultural tradition,
            deeply rooted in the daily lives of the desert communities. Known as
            &quot;Sahrawi tea&quot; or &quot;Tuareg tea&quot;
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RECIPTS</h1>
          <p className={styles.text}>Sahrawi Herbal Infusion</p>
          <p className={styles.text}>Sahrawi Tea with Nana Mint</p>
          <p className={styles.text}>Orange Blossom Sahrawi Tea</p>
          <p className={styles.text}>Lemon-Infused Sahrawi Tea</p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            Days
            <br /> 6/7 (No Friday)
          </p>
          <p className={styles.text}>
            Hours
            <br /> 07:00 – 20:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
