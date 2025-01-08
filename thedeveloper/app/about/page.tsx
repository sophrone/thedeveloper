import styles from './AboutPage.module.css'; 

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.intro}>
        Here is a little bit more about myself...😊
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>My Background</h2>
        <p>
          I began my journey in web development out of curiosity, a desire to create beautiful and functional websites and a way to challenge myself.
          With a background in music production, I utilized my creativity and translated it into web development, which was not an easy feat, but I welcomed the challenge and did it!
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>My Philosophy</h2>
        <p>
          I really believe in the importance of continuous learning and growth. The web development landscape is ever-changing, 
          and I embrace new challenges with enthusiasm and a drive to always better myself. Collaboration and communication are key components of my work ethic.
        </p>
      </section>
    </div>
  );
}
