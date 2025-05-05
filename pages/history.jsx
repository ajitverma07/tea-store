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
       The Sahrawi tea, known locally and nationally as &quot;Atay,&quot; is prepared in
  a special way according to a very distinctive ritual. It is essential to
  have the &quot;Atay utensils,&quot; which are various necessary vessels
  specifically designed for it, before anything else. These utensils
  include a clay or metal container called &quot;Al-Majmar,&quot; where the embers
  are placed to allow the positioning of the &quot;Al-Maghrej&quot; or teapot.
  This is a special container in which water boils to prepare the tea.
  Additionally, on it, later on, the tea pot, known as &quot;Al-Mijmar,&quot; is
  placed to simmer over a low flame. This is done without forgetting the
  &quot;Arabous,&quot; a tool used to blow into the fire to kindle it. Furthermore,
  the &quot;Sinya&quot; or tray is indispensable, which is a flat, round vessel
  usually made of silver or copper. The tea is served in it using the tea
  pot or pitcher, with a famous type called &quot;Tasmimat.&quot; Around it are
  small glass cups in which tea is presented to guests. The tray may also
  include a larger metal cup, designated for the quantity of water in
  which the tea leaves have been soaked, called &quot;Kass Atchellila.&quot; In
  addition to the &quot;Rabayat,&quot; which are two small containers: the first,
  called &quot;Al-Zanbil,&quot; is dedicated to tea, and the second, &quot;Al-Rbi&apos;a,&quot; is
  designated for sugar. There is also the &quot;Al-Makassara,&quot; which is the
  tool used to crush sugar into particles of various sizes. Not to forget
  the &quot;Zeif Al-Keesan,&quot; meaning the napkin used to dry the cups, ensuring
  their cleanliness and shining brightness.
      </p>
    </div>
  );
};

export default Contact;
