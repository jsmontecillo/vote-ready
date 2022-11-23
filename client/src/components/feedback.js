import {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';

const Feedback = (props) => {
    let t = props.t;
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [feedback, setFeedback] = useState({
        from_name: "",
        date: "",
        message: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(!isSubmitted);
        emailjs.sendForm('service_ugcmpok', 'template_y4k5tgg', form.current, 'AOZ5H1-DWFINkCYbT')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }

    const handleNameChange = (event) => {
        const from_name = event.target.value;
        setFeedback((feedback) => ({ ...feedback, from_name }));
    };

    const handleDateChange = (event) => {
        const date = event.target.value;
        setFeedback((feedback) => ({ ...feedback, date }));
    };
    
    const handleFeedbackChange = (event) => {
        const message = event.target.value;
        setFeedback((feedback) => ({ ...feedback, message }));
    };
    return (
        <div className="feedback">
            {isSubmitted ? (<h1>{t('thanks')}</h1>) : (
            <><h1>{t('feedback')}</h1>
            <p>{t('feedback_desc')}</p>
            <form ref={form} onSubmit={handleSubmit}>
                <fieldset>
                    <label>{t('name')}</label>
                    <input
                    type="text"
                    id="add-name"
                    name="from_name"
                    value={feedback.from_name}
                    onChange={handleNameChange}
                    />
                    <label>{t('date')}</label>
                    <input
                    type="date"
                    id="add-user-favorite"
                    required
                    value={feedback.date}
                    onChange={handleDateChange}
                    /><br/>
                    <label>{t('feedback')}</label><br/>
                    <textarea rows="5" cols="50"
                    placeholder="Leave some feedback..."
                    type="text"
                    name="message"
                    id="add-feedback"
                    required
                    value={feedback.message}
                    onChange={handleFeedbackChange}
                    />
                </fieldset>
                <button type="submit" onSubmit={handleSubmit}>{t('submit')}</button>
            </form></>)}
        </div>
    )
}

export default Feedback;