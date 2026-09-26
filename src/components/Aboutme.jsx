import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <div className="h-screen w-[98vw] aboutme-container flex justify-center items-center">
      <motion.div
        initial={{ boxShadow: "0px 0px 0px rgba(0,0,0,0)", opacity: 0 }}
        whileInView={{
          boxShadow:
            "5px 5px 10px rgb(219 54 252), -5px -5px 10px rgb(6, 117, 245)",
          opacity: 1,
        }}
        whileHover={{
          rotateX: -6,
          rotateY: 6,
          scale: 1.04,
          boxShadow:
            "0px 25px 50px rgba(0,0,0,0.3), 0px 0px 30px rgba(255,255,255,0.15)",
        }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        className="aboutme glass-card border-[1px] border-sky-600 rounded-lg w-[80vw] h-[75vh] flex justify-center items-center p-5 "
      >
        <div className=" flex flex-col items-center justify-between w-[40%] p-2 about-left gap-5 ">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <div className="img-container border-2 w-44 h-44 border-sky-600 rounded-full overflow-hidden p-2 ">
            <img
              src="src/assets/images/profile.jpg"
              alt="Profile"
              className="rounded-full w-39 h-39 mb-4 object-cover profile-img "
            />
          </div>
          <h5 className="text-white font-semibold text-2xl  ">Satyam Pandey</h5>
          <p className="text-gray-300 text-wrap text-center text-lg ">
            <span className="text-sky-600 font-semibold ">Hello ! </span>I am a
            passionate developer with a love for creating beautiful and
            functional web applications.
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center h-[60vh] w-full py-2 px-5 gap-5  ">
          <div className="intro h-[10vh] w-full p-5 rounded-lg flex items-center justify-around border-[1px] border-sky-600 overflow-hidden ">
            <p className="text-gray-300 text-wrap text-center text-[17px] intro-p ">
              Age : 19
            </p>
            <p className="text-gray-300 text-wrap text-center text-[17px] intro-p ">
              Sex : Male
            </p>
            <p className="text-gray-300 text-wrap text-center text-[17px] intro-p ">
              Language : English | Hindi
            </p>
            <p className="text-gray-300 text-wrap text-center text-[17px] intro-p ">
              Edu : Engineering in CSE
            </p>
          </div>
          <div className="h-full w-full rounded-lg flex items-center justify-center  ">
            <div className="skills h-64 w-full flex flex-col items-start justify-center p-2 ">
              <p className="text-gray-300 text-wrap text-center text-lg pb-3 ">
                Here are my few skills
              </p>
              <ul className="list-disc text-gray-300 text-wrap text-[17px] flex flex-col gap-2 ">
                <li className="intro-list">HTML</li>
                <hr
                  style={{ border: "none", height: 1, background: "black" }}
                />
                <li className="intro-list">CSS</li>
                <hr
                  style={{ border: "none", height: 1, background: "black" }}
                />
                <li className="intro-list">JavaScript</li>
                <hr
                  style={{ border: "none", height: 1, background: "black" }}
                />
                <li className="intro-list">React</li>{" "}
                <hr
                  style={{ border: "none", height: 1, background: "black" }}
                />
                <li className="intro-list">Node.js</li>{" "}
                <hr
                  style={{ border: "none", height: 1, background: "black" }}
                />
                <li className="intro-list">Express.js</li>{" "}
                <hr
                  style={{ border: "none", height: 1, background: "black" }}
                />
                <li className="intro-list">MongoDB</li>
                <hr
                  style={{ border: "none", height: 1, background: "black" }}
                />
                <li className="intro-list">Git & GitHub</li>
                <hr
                  style={{ border: "none", height: 1, background: "black" }}
                />
              </ul>
            </div>
            <div className="skills h-64 w-full flex flex-col items-start justify-center p-2 ">
              <p className="text-gray-300 text-wrap text-center text-lg  pb-3 ">
                ‎{" "}
              </p>
              <ul className="list-disc text-gray-300 text-wrap text-[17px] flex flex-col gap-2 ">
                <li className="intro-list">Mysql</li>
                <hr
                  style={{ border: "none", height: 1, background: "black" }}
                />
                <li className="intro-list">Supabase</li>
                <hr
                  style={{ border: "none", height: 1, background: "black" }}
                />
                <li className="intro-list">Firebase</li>
                <hr
                  style={{ border: "none", height: 1, background: "black" }}
                />
                <li className="intro-list">tailwind css</li>{" "}
                <hr
                  style={{ border: "none", height: 1, background: "black" }}
                />
                <li className="intro-list">AI Intergration</li>{" "}
                <hr
                  style={{ border: "none", height: 1, background: "black" }}
                />
                <li className="intro-list">API Integration</li>{" "}
                <hr
                  style={{ border: "none", height: 1, background: "black" }}
                />
                <li className="intro-list">Bootstrap</li>
                <hr
                  style={{ border: "none", height: 1, background: "black" }}
                />
                <li className="intro-list">Linux</li>
                <hr
                  style={{ border: "none", height: 1, background: "black" }}
                />
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Aboutme;
