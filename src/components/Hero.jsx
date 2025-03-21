import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-black">
      <div
        className={`absolute inset-0 top-[140px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white font-orbitron`} >
            Hola, somos <span className="text-[#3BB9FF] font-orbitron">Aurigital!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 font-quicksand `}>
            Bienvenido a nuestro portafolio. Aquí podrás ver nuestros {" "}
            <br className="sm:block hidden" />
            nuevos diseños de sitios web
          </p>
        </div>
      </div>

      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
