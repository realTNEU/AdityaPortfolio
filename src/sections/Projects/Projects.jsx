import styles from './ProjectsStyles.module.css';
import tasks from '../../assets/images.jpeg';
import identity from '../../assets/pngtree-vector-id-icon-png-image_1024864.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={tasks}
          link="#"
          h3="Task Scheduler using DAG"

        />
        <ProjectCard
          src={identity}  
          link="#"
          h3="DIMS"
          p="Digital identity management system leveraging blockchain"
        />
      </div>
    </section>
  );
}

export default Projects;
