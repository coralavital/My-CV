// import { motion } from "framer-motion";

import { styles } from "../styles";
import IMAGE from "../assets/me.jpeg";

const Hero = () => {
  return (
    <section className="relative w-full h-[650px] mx-auto">
      <div
        className={`${styles.padding} absolute inset-0 top-[150px] max-w-7xl mx-auto flex flex-row items-start gap-2`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#8D7B68]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#8D7B68]">Coral</span>
          </h1>
          <p className={`${styles.heroSubText} mt-5 mr-4`}>
            I am a skilled full-stack developer with a strong background in both
            server-side and client-side development.
          </p>
        </div>
        <div className="about_me w-full aspect-w-1 aspect-h-1 rounded-2xl bg-gradient-to-br from-transparent to-primary flex items-center justify-center mt-5">
          <div className="about_me-image rounded-2xl overflow-hidden transform -rotate-10 hover:rotate-12 transition bg-white bg-opacity-60">
            <img src={IMAGE} alt="About_Image" className="w-[70%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
