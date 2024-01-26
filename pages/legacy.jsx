import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Contact.module.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Legacy - THE BEST ATAY IN THE WORLD</title>
        <meta name="description" content="Contact ATAY for inquiries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>OUR LEGACY ATAY</h1>
      <div className={styles.imageContainer}>
        <div>
          <Image
            width={200}
            height={200}
            src="/img/tea-boxes/4.png"
            alt="Styled Image 1"
          />
        </div>
        <div>
          <Image
            width={200}
            height={200}
            src="/img/tea-boxes/5.png"
            alt="Styled Image 2"
          />
        </div>
        <div>
          <Image
            width={200}
            height={200}
            src="/img/tea-boxes/6.png"
            alt="Styled Image 3"
          />
        </div>
        <div>
          <Image
            width={200}
            height={200}
            src="/img/tea-boxes/7.png"
            alt="Styled Image 4"
          />
        </div>
      </div>{" "}
      <div className={styles.imageContainer}>
        <div>
          <Image
            width={200}
            height={200}
            src="/img/tea-boxes/8.png"
            alt="Styled Image 1"
          />
        </div>
        <div>
          <Image
            width={200}
            height={200}
            src="/img/tea-boxes/9.png"
            alt="Styled Image 2"
          />
        </div>
        <div>
          <Image
            width={200}
            height={200}
            src="/img/tea-boxes/10.png"
            alt="Styled Image 3"
          />
        </div>
        <div>
          <Image
            width={200}
            height={200}
            src="/img/tea-boxes/11.png"
            alt="Styled Image 4"
          />
        </div>
      </div>{" "}
      <div className={styles.imageContainer}>
        <div>
          <Image
            width={200}
            height={200}
            src="/img/tea-boxes/12.png"
            alt="Styled Image 1"
          />
        </div>
        <div>
          <Image
            width={200}
            height={200}
            src="/img/tea-boxes/333.png"
            alt="Styled Image 2"
          />
        </div>
        <div>
          <Image
            width={200}
            height={200}
            src="/img/tea-boxes/laspalmas.png"
            alt="Styled Image 3"
          />
        </div>
        <div>
          <Image
            width={200}
            height={200}
            src="/img/tea-boxes/tantan.png"
            alt="Styled Image 4"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
