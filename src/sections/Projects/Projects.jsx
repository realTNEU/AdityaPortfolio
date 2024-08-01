import styles from './ProjectsStyles.module.css';
import video from '../../assets/video.png';
import controller from '../../assets/controller.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={controller}
          link="https://github.com/realTNEU/GameGear-ameya"
          h3="GameGear"
          p="Welcome to GameGear, an ambitious project where you can build your perfect PC based on your budget! This website is still under construction, but it's packed with potential."
        />
        <ProjectCard
          src={video}
          link="https://github.com/realTNEU/VideoElementGenerator"
          h3="VideoElementGenerator"
          p="This is a javascript script, which helps youtuber to fetch new youtube ideas and then write a script for th generated yourube ideas"
        />
      </div>
    </section>
  );
}

export default Projects;
