import "./about.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opcaity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },

  animate: {
    x: "-1450%",
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 80,
      repeatDelay: 0.1,
    },
  },
};

const About = () => {
  const stack = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "React",
    "REST",
    "Tailwind CSS",
    "Node.js",
    "MongoDb",
  ];

  return (
    <div className="about" initial="initial" whileInView="animate">
      <div className="wrapper">
        <div className="imageContainer">
          <img src="./Profile.jfif" alt="profile picture" />
        </div>
        <div className="textContainer">
          <div className="contentContainer">
            <h2>Creative with passion for software development</h2>
            <br />
            <p>
              I am a self-starter with an arsenal of technical skills in
              front-end and back-end technologies. My expertise lies in crafting
              dynamic, engaging interfaces through writing clean and optimized
              code and utilizing cutting-edge development tools and techniques.
              As a hard-worker and avid learner, I would make a great addition
              to any team.
            </p>
            <br />
            <p>
              Currently diving into the world of Next.js and developing my
              programming skills in a bootcamp, where I am studying Java, SQL,
              Spring Boot, and project management methodologies.
            </p>
          </div>
          <ul className="stackContainer">
            {stack.map((item) => (
              <motion.li key={item} whileHover={{ background: "royalblue" }}>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <motion.div
        className="slidingText"
        variants={sliderVariants}
        initial="initial"
        whileInView="animate"
      >
        HTML CSS JAVASCRIPT TYPESCRIPT REACT NODE EXPRESS MONGODB
      </motion.div>
    </div>
  );
};

export default About;
