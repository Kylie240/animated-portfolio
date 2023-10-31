import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Ready Shoot",
    img: "",
    stack: [
      "HTML",
      "CSS",
      "Tailwind",
      "Javascript",
      "React",
      "Express",
      "Node.js",
      "MongoDB",
    ],
    desc: "A handy rental website for cameras, that utilizes authentication via JSONwebtoken and password encryption. Other features include CRUD operations, product filtering, and state management.",
    code: "https://github.com/Kylie240/ready-shoot",
    demo: "https://ready-shoot.netlify.app/",
  },
  {
    id: 2,
    title: "Starting Line",
    img: "/startingLine.png",
    stack: ["HTML", "CSS", "Javascript", "React"],
    desc: "A handy rental website for cameras, that utilizes authentication via JSONwebtoken and password encryption. Other features include CRUD operations, product filtering, and state management.",
    code: "https://github.com/Kylie240/ecommerce-store",
    demo: "https://starting-line.netlify.app/",
  },
  //   {
  //     id: 3,
  //     title: "WikiRocket",
  //     img: "/startingLine.png",
  //     stack: ["HTML", "CSS", "Javascript", "Typescript", "React", "Next.js"],
  //     desc: "WikiRocket is Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, enim!",
  //     code: "https://github.com/Kylie240/wikirocket-nextjs-app",
  //     demo: "https://oliver-wikirocket.netlify.app/",
  //   },
  {
    id: 4,
    title: "Word Search",
    img: "/wordSearch.png",
    stack: ["HTML", "CSS", "Tailwind", "Javascript", "React"],
    desc: "A handy rental website for cameras, that utilizes authentication via JSONwebtoken and password encryption. Other features include CRUD operations, product filtering, and state management.",
    code: "https://github.com/Kylie240/word-search",
    demo: "https://oliver-word-search.netlify.app/",
  },
  {
    id: 5,
    title: "Smoothie Queen",
    img: "/smoothieQueen.png",
    stack: [
      "HTML",
      "CSS",
      "Tailwind",
      "Javascript",
      "React",
      "Express",
      "Node.js",
      "MongoDB",
    ],
    desc: "Find, save, and create you favorite smoothie recipes. Features the ability to create an account, edit saved recipes, and create a shopping list of based off of listed ingredients.",
    code: "https://github.com/Kylie240/recipe-app",
    demo: "https://oliver-smoothie-queen.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.image} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <ul>
              {item.stack.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
            <p>{item.desc}</p>
            <div className="buttonContainer">
              <button>
                <a href={item.code} target="_blank">
                  Code
                </a>
              </button>
              <button>
                <a href={item.demo} target="_blank">
                  Demo
                </a>
              </button>
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
        <h1>Portfolio</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
