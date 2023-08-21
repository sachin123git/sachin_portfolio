import projectOne from "../../images/projectOne.png"
import projectTwo from "../../images/projectTwo.png"
import projectThree from "../../images/projectThree.png"
import projectFour from "../../images/projectFour.png"
import projectFive from "../../images/projectFive.png"
import projectSix from "../../images/projectSix.png"
import ProjectCard from './projectCard'
import "./project.css"
export default function project() {
  return (
    <div>
    <div className="heading">
      <h4 className='h6'>CHECK THESE OUT ON MY GITHUB</h4>
        <h1 className='h2'>My Projects</h1>
    </div>
    <div className="projects">
      <ProjectCard
        title="IPL-Win-Predictor"
        des=" A ML project using logistic regression to find out the win probability of the chasing team in an IPL match. Used Kaggle dataset from 2008-2019."
        src={projectOne}
        githubLink="https://github.com/mihirc0111/IPL-Predictor-Mihir"
        websiteLink="https://mihirc0111-ipl-predictor-mihir-app-8s1ct4.streamlit.app/"
      />
      <ProjectCard
        title="Mi-Blog-Van"
        des=" This is a blog website have a EJS, Node & Express as backend and Mongoose & MongoDB database."
        src={projectTwo}
        githubLink="https://github.com/mihirc0111/Mi-Blog-Van"
        websiteLink="https://mihirs-blog-website.onrender.com/"
      />
      <ProjectCard
        title="Secret Sharing Website"
        des=" This is a website for posting secrets anonymously with an authentication system ."
        src={projectThree}
        githubLink="https://github.com/mihirc0111/Secrets"
        websiteLink="https://mihirs-secrets-sharing-website.onrender.com/"
      />
      <ProjectCard
        title="After School Diaries"
        des=" To create a website which plays Cartoon/Show songs' audio when user clicks on a particular cartoon image. Using HTML,CSS,JS,Bootstrap to bundle the songs we loved during our childhood!"
        src={projectFour}
        githubLink="https://github.com/mihirc0111/AfterSchoolDiaries-HTML-CSS-JS-BootStrap-Website"
        websiteLink="https://mihirc0111.github.io/AfterSchoolDiaries-HTML-CSS-JS-BootStrap-Website/"
      />
      <ProjectCard
        title="Weather Website"
        des=" This is a weather website created using HTML,CSS,Bootstrap,Node.js,Express.js and OpenWeather API ."
        src={projectFive}
        githubLink="https://github.com/mihirc0111/Weather-Website-UsingAPI--node.js--express.js"
        websiteLink="https://mihirs-weather-website.onrender.com/"
      />
      <ProjectCard
        title="Face Detection"
        des=" This project uses various libraries like to detect human face from a given image, detect a face from a live -webcam video and to create an attendance system."
        src={projectSix}
        githubLink="https://github.com/mihirc0111/Face-Detection-ML-Project-Python.git"
        websiteLink=""
      />
    </div>
    </div>
  );
}
