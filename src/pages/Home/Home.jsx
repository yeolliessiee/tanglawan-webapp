import "./Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const cards = [
    {
        id: 1, color: "#0051ff",
        icon: "fa-solid fa-eye",
        title: "PIPR Technology",
        description: "Post Illumination Pupillary Response (PIPR) is a non-invasive method that measures the pupil's response to light stimuli, providing insights into retinal function and potential early signs of diabetic retinopathy."
    },
    {
        id: 2, color: "#1ad182",
        icon: "fa-solid fa-chart-line",
        title: "Real Time Analysis",
        description: "The device features high-resolution imaging capabilities and real-time data processing to ensure accurate and reliable results."
    },
    {
        id: 3, color: "#00ff3c",
        icon: "fa-solid fa-shield",
        title: "Non-Invasive Screening",
        description: "TANGLAWAN is ideal for use in clinical settings where early detection of diabetic retinopathy is crucial for patient care."
    }, 
    {
        id: 4, color: "#8b1ad1",
        icon: "fa-solid fa-user-group",
        title: "User-Friendly Interface",
        description: "The device is designed with a user-friendly interface, making it easy for healthcare professionals to operate and interpret results efficiently."
    },
];

const key = [
    {
        id: 1, color: "#0051ff",
        title: "5-Level Severity Classification",
        description: "Precise diagnosis from No DR to Proliferative Diabetic Retinopathy with confidence scores"
    },
    {
        id: 2, color: "#1ad182",
        title: "Comprehensive Waveform Analysis",
        description: "Detailed pupil response waveforms for both left and right eyes with visual graphs"
    },
    {
        id: 3, color: "#00ff3c",
        title: "Patient Health Integration",
        description: "Correlate results with blood sugar levels, diabetes duration, and cardiovascular data"
    },
    {
        id: 4, color: "#8b1ad1",
        title: "Downloadable Reports",
        description: "Generate PDF reports with diagnosis, recommendations, and eye video recordings"
    },
];

const socials = [
    {
        id: 1,
        name: "Facebook",
        icon: "fa-brands fa-facebook-f",
        color: "#1877f2", bg: "#103e797b",
        link: "",
    },
    {
        id: 2,
        name: "Twitter",
        icon: "fa-brands fa-twitter",
        color: "#0077b5", bg: "#0a5c8c80",
        link: "",
    },
    {
        id: 3,
        name: "Instagram",
        icon: "fa-brands fa-instagram",
        color: "#e1306c", bg: "#8b1ad179",
        link: "",
    },
    {
        id: 4,
        name: "Email",
        icon: "fa-solid fa-envelope",
        color: "#8be130", bg: "#1ad1826c",
        link: "",
    },
];

export  function Home() {
  return (
    <div className="home">


        {/*title*/}
        <div className="title">
            <div className="tanglawan-title">
                <h1>TANGLAWAN</h1>
                <p>
                    TANGLAWAN is an early screening tool that classifies  diabetic retinopathy
                    severity based on pupillary response patterns. By identfiying the individuals 
                    who show signs consistent with early stages of DR (mild and moderate NPDR), 
                    the system supports timely referral for further clinical evaluation, 
                    which may help prevent progression to vision-threathening stages and reduce 
                    the risk of irreversible vision loss.
                </p>
            </div>
            <div className="button">
                <div className="results">
                   <Link to="/login">
                        <button>View Your Results</button>
                   </Link>
                </div>
                <div className="learn-more">
                    <Link to="/learn-more">
                        <button>Learn More</button>
                    </Link>
                </div>
            </div> 
        </div>

        {/*video*/}
        <div className="title-video">
             <div className="title-action">
                <h1>See Our System in Action</h1>
            </div>
            <div className="video">
                <video controls>
                    <source src="pics/demo.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>

        {/*informations 1 and 2*/}
        <div className="information">

            <div className="information-title">
                <h1>Device Information</h1>
            </div>
            <div className="information-card">
                {cards.map((card) => (
                    <div className="information-content" key={card.id}>
                            <i className={card.icon} style={{color: card.color}}></i>
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                    </div>
                ))}
            </div>

            <div className="key-title">
                <h1>Key Features</h1>
            </div>
            <div className="key-card">
                {key.map((key) => (
                    <div className="key-content" key={key.id}>
                        <h2 style={{ color: key.color }}>{key.title}</h2>
                        <p>{key.description}</p>
                    </div>
                ))}
            </div>
                
        </div>


            {/*contact*/}
            <div className="contact">
                <div className="contact-title">
                    <h1>Connect with us</h1>
                </div>
                <div className="socials">
                    {socials.map((social) => (
                        <a href={social.link} key={social.id} className="social-link" style={{ background: social.bg }}>
                            <i className={social.icon} style={{ color: social.color }}></i>
                            <p>{social.name}</p>
                        </a>
                    ))}
                </div>
            </div>

    </div>
  );
}

export default Home;