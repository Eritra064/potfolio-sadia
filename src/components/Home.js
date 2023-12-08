const Home = () => {
    return ( 
    <div className="hero-section">
      <div className="left-side">
        <h1 className="name">Sadia Rahman</h1>
        <p className="animation">Web Developer | Designer</p>
        <p>Date of Birth: 30.08.1999</p>
        <p>Nationality: Bangladesh</p>
        
        <div className="education-container">
          <div className="result">
            <h3>Chittagong University of Engineering and Technology</h3>
            <hr></hr>
            <hr></hr>
            <p>BSc in Computer Science and Engineering</p>
          </div>
          <div className="divider"></div>
          <div className="result">
            <h3>Chittagong College</h3>
            <hr></hr>
            <hr></hr>
            <h3>Silver Bells Girls' High School</h3>
          </div>
        </div>
        
        <a className="resume" href="https://drive.google.com/file/d/1FuLPYqoRxtV8FdSMVUOOrNAP05j5ggit/view?usp=sharing"><button className="button-56">View Resume</button></a>
        <div className="social-links">
          <a href="https://github.com/Eritra064"><img src="./images/github.png" alt="github" /></a>
          <a href="https://www.linkedin.com/in/sadia-rahman-211ab023b/"><img src="./images/linkedin.png" alt="linkedin" /></a>
          
          <a href="https://www.facebook.com/sadiarahman.sadia.773"><img src="./images/facebook.png" alt="fb" /></a>
        </div>


      </div>
      <div className="right-side">
        <img src="./images/final_Sadia.png" alt="Your Name" className="myself" />
      </div>
    </div>
     );
}
 
export default Home;