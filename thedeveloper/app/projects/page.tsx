import styles from './ProjectsPage.module.css'; 

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Projects</h1>
      <p className={styles.intro}>
        Here are some of the projects I have worked on that showcase my skills in web development and design.👇🏼⬇️
      </p>
      <ul className={styles.projectList}>
        <li className={styles.projectItem}>
          <h2 className={styles.projectTitle}>Bespoke and Bridal Wears Fashion Website</h2>
          <p className={styles.projectDescription}>
            A Bespoke and Bridal Wears Fashion Website displaying various high-quality designs and dresses for the classy woman. Built with 
            Next.js for server-side rendering and static site generation, enhancing performance and SEO, this website is fully responsive and features smooth scrolling 
            and animations.
          </p>
          <p className={styles.techStack}>Technologies: Next.js, CSS, React</p>
          <a href="https://tailoredbykaris.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            View Project
          </a>
        </li>
        <li className={styles.projectItem}>
          <h2 className={styles.projectTitle}>Ready to Wear Fashion Website</h2>
          <p className={styles.projectDescription}>
            A website for Ready To Wear outfits for the modern woman with versatile and elegant clothing that exude a unique style.
            A robust Next.js application that leverages app routing for a seamless user experience.
          </p>
          <p className={styles.techStack}>Technologies: Next.js, CSS</p>
          <a href="https://serenren.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            View Project
          </a>
        </li>
        <li className={styles.projectItem}>
          <h2 className={styles.projectTitle}>Beige Africa Admin Dashboard</h2>
          <p className={styles.projectDescription}>
            A financial platform built for a generation of Africans who have been NEGLECTED by the &apos;big guys&apos; in finance & investment. I collaborated with other developers as the frontend developer to build the admin dashboard,
            using VueJs for the frontend.
          </p>
          <p className={styles.techStack}>Technologies: Vue.js, CSS</p>
          <a href="https://www.beige.africa/" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            View Project
          </a>
        </li>
      </ul>
      <div className={styles.callToAction}>
        <p>If you are interested in collaborating on a project or have any questions, feel free to reach out!</p>
      </div>
    </div>
  );
}
