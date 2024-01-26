// pages/contact.js
import React from "react";
import Image from "next/image";

import Head from "next/head";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>History - THE BEST ATAY IN THE WORLD</title>
        <meta name="description" content="Contact ATAY for inquiries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>HISTORY</h1>

      <div className={styles.imageContainer}>
        <div>
          <Image
            width={200}
            height={200}
            src="/img/tea-logo/ig1.jpg"
            alt="Styled Image 1"
          />
        </div>
        <div>
          <Image
            width={200}
            height={200}
            src="/img/tea-logo/ig2.webp"
            alt="Styled Image 2"
          />
        </div>
        <div>
          <Image
            width={200}
            height={200}
            src="/img/tea-logo/ig3.jpg"
            alt="Styled Image 3"
          />
        </div>
        <div>
          <Image
            width={200}
            height={200}
            src="/img/tea-logo/ig4.jpg"
            alt="Styled Image 4"
          />
        </div>
      </div>
      <p className={styles.desc}>
        The Sahrawi tea, known locally and nationally as "Atay," is prepared in
        a special way according to a very distinctive ritual. It is essential to
        have the "Atay utensils," which are various necessary vessels
        specifically designed for it, before anything else. These utensils
        include a clay or metal container called "Al-Majmar," where the embers
        are placed to allow the positioning of the "Al-Maghrej" or teapot. This
        is a special container in which water boils to prepare the tea.
        Additionally, on it, later on, the tea pot, known as "Al-Mijmar," is
        placed to simmer over a low flame. This is done without forgetting the
        "Arabous," a tool used to blow into the fire to kindle it. Furthermore,
        the "Sinya" or tray is indispensable, which is a flat, round vessel
        usually made of silver or copper. The tea is served in it using the tea
        pot or pitcher, with a famous type called "Tasmimat." Around it are
        small glass cups in which tea is presented to guests. The tray may also
        include a larger metal cup, designated for the quantity of water in
        which the tea leaves have been soaked, called "Kass Atchellila." In
        addition to the "Rabayat," which are two small containers: the first,
        called "Al-Zanbil," is dedicated to tea, and the second, "Al-Rbi'a," is
        designated for sugar. There is also the "Al-Makassara," which is the
        tool used to crush sugar into particles of various sizes. Not to forget
        the "Zeif Al-Keesan," meaning the napkin used to dry the cups, ensuring
        their cleanliness and shining brightness.
      </p>
    </div>
  );
};

export default Contact;
