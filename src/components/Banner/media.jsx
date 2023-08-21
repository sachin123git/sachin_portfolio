
import { FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiGithub, SiGmail } from "react-icons/si";
import "./meadia.css"
const Media = () => {
  return (
    <div className="social">
      <div className="div1">
        <h2 className="">FIND ME ON</h2>
        <div className="social_icon">
          <span className="bannerIcon">
            <a
              href="https://github.com/mihirc0111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="mailto:mihirc0111@gmail.com">
              <SiGmail />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/mihir-chavan-643615234/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
      <div className="div2">
        <h2 className="">
          BEST WEB STACK
        </h2>
        <div className="social_icon">
          <div className="bannerIcon">
            <SiMongodb />
          </div>
          <div className="bannerIcon">
            <SiExpress />
          </div>
          <div className="bannerIcon">
            <FaReact />
          </div>
          <div className="bannerIcon">
            <FaNodeJs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
