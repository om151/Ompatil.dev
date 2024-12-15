import "./contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faTwitter,faGithub, faTelegramPlane  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";



export default function Contact(){
    return(
        <div style={{color:"white"}} id="contact">
            <h1 className="get-in-touch"> <p className="html">&lt;h1&gt;</p>Get in touch<p className="html">&lt;/h1&gt;</p></h1>
            <div className="contact-txt">
            Feel free to email me or message me on Telegram always open to interesting conversations and collaborations!. Whether it's a professional query, a creative project, or just to say hello, I'm just a click away!
            </div>
            <div className="contact-div">
                <div className="contact">
                    <h3> <FontAwesomeIcon icon={faEnvelope}/> &nbsp; Omspatil980@gmail.com</h3>
                    <h3> <FontAwesomeIcon icon={faPhone} /> &nbsp; 97******91</h3>
                </div>

              



                <div className=" contact-social">
          <div> 
          <a
          href="https://t.me/Ompatil_2705"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FontAwesomeIcon icon={faTelegramPlane} />
        </a>
             <a
          href="https://github.com/om151"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/om-patil-587a82274/"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="mailto:omspatil980@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
       
        <a
          href="https://x.com/Om_patil2705"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        
        
        
        </div>
        <div className="copy-right">Copyright &#169; 2025 OP </div>
                </div>
                

            </div>
        </div>
    );
}