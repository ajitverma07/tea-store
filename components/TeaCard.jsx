// import Image from "next/image";
// import styles from "../styles/PizzaCard.module.css";
// import Link from "next/link";

// const PizzaCard = ({ pizza }) => {
//   return (
//     <div className={styles.container}>
//       <Link href={`/product/${pizza._id}`} passHref>
//         <Image src={pizza.img} alt="" width="500" height="500" />
//       </Link>
//       <h1 className={styles.title}>{pizza.title}</h1>
//       <span className={styles.price}>${pizza.prices[0]}</span>
//       <p className={styles.desc}>{pizza.desc}</p>
//     </div>
//   );
// };

// export default PizzaCard;

import Image from "next/image";
import styles from "../styles/TeaCard.module.css";
import Link from "next/link";

const TeaCard = ({ tea }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${tea._id}`} passHref>
        <Image src={tea.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{tea.title}</h1>
      <span className={styles.price}>${tea.prices[0]}</span>
      <p className={styles.desc}>{tea.desc}</p>
    </div>
  );
};

export default TeaCard;
