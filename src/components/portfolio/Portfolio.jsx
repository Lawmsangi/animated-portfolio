import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import projects from '../../data/projects.json'

const Single = ({ project}) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={project.imageSrc} alt="img" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-links">
                <button><a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">Demo</a></button>
                <button><a href={project.source} className="project-link" target="_blank" rel="noopener noreferrer">Source</a></button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {projects.map((project) => (
        <Single project={project} key={project.id} />
      ))}
    </div>
  );
};

export default Portfolio;