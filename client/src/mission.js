import Header from './components/header';
import vote from './vote.png';
import Fade from 'react-reveal/Fade';

const Mission = (props) => {

    return (
        <>
            <div className="description">
                <Fade right delay={500}>
                    <div>
                        <p style={{position: "absolute", width: "750px"}}>{props.t('mission_statement')}</p>
                    </div>
                </Fade>
                <Fade left delay={500}>
                    <div>
                        <img src={vote} alt="person giving speech" height="800px" style={{position: "relative", marginLeft: "200px", zIndex: "-10"}} />
                    </div>
              </Fade>
            </div>
        </>
    )
}

export default Mission;