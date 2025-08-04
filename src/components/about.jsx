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
         Full‑Stack Developer with expertise in React, Node.js, and modern database systems (e.g., MongoDB). Skilled in building scalable, high-performance web applications with clean architecture and intuitive UI/UX. Experienced in RESTful APIs, cloud deployment, and agile collaboration. Proven ability to solve complex problems, optimise performance, and deliver user-focused digital solutions from concept to deployment. Also well-versed in integrating AI technologies to enhance application intelligence and user personalisation.
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
