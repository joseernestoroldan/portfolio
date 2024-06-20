"use client";
import React from "react";
import styles from "../about.module.css";

const AboutText = () => {
  return (
    <div>
      <div>
        <h2 className={styles.heading}>About me</h2>
        <p className={styles.paragraph}>
          Greetings! I&apos;m Jose, a seasoned software developer with a passion
          for crafting exceptional digital experiences. With a robust skill set
          spanning a variety of technologies and frameworks, I specialize in
          delivering cutting-edge web solutions that captivate and inspire.
        </p>
        <p className={styles.paragraph}>
          My journey into the world of software development began with an
          insatiable curiosity and a drive for innovation. Over the years,
          I&apos;ve honed my expertise in frontend development, mastering the
          intricacies of JavaScript and its popular libraries and frameworks
          like ReactJS, Angular, and Vue.js. From crafting sleek user interfaces
          to architecting scalable web applications, I excel in bringing ideas
          to life with precision and finesse.
        </p>
        <p className={styles.paragraph}>
          But my expertise doesn&apos;t end at the frontend. I&apos;m
          well-versed in backend technologies too. Whether it&apos;s leveraging
          the flexibility of composable content clouds like Sanity or the
          efficiency of Prisma ORM, I specialize in building robust backend
          solutions that power seamless user experiences. I&apos;m proficient in
          Node.js for server-side development and proficient in managing data
          with databases such as MongoDB, MySQL, and PostgreSQL.
        </p>
        <p className={styles.paragraph}>
          In addition to my technical prowess, I bring a collaborative and
          detail-oriented approach to every project. I thrive in fast-paced
          environments, where I can leverage my problem-solving skills and
          adaptability to overcome challenges and deliver results that exceed
          expectations.
        </p>
        <p className={styles.paragraph}>
          When I&apos;m not immersed in code, you can find me staying up-to-date
          with the latest trends in technology, experimenting with new tools and
          frameworks, or indulging in outdoor adventures.
        </p>
        <p className={styles.paragraph}>
          Whether you&apos;re a startup looking to establish your online
          presence, an enterprise seeking to optimize your backend operations,
          or an individual with a bold digital vision, I&apos;m here to help
          turn your ideas into reality. Let&apos;s collaborate and create
          something remarkable together!
        </p>
      </div>
    </div>
  );
};

export default AboutText;
