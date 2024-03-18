import React from "react";
import generalStyles from "./../sectiongeneral.module.css";

const ContactPage = () => {
  return (
    <div className={generalStyles.parent}>
      <div className={generalStyles.blur}>
        <div className={generalStyles.center}></div>
      </div>
      <div>Contact</div>
    </div>
  );
};

export default ContactPage;