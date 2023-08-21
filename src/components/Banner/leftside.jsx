import Media from "./media";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./leftside.css"
const leftside = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Front End Developer.",
      "Web Devloper.",
      "Computer Engineer/ Software Engineer 📸",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="">
      <div className="">
        <h4 className=" my_p">My Portfolio 👀🙋‍♂️ </h4>
        <h1 className="him">
          Hi, I'm{" "}
          <span className="name">Sachin Patil</span>
        </h1>
        <h2>a <span className="typewritter">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          /></h2>
        <p className="para">
          "I am a passionate front end developer and web devloper.
          With a strong foundation in Software development and a 
          keen eye for data, I create innovative solutions that 
          bridge technology and user experience."
        </p>
      </div>
      <Media/>
      {/* Media */}
    </div>
  );
};

export default leftside;
