import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER ATAY NOW!</div>
          <div className={styles.text}>+2126 2525 9070</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/history">
            <li className={styles.listItem}>History</li>
          </Link>
          <Link href="/legacy">
            <li className={styles.listItem}>Legacy</li>
          </Link>

          <Link href="/">
            <Image
              src="/img/tea-assets/logo.png"
              alt="logo"
              width={60}
              height={60}
            />
          </Link>

          <Link href="/admin">
            <li className={styles.listItem}>Admin</li>
          </Link>
          <Link href="/contact">
            <li className={styles.listItem}>Contact</li>
          </Link>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
