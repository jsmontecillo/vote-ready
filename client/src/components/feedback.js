import {useState} from 'react';
import Header from './header';

const Feedback = () => {
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
            <h1>Feedback</h1>
            <p>We are always looking to improve the accuracy and neutrality of the site. Please share any constructive criticism with us.</p>
            <form>
                <fieldset>
                    <label>Name</label>
                    <input
                    type="text"
                    id="add-name"
                    value={feedback.name}
                    onChange={handleNameChange}
                    />
                    <label>Date</label>
                    <input
                    type="date"
                    id="add-user-favorite"
                    required
                    value={feedback.date}
                    onChange={handleDateChange}
                    />
                    <label>Feedback</label>
                    <input
                    type="text"
                    id="add-feedback"
                    required
                    value={feedback.feedback}
                    onChange={handleFeedbackChange}
                    />
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Feedback;