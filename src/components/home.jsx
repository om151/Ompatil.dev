import "./home.css";

const handleClick = () => {
  (window.location.href = "https://t.me/Ompatil_2705"), "_blank";
};

export default function Home() {
  return (
    <div className="home-page" id="home">
      <div className="home">
        <div className="tags">
          <span className="html"> &lt;html&gt;</span>
          <p className="html"> &nbsp; &lt;body&gt;</p>
          <p className="html"> &nbsp; &nbsp; &lt;header&gt;</p>
          <p className="html"> &nbsp; &nbsp; &nbsp; &nbsp; &lt;h1&gt;</p>
        </div>
        <div className="main-txt">
          <h1>HI</h1>
          <h1>I'M Om,</h1>
          <h1>
            WEB DEVELOPER <p className="html"> &lt;/h1&gt; </p>{" "}
          </h1>
        </div>
        <div className="sub-txt">
          <p className="html">&lt;p&gt;</p>
          <h2>
            {" "}
            &nbsp; MERN, Full Stack Developer{" "}
            <span className="html">&lt;/p&gt;</span>
          </h2>
          <a href="https://t.me/Ompatil_2705" target="_blank" rel="noopener noreferrer">
      <button className="contact-btn" >
            Contact me
          </button>
    </a>
          
        </div>
      </div>
      <div className="skills">
        <span>MongoDb</span>
        <span>React.js</span>
        <span>JavaScript</span>
        <span>CSS</span>
        <span>Node.js</span>
        <span>Git</span>
        <span>HTML</span>
        <span>Express.js</span>
      </div>
    </div>
  );
}
