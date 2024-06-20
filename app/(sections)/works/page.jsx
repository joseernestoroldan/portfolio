import React from "react";
import generalStyles from "./../sectiongeneral.module.css";
import styles from "./works.module.css";
import { getData } from "@/client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
//import { revalidatePath } from "next/cache";

const WorksPage = async () => {
  //revalidatePath("./works")
  const works = await getData("works");
  console.log(works)
  return (
    <div className={generalStyles.parent}>
      <div className={generalStyles.blur}>
        <div className={generalStyles.center}></div>
      </div>

      <div className={styles.container}>
        {works.map((work) => (
          
          <div className={styles.card} key={work._id}>
            <div className={styles.screenShot}>
              <Image
                className={styles.image}
                src={work.image}
                alt={work.title}
                width={230}
                height={140}
              />
            </div>
            <div className={styles.title}>
              <h2>{work.title}</h2>
            </div>
            <div className={styles.description}>
              <p className={styles.paragraph}>
                {work.description}
              </p>
              <p className={styles.readMore}><Link  href={"/"}>Read more</Link></p>
            </div>
            <div className={styles.links}>
              Links:
              <FaExternalLinkSquareAlt className={styles.externalLink}/>
              <FaGithub className={styles.gitHub} />
              <SiNetlify className={styles.netlify} />
              <TbBrandVercel className={styles.vercel} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorksPage;
