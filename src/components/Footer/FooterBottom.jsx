import "./footerbottom.css"

const FooterBottom = () => {
  return (
    <div className="footerbottom">
        <p className="text">
           © {new Date().getFullYear()}. All rights reserved by Sachin Patil
        </p>
    </div>
  );
}

export default FooterBottom