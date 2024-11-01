import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { projects } from "../constants";
import { github, website } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
      <motion.div 
          // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
          // variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={website}
                alt="website"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[13.2px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
};

const ProjectCard2 = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div 
        // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="w-full"
    >
      <Tilt
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={website}
                  alt="website"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
      </Tilt>
    </motion.div>
  );
}

// const Works = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>Introducción</p>
//         <h2 className={styles.sectionHeadText}>Descripción general.</h2>
//       </motion.div>

//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className="mt-4 text-secondary text-[17px] max-w3xl leading-[30px]"
//       >
//         Somos Ingenieros en Sistemas con experiencia en TypeScript y JavaScript, y
//         con conocimientos en frameworks como React, Node.js, y Three.js. Somos un grupo de
//         profesionales diligente y colaboramos de cerca con los negocios a los que
//         servimos para crear soluciones eficientes, escalables y fáciles de usar que
//         resuelven problemas del mundo real. ¡Trabajemos juntos para hacer
//         realidad tus ideas!{" "}
//       </motion.p>

//       {/* <div className="mt-20 flex flex-wrap gap-10">
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div> */}

//       {/* <div className="mt-20 flex flex-wrap gap-7 ">
//          {projects.map((project, index) => (
//            <ProjectCard key={`project-${index}`} index={index} {...project} />
//          ))}
//        </div> */}
      

//       {/* <div className="mt-20 flex flex-wrap gap-10">
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div> */}
//     </>
//   );
// };

// export default SectionWrapper(Works, "works");

// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { github, website } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";



const Works = () => {
  return (
    <>
      <motion.div
        // variants={textVariant()}
      >
        <p className={`${styles.sectionSubText} font-quicksandr`}>Nuestro trabajo</p>
        <h2 className={`${styles.sectionHeadText} font-orbitron`}>Proyectos.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          // variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px] font-quicksandr"
        >
         Los siguientes proyectos muestran nuestras habilidades y compromiso con retarnos para crear 
         cada sitio web mejor que el anterior. Nuestro estilo de diseño se adapta a tu marca para que 
         realmente sientas que tienes tu espacio en la web.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 ">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {projects.map((project, index) => (
          // <ServiceCard key={service.title} index={index} {...service} />
          <ProjectCard2 key={`project-${index}`} index={index} {...project} />
        ))}
      </div>  */}
    </>
  );
};

export default SectionWrapper(Works, "works");