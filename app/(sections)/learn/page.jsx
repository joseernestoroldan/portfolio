import React from "react";
import generalStyles from "./../sectiongeneral.module.css";

const LearnPage = () => {
  return (
    <div className={generalStyles.parent}>
      <div className={generalStyles.blur}>
        <div className={generalStyles.center}></div>
      </div>
      <div>Learn</div>
    </div>
  );
};

export default LearnPage;