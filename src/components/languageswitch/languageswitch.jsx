import { useTranslation } from "react-i18next";

import "./languageswitch.scss";

const LanguageSwitch = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="language-switch">
      <button
        onClick={() => i18n.changeLanguage("fr")}
        className={`button-fr ${currentLanguage === "fr" ? "active" : ""}`}
      >
        FR
      </button>
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`button-en ${currentLanguage === "en" ? "active" : ""}`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;
