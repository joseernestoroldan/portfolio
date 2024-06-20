import Link from "next/link";
import React from "react";
import styles from "../about.module.css";

import { FaFigma, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaAngular } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaVuejs } from "react-icons/fa";
import { SiSanity } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiPrisma } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiContentful } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Icons = () => {
  return (
    <div className={styles.icons}>
      <div className={styles.iconContainer}>
        <FaReact className={styles.icon} />
        <div className={styles.iconTitles}>
          <p>ReactJS</p>
          <Link
            className={styles.link}
            href={"https://es.react.dev/"}
            target="_blank"
          >
            Documentation
          </Link>
        </div>
      </div>

      <div className={styles.iconContainer}>
        <TbBrandNextjs className={styles.icon} />
        <div className={styles.iconTitles}>
          <p>NextJS</p>
          <Link
            className={styles.link}
            href={"https://nextjs.org/"}
            target="_blank"
          >
            Documentation
          </Link>
        </div>
      </div>

      <div className={styles.iconContainer}>
        <IoLogoJavascript className={styles.icon} />
        <div className={styles.iconTitles}>
          <p>Javascript</p>
          <Link
            className={styles.link}
            href={"https://developer.mozilla.org/es/docs/Web/JavaScript"}
            target="_blank"
          >
            Documentation
          </Link>
        </div>
      </div>

      <div className={styles.iconContainer}>
        <FaAngular className={styles.icon} />
        <div className={styles.iconTitles}>
          <p>Angular</p>
          <Link
            className={styles.link}
            href={"https://angular.io/"}
            target="_blank"
          >
            Documentation
          </Link>
        </div>
      </div>

      <div className={styles.iconContainer}>
        <IoLogoVercel className={styles.icon} />
        <div className={styles.iconTitles}>
          <p>Vercel</p>
          <Link
            className={styles.link}
            href={"https://vercel.com/"}
            target="_blank"
          >
            Documentation
          </Link>
        </div>
      </div>

      <div className={styles.iconContainer}>
        <FaVuejs className={styles.icon} />
        <div className={styles.iconTitles}>
          <p>VueJS</p>
          <Link
            className={styles.link}
            href={"https://vuejs.org/"}
            target="_blank"
          >
            Documentation
          </Link>
        </div>
      </div>

      <div className={styles.iconContainer}>
        <SiSanity className={styles.icon} />
        <div className={styles.iconTitles}>
          <p>Sanity.io</p>
          <Link
            className={styles.link}
            href={"https://www.sanity.io/"}
            target="_blank"
          >
            Documentation
          </Link>
        </div>
      </div>

      <div className={styles.iconContainer}>
        <DiMongodb className={styles.icon} />
        <div className={styles.iconTitles}>
          <p>MongoDB</p>
          <Link
            className={styles.link}
            href={"https://www.mongodb.com/"}
            target="_blank"
          >
            Documentation
          </Link>
        </div>
      </div>

      <div className={styles.iconContainer}>
        <GrMysql className={styles.icon} />
        <div className={styles.iconTitles}>
          <p>MySQL</p>
          <Link
            className={styles.link}
            href={"https://www.mysql.com/"}
            target="_blank"
          >
            Documentation
          </Link>
        </div>
      </div>

      <div className={styles.iconContainer}>
        <SiPostgresql className={styles.icon} />
        <div className={styles.iconTitles}>
          <p>PostgreSQL</p>
          <Link
            className={styles.link}
            href={"https://www.postgresql.org/"}
            target="_blank"
          >
            Documentation
          </Link>
        </div>
      </div>

      <div className={styles.iconContainer}>
        <SiPrisma className={styles.icon} />
        <div className={styles.iconTitles}>
          <p>Prisma.io</p>
          <Link
            className={styles.link}
            href={"https://www.prisma.io/"}
            target="_blank"
          >
            Documentation
          </Link>
        </div>
      </div>

      <div className={styles.iconContainer}>
        <SiNetlify className={styles.icon} />
        <div className={styles.iconTitles}>
          <p>Netlify</p>
          <Link
            className={styles.link}
            href={"https://www.netlify.com/"}
            target="_blank"
          >
            Documentation
          </Link>
        </div>
      </div>

      <div className={styles.iconContainer}>
        <SiContentful className={styles.icon} />
        <div className={styles.iconTitles}>
          <p>Contentful</p>
          <Link
            className={styles.link}
            href={"https://www.contentful.com/"}
            target="_blank"
          >
            Documentation
          </Link>
        </div>
      </div>

      <div className={styles.iconContainer}>
        <FaWordpress className={styles.icon} />
        <div className={styles.iconTitles}>
          <p>Wordpress</p>
          <Link
            className={styles.link}
            href={"https://wordpress.com/"}
            target="_blank"
          >
            Documentation
          </Link>
        </div>
      </div>

      <div className={styles.iconContainer}>
        <FaGithub className={styles.icon} />
        <div className={styles.iconTitles}>
          <p>Github</p>
          <Link
            className={styles.link}
            href={"https://github.com/"}
            target="_blank"
          >
            Documentation
          </Link>
        </div>
      </div>

      <div className={styles.iconContainer}>
        <FaFigma className={styles.icon} />
        <div className={styles.iconTitles}>
          <p>Figma</p>
          <Link
            className={styles.link}
            href={"https://figma.com"}
            target="_blank"
          >
            Documentation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Icons;
