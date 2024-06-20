import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>This is my Portfolio</p>

        <div>
          By{" "}
          <Image
            src="/LogoColor.svg"
            alt="code2steps logo"
            className={styles.code2stepsLogo}
            width={120}
            height={30}
            priority
          />
        </div>
      </div>

      <div className={styles.center}>
        <h1 className={styles.title}>Welcome</h1>
      </div>

      <div className={styles.grid}>
        <Link href="/about" className={styles.card}>
          <h2>
            About
          </h2>
          <p> Up front and clear: This section is all about me!</p>
        </Link>

        <Link href="/works" className={styles.card}>
          <h2>
            Works
          </h2>
          <p> Curious about what I do? Take a peek!</p>
        </Link>

        <Link href="/contact" className={styles.card}>
          <h2>
            Contact
          </h2>
          <p> I can help you to make your dream project comes true.</p>
        </Link>

        <Link href="/learn" className={styles.card}>
          <h2>
            Learn
          </h2>
          <p> Let us learn together about what we really love to do.</p>
        </Link>
      </div>
    </main>
  );
}
