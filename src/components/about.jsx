import "./about.css"

export default function About(){


    const handleDownload = () => {
        const link = document.createElement('a');
     
        link.download = 'OmPatilResume.pdf'; // Desired filename
        link.href = './assets/OmPatilResume.pdf'; // Path to your resume in the public folder
        link.target = '_blank'; // Open in a new tab
        link.click();
      };


    return(
        
        <div className="about" id="about">
            <div className="about-l">
            <p className="html">&lt;h1&gt;</p>
                <h1>About me <p className="html">&lt;h1&gt;</p> </h1>
            </div>
            <div className="about-r">
                <p>Hi, I’m Om Patil, a passionate web developer specializing in the MERN stack. I enjoy building dynamic and user-friendly web applications, transforming ideas into seamless, interactive experiences. With a solid foundation in React.js, MongoDB, MySQL, REST APIs, and JavaScript, I am always looking for new challenges to tackle.</p>
                
                <p>Currently in my third year at RGPV, I am dedicated to expanding my skills and staying updated with the latest technologies in web development.</p>
                <button onClick={handleDownload}>Downloade CV</button>
            </div>
           <div>
           <div className="skills-abt">
        <span>MongoDb</span>
        <span>React</span>
        <span>JavaScript</span>
        <span>CSS</span>
        <span>Node.js</span>
        <span>Git</span>
        <span>HTML</span>
      </div>
           </div>
        </div>
        
    )
}