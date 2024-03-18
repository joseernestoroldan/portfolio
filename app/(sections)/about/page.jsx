import React from "react";
import generalStyles from "./../sectiongeneral.module.css";

const AboutPage = () => {
  return (
    <div className={generalStyles.parent}>
      <div className={generalStyles.blur}>
        <div className={generalStyles.center}></div>
      </div>
      <div>About</div>
    </div>
  );
};

export default AboutPage;
