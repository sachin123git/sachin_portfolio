import projectOne from "../../images/projectOne.png"
import ProjectCard from "../projects/projectCard"
import "./contact.css"
export default function contact() {
  return (
    <>
    <div>
        <div className="heading">
      <h4 className='h6'>CONTACT</h4>
        <h1 className='h2'>Lets Contact</h1>
    </div>
    </div>
    <div className="contact">
        <div className="card">
             <ProjectCard
        title="IPL-Win-Predictor"
        des=" A ML project using logistic regression to find out the win probability of the chasing team in an IPL match. Used Kaggle dataset from 2008-2019."
        src={projectOne}
        githubLink="https://github.com/mihirc0111/IPL-Predictor-Mihir"
        websiteLink="https://mihirc0111-ipl-predictor-mihir-app-8s1ct4.streamlit.app/"
      />
        </div> 
        <div className="contact_form">
            <form action="">

            <div className="r1">
                <div className="f1">
                  <label htmlFor="">YOUR NAME</label>
                  <input type="text" />
                </div>
                <div className="f2">
                  <label htmlFor="">PHONE NUMBER</label>
                  <input type="text" />
                </div>
                </div>
                <div className="email">
                  <label htmlFor="">EMAIL</label>
                  <input type="text" />
                </div>
                <div className="email">
                  <label htmlFor="">SUBJECT</label>
                  <input type="text" />
                </div>
                <div className="msg">
                  <label htmlFor="">MESSAGE</label>
                  <input type="text" />
                </div>
                <div className="msg">
                 <button className="btn">SEND MESSAGE</button>
                </div>

            </form>
        </div>
    </div>
    </>
  )
}
