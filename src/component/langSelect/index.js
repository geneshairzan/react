import React from "react";
import i18n from "i18n";

export default function App() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex-row fv-center fh-start">
      <div
        className={i18n.language === "id" ? "lang_active" : ""}
        onClick={() => changeLanguage("id")}
      >
        ID
      </div>
      <div>|</div>
      <div
        className={i18n.language === "en" ? "lang_active" : ""}
        onClick={() => changeLanguage("en")}
      >
        EN
      </div>
    </div>
  );
}
