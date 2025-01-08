import styles from './ContactPage.module.css'; // Import your styles

export default function ContactPage() {
  return (
    <>
      <h1 className={styles.title}>Get in Touch</h1>
      <p className={styles.intro}>
        I’d love to hear from you! Whether you have a question, want to collaborate on a project, or just want to chat, feel free to reach out using the information below.
      </p>
      <div className={styles.contactInfo}>
        <h2 className={styles.subtitle}>Contact Information:</h2>
        <p>Email: <a href="mailto:victordev73@gmail.com" className={styles.emailLink}>victordev73@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/samuel-daniel-b667602a1" target="_blank" rel="noopener noreferrer" className={styles.link}>Samuel Daniel</a></p>
        <p>GitHub: <a href="https://github.com/sophrone" target="_blank" rel="noopener noreferrer" className={styles.link}>Sophrone</a></p>
      </div>
      <div className={styles.socialMedia}>
        <h2 className={styles.subtitle}>Follow Me:</h2>
        <p>Frontend Mentor: <a href="https://www.frontendmentor.io/profile/sophrone" target="_blank" rel="noopener noreferrer" className={styles.link}>Sophrone</a></p>
      </div>
    </>
  );
}
