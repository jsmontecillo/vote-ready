import footer from './back.jpg';
import './footer.css';
import Feedback from './components/feedback.js';
const Footer = () => {
    return (
        <div className="background">
            <img src={footer} alt="Los Angeles" style={{width: "100%"}} />
            <div style={{position: "absolute", bottom: "400px", left: "150px"}}><Feedback /></div>
        </div>
    )
}

export default Footer;