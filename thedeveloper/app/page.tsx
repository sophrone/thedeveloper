'use client'
import { useEffect, useState } from 'react';
import styles from './HomePage.module.css'; 

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Hello, I am Samuel Daniel!🤠</h1>
        <p className={styles.intro}>
          A passionate self-taught Frontend Web Developer on a mission to craft 
          stunning and user-friendly web experiences. I believe that great design 
          and functionality go hand in hand, and I strive to bring that vision to 
          every project I tackle.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>✨ About Me</h2>
        <p>
          My journey into web development began out of curiosity and a desire to 
          create. From building simple websites to complex web applications, 
          every challenge has fueled my passion. I am constantly learning and 
          experimenting, and it has been an exciting experience!
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🛠️ My Skills</h2>
        <p>
          I specialize in a variety of technologies that help bring ideas to life:
        </p>
        <ul className={styles.skillList}>
          <li>HTML5, CSS3, JavaScript, TypeScript</li>
          <li>React, NextJs & VueJs</li>
          <li>Responsive Design</li>
          <li>Version Control (Git)</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🌟 What I Can Do for You</h2>
        <p>
          Whether you need a sleek website, a dynamic web application, 
          or a responsive design, I’m here to help! Let’s discuss how 
          we can collaborate to turn your ideas into reality.
        </p>
        <p>
          <strong>Let’s connect and create something amazing together!</strong>
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>💬 What People Say</h2>
        <blockquote className={styles.blockquote}>
          <p>
            &quot;He really made magic with our website! His attention to detail and 
            creativity are unmatched. Highly recommend!👍🏻&quot; 
            <br />— TailoredByKaris
          </p>
        </blockquote>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📬 Let’s Work Together</h2>
        <p>
          I’m always open to new opportunities and collaborations. 
          If you have a project in mind or just want to chat, feel free to reach out! 
          <a href="/contact" className={styles.link}> Contact me!</a>
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📄 View or Download My CV</h2>
        <p>
          Want to know more about my professional journey? 
          You can <a href="/SAMUEL DANIEL CV.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>view my CV</a> 
          online or <a href="/SAMUEL DANIEL CV.pdf" download className={styles.link}>download it</a> to see my experience and skills.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🌍 Beyond Coding</h2>
        <p>
          When I’m not coding, you’ll find me making sweet beats🎧, playing the piano🎹, or reading comic books📔. 
          Life is all about balance, right?
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🔗 Connect with Me</h2>
        <p>
          Let’s stay connected! Follow me on my social channels:
        </p>
        <ul className={styles.socialList}>
          <li><a href="https://github.com/sophrone" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a></li>
          <li><a href="https://linkedin.com/in/samuel-daniel-b667602a1" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a></li>
        </ul>
      </section>

      {/* Back to Top Button */}
      <button 
        className={`${styles.backToTop} ${showButton ? styles.visible : ''}`} 
        onClick={scrollToTop}
      >
        Back to Top
      </button>
    </div>
  );
}
