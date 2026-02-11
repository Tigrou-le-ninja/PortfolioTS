import { useTranslation } from "react-i18next";

import "./languageswitch.scss";

const LanguageSwitch = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="language-switch">
      <button onClick={() => i18n.changeLanguage("fr")}>FR</button>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
    </div>
  );
};

export default LanguageSwitch;
