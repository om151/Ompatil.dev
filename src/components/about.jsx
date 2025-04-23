import "./about.css";

export default function About() {
  const handleDownload = () => {
    const link = document.createElement("a");

    link.download = "OmPatilResume.pdf"; // Desired filename
    link.href = "/OmPatilResume.pdf"; // Path to your resume in the public folder
    link.target = "_blank"; // Open in a new tab
    link.click();
  };

  return (
    <div className="about" id="about">
      <div className="about-l">
        <p className="html">&lt;h1&gt;</p>
        <h1>
          About me <p className="html">&lt;h1&gt;</p>{" "}
        </h1>
      </div>
      <div className="about-r">
        <p>
          I’m Om Patil, a passionate Full Stack Web Developer currently pursuing
          B.Tech at Lakshmi Narain College of Technology, Bhopal. Skilled in the
          MERN stack (MongoDB, Express.js, React.js, Node.js), I have developed
          full-fledged web applications like GoRide (a real-time cab booking
          platform) and VistaStay (a dynamic hotel listing website). With a
          strong foundation in data structures and problem-solving, I’ve also
          solved over 150+ LeetCode problems, demonstrating my analytical and
          coding abilities.
        </p>
        <button onClick={handleDownload}>Download CV</button>
      </div>
      <div>
        <div className="skills-abt">
          <span>MongoDb</span>
          <span>React.js</span>
          <span>JavaScript</span>
          <span>CSS</span>
          <span>Git</span>
          <span>Node.js</span>
          <span>HTML</span>
          <span>Express.js</span>
        </div>
      </div>
    </div>
  );
}
