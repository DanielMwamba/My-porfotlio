import React from "react";
import Image from "../assets/images/dan.png";
import asmi from "../assets/images/dan.png";
import quiz from "../assets/images/dan.png";
import comfy from "../assets/images/dan.png";
import MyInfo from "./MyInfo";
import { motion } from "framer-motion";
import { techStack } from "../utils/constants.ts";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

interface TechStackItem {
  name: string;
  link: string;
}

const Content: React.FC = () => {
  return (
    <div className="flex-col flex-1 order-1 col-span-4 md:order-none">
      <div className="container max-w-full mx-auto 2xl:max-w-6xl">
        <section
          className="min-h-[calc(100vh*0.80)] flex mb-52 justify-center"
          id="about"
        >
          <div className="flex flex-col items-center m-auto space-x-0 space-y-7 md:space-y-0 md:space-x-7 lg:flex-row">
            <img
              className="w-64 md:mb-6 h-64 md:w-96 md:h-96 lg:w-96 lg:h-96 rounded-full shadow-md transition-all motion-reduce:transition-none duration-500 delay-[400ms] translate-y-0 opacity-1 object-cover"
              src={Image}
              alt="Your Image"
            />
            <MyInfo />
          </div>
        </section>

        <section className="w-full min-h-screen" id="skills">
          <div className="relative flex items-center py-5 transition-all duration-500 translate-y-0 opacity-1 blur-0 motion-reduce:transition-none">
            <h1 className="pr-5 text-3xl font-bold">🥷 Technologies</h1>
            <div className="flex-grow border-t border-black dark:border-white border-1"></div>
          </div>
          <div className="transition-all duration-500 delay-300 translate-y-0 gap-y-4 xl:gap-x-5 xl:gap-y-0 mb-36 text-slate-500 dark:text-slate-300 motion-reduce:transition-none opacity-1 blur-0">
            <p>
              Voici quelques technologies avec lesquelles j'ai travaillé
              récemment
            </p>

            <motion.div className="flex flex-wrap justify-between mt-8 text-sm font-medium text-black md:text-lg ">
              {techStack.map((el: TechStackItem, index: number) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                      },
                    },
                    hidden: { opacity: 1, y: 80 },
                  }}
                >
                  <div className="items-center hidden px-4 py-2 mx-2 mt-6 rounded-lg cursor-pointer md:flex w-52 bg-gray-50 md:m-4 hover:scale-125 md:w-48">
                    <img alt="" src={el.link} className="w-12" />
                    <h4 className="ml-4 text-md">{el.name}</h4>
                  </div>
                  <div className="flex flex-col items-center w-32 px-4 py-2 mx-2 mt-6 rounded-lg cursor-pointer md:hidden bg-gray-50 hover:scale-125">
                    <img alt="" src={el.link} className="w-12" />
                    <h4 className="ml-4 text-md">{el.name}</h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="w-full min-h-screen" id="work">
          <div className="relative flex items-center py-5 transition-all duration-500 translate-y-0 opacity-1 blur-0 motion-reduce:transition-none">
            <h1 className="pr-2 text-3xl font-bold sm:pr-5">💻 Mes Oeuvres</h1>
            <div className="flex-grow border-t border-black dark:border-white border-1"></div>
            <a
              href="https://github.com/Bharat-bhandari"
              className="pl-2 text-sm text-right sm:pl-5 hover:text-link-color"
            >
              Visit Archive
            </a>
          </div>
          <div className="flex flex-col mt-12 space-y-12 transition-all duration-500 delay-300 translate-y-0 motion-reduce:transition-none opacity-1 blur-0">
            <div className="flex flex-col transition-opacity duration-500 lg:grid lg:grid-cols-2 lg:gap-x-4 motion-reduce:transition-none opacity-1">
              <div className="flex flex-col space-y-4 text-left">
                <h3 className="pb-2 text-xl font-extrabold">KongoDev</h3>
                <p className="text-slate-500 dark:text-slate-300">
                  Ce projet m'a beaucoup dans mon parcours de développeur web,
                  car il représente le premier site Web que j'ai conceptualisé
                  et exécuté entièrement, de la conception au développement.
                  Utiliser mon maîtrise de la pile PERN, j'ai non seulement
                  amélioré ma compétences techniques, mais également acquis des
                  connaissances inestimables sur la gestion des autorisations,
                  les acces processus de déploiement dans des scénarios réels,
                  en tirant parti d'AWS services.
                </p>
                <p className="text-slate-600">
                  React, Postgresql ,Express, Node
                </p>
                <div className="flex items-center space-x-6 text-slate-400">
                  <a
                    href="https://asmi.life"
                    className="flex items-center space-x-2 hover:text-[#4305ba] focus:text-link-color active:text-link-color"
                    target="_blank"
                  >
                    <span className="flex items-center space-x-2">
                      <LuExternalLink className="h-7 w-7" />
                      <span></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="order-first pb-4 lg:pb-0 lg:order-none lg:block">
                <a href="https://asmi.life" target="_blank">
                  <img
                    src={asmi}
                    className="mb-32 transition-transform duration-300 ease-in-out rounded-md shadow-md hover:scale-105"
                    loading="lazy"
                    alt="asmi"
                  />
                </a>
              </div>
            </div>

            <div className="flex flex-col transition-opacity duration-500 lg:grid lg:grid-cols-2 lg:gap-x-4 motion-reduce:transition-none opacity-1">
              <div className="order-first pb-4 lg:pb-0 lg:order-none lg:block">
                <a
                  href="https://brokebros-react-ecommerce.vercel.app/"
                  target="_blank"
                >
                  <img
                    src={comfy}
                    className="mb-32 transition-transform duration-300 ease-in-out rounded-md shadow-md hover:scale-105"
                    loading="lazy"
                    alt="Ecommerce"
                  />
                </a>
              </div>
              <div className="flex flex-col space-y-4 lg:text-right">
                <h3 className="pb-2 text-xl font-extrabold">Twitter Clone</h3>
                <p className="text-slate-500 dark:text-slate-300">
                  I developed this project to enhance my proficiency in React by
                  working on a larger-scale application. It encompasses
                  essential concepts such as Context API, React Router, OAuth,
                  and state management. The project includes features like
                  filtering, adding items to the cart, user authentication, and
                  search functionality.
                </p>
                <p className="text-slate-600">React, Javascript, HTML, CSS</p>
                <div className="flex items-center space-x-6 text-slate-400 lg:justify-end">
                  <a
                    href="https://github.com/Bharat-bhandari/React-Ecommerce-Web"
                    className="flex items-center space-x-2 hover:text-[#4305ba] focus:text-link-color active:text-link-color"
                    target="_blank"
                  >
                    <span className="flex items-center space-x-2">
                      <FaGithub className="svg-inline--fa fa-github h-7 w-7" />
                    </span>
                  </a>
                  <a
                    href="https://brokebros-react-ecommerce.vercel.app/"
                    className="flex items-center space-x-2 hover:text-[#4305ba] focus:text-link-color active:text-link-color"
                    target="_blank"
                  >
                    <span className="flex items-center space-x-2">
                      <LuExternalLink className="h-7 w-7" />
                      <span></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col transition-opacity duration-500 lg:grid lg:grid-cols-2 lg:gap-x-4 motion-reduce:transition-none opacity-1">
              <div className="flex flex-col space-y-4 text-left">
                <h3 className="pb-2 text-xl font-extrabold">Catfish Land</h3>
                <p className="text-slate-500 dark:text-slate-300">
                  This quiz application represents my hands-on experience in
                  building dynamic and interactive web applications. By creating
                  an intuitive interface that facilitates user engagement, I
                  deepened my understanding of JavaScript event handling, DOM
                  manipulation, and responsive design principles.
                </p>
                <p className="text-slate-600">Wordpress, Elementor</p>
                <div className="flex items-center space-x-6 text-slate-400">
                  <a
                    href="https://brokebros-quizapp-react.vercel.app/"
                    className="flex items-center space-x-2 hover:text-[#4305ba] focus:text-link-color active:text-link-color"
                    target="_blank"
                  >
                    <span className="flex items-center space-x-2">
                      <LuExternalLink className="h-7 w-7" />
                      <span></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="order-first pb-4 lg:pb-0 lg:order-none lg:block">
                <a href="https://brokebros-quizapp-react.vercel.app/">
                  <img
                    src={quiz}
                    className="mb-32 transition-transform duration-300 ease-in-out rounded-md shadow-md hover:scale-105"
                    loading="lazy"
                    alt="Javascript Quiz App"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full min-h-screen" id="contact">
          <div className="relative flex items-center py-5 transition-all duration-500 translate-y-0 opacity-1 blur-0 motion-reduce:transition-none">
            <h1 className="pr-5 text-3xl font-bold">🤙 Contactez Moi</h1>
            <div className="flex-grow border-t border-black dark:border-white border-1"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Content;
