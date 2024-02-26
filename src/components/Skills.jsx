import React from "react";
import c from '../assets/C.svg'
import cpp from '../assets/CPP.svg'
import java from '../assets/Java-Dark.svg'
import python from '../assets/Python-Dark.svg'
import html from '../assets/HTML.svg'
import css from '../assets/CSS.svg'
import tailwind from '../assets/TailwindCSS-Dark.svg'
import js from '../assets/JavaScript.svg'
import react1 from '../assets/React-Dark.svg'
import nodejs from '../assets/NodeJS-Dark.svg'
import expressjs from '../assets/ExpressJS-Dark.svg'
import mongodb from '../assets/MongoDB.svg'
import mysql from '../assets/MySQL-Dark.svg'

const Skills = () => {
 
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center w-[80%] justify-center mt-12 ml-32 gap-10 flex-wrap">
               
                <img className="w-20 h-20  cursor-pointer" src={c}/>
                <img className="w-20 h-20  cursor-pointer" src={cpp}/>
                <img className="w-20 h-20  cursor-pointer" src={java}/>
                <img className="w-20 h-20  cursor-pointer" src={python}/>
                <img className="w-20 h-20  cursor-pointer" src={html}/>
                <img className="w-20 h-20  cursor-pointer" src={css}/>
                <img className="w-20 h-20  cursor-pointer" src={tailwind}/>
                <img className="w-20 h-20  cursor-pointer" src={js}/>
                <img className="w-20 h-20  cursor-pointer" src={react1}/>
                <img className="w-20 h-20  cursor-pointer" src={nodejs}/>
                <img className="w-20 h-20  cursor-pointer" src={expressjs}/>
                <img className="w-20 h-20  cursor-pointer" src={mongodb}/>
                <img className="w-20 h-20  cursor-pointer" src={mysql}/>
        </div>
        </div>
    </section>
  );
};

export default Skills;