import { useRef } from "react";
import emailjs from "@emailjs/browser";

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

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Votre nom" required />
      <input type="email" name="email" placeholder="Votre email" required />
      <textarea name="message" placeholder="Votre message" required />
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default Contact;
