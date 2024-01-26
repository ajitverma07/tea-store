import React from "react";
import Head from "next/head";
import styles from "../styles/Contact.module.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us - THE BEST ATAY IN THE WORLD</title>
        <meta name="description" content="Contact ATAY for inquiries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>THE BEST ATAY IN THE WORLD</h1>
      <p className={styles.desc}>
        Tea holds a significant position in the heart of the customs and
        traditions in the Saharan regions of Morocco. It also represents a
        symbol of generosity and hospitality. The Sahrawis have surrounded it
        with special rituals, imprinting their daily lifestyle for decades.
      </p>
      <div className={styles.socialIcons}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebook size="1x" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter size="1x" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram size="1x" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size="1x" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
