import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

import "./contact.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );
      alert("Message envoyé !");
    } catch (error) {
      alert("Erreur lors de l'envoi.");
    }
  };

  const { t } = useTranslation();

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder={t("contact.name")} required />
      <input type="email" name="email" placeholder={t("contact.email")} required />
      <textarea name="message" placeholder={t("contact.message")} required />
      <button type="submit">{t("contact.send")}</button>
    </form>
  );
};

export default Contact;
