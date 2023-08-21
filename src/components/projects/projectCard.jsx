import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import "./projectCard.css"
export default function projectCard(props) {
  return (
    <>
     <div className="container">
        <div className="img">
            <img src={props.src} alt="" />
        </div>
        <div className="s1">
            <div className="title">
            {props.title}
        </div>
        <div className="links">

        <div className="l1"> <BsGithub/></div>
        <div className="l2"><FaGlobe/></div>
            
        </div>
        </div>
        
        <div className="des">
            {props.des}
        </div>
        
     </div>
    </>
  )
}
