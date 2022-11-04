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
        <>
            <Header title="Sources and Feedback" />
            <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit dui vel venenatis dapibus. Etiam eu erat suscipit, accumsan libero sit amet, mollis tortor. Sed quis sodales est. Vestibulum sodales erat a purus venenatis, sit amet hendrerit dolor congue. Integer vestibulum, erat eu hendrerit mollis, elit metus ultrices orci, sed aliquet neque arcu id magna. Sed volutpat libero sit amet aliquet vulputate. Nunc consequat leo viverra facilisis blandit.
            </div>
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
        </>
    )
}

export default Feedback;