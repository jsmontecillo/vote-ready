import {useState} from 'react';
import Header from './header';

const Feedback = (props) => {
    let t = props.t;
    console.log(t);
    const [feedback, setFeedback] = useState({
        name: "",
        date: "",
        feedback: ""
    })
    const handleSubmit = () => {
        console.log("hello");
    }

    const handleNameChange = (event) => {
        const name = event.target.value;
        setFeedback((feedback) => ({ ...feedback, name }));
    };

    const handleDateChange = (event) => {
        const date = event.target.value;
        setFeedback((feedback) => ({ ...feedback, date }));
    };
    
    const handleFeedbackChange = (event) => {
        const feedback = event.target.value;
        setFeedback((feedback) => ({ ...feedback, feedback }));
    };
    return (
        <div className="feedback">
            {/* <Header title="Sources and Feedback" /> */}
            <h1>{t('feedback')}</h1>
            <p>{t('feedback_desc')}</p>
            <form>
                <fieldset>
                    <label>{t('name')}</label>
                    <input
                    type="text"
                    id="add-name"
                    value={feedback.name}
                    onChange={handleNameChange}
                    />
                    <label>{t('date')}</label>
                    <input
                    type="date"
                    id="add-user-favorite"
                    required
                    value={feedback.date}
                    onChange={handleDateChange}
                    />
                    <label>{t('feedback')}</label>
                    <input
                    type="text"
                    id="add-feedback"
                    required
                    value={feedback.feedback}
                    onChange={handleFeedbackChange}
                    />
                </fieldset>
                <button type="submit">{t('submit')}</button>
            </form>
        </div>
    )
}

export default Feedback;