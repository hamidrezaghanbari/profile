import { useEffect, useState } from 'react';
import classes from './contact-form.module.css';
import Notification from './../notification/notification'

async function sendContactData(message) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!')
    }
}

const ContactForm = () => {

    const [message, setMessage] = useState({})
    const [requestStatus, setRequestStatus] = useState()
    const [requestError, setRequestError] = useState()


    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null)
                setRequestError(null)
            }, 3000);
            return () => clearTimeout(timer)
        }

    }, [requestStatus])


    const submitForm = async (e) => {
        e.preventDefault()

        setRequestStatus('pending')
        try {
            await sendContactData(message)
            setRequestStatus('success')
            setMessage({})
        } catch (error) {
            setRequestError(error.message)
            setRequestStatus('error')
        }
    }

    let notification

    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message ...',
            message: 'your message is on its way'
        }
    }

    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Successfully',
            message: 'your message is successfully sent'
        }

    }
    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error happened!',
            message: requestError
        }

    }

    return (
        <section className={classes.contact}>
            <h1>How can i help you ?</h1>
            <form className={classes.form} onSubmit={submitForm}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">your email</label>
                        <input
                            onChange={(e) => setMessage((prevMessage) => ({ ...prevMessage, email: e.target.value }))}
                            type="email" name="email" id="email" required />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="email">your name</label>
                        <input type="text"
                            onChange={(e) => setMessage((prevMessage) => ({ ...prevMessage, name: e.target.value }))}
                            name="name" id="name" required />
                    </div>
                </div>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">your Message</label>
                        <textarea
                            onChange={(e) => setMessage((prevMessage) => ({ ...prevMessage, message: e.target.value }))}
                            name="message" id="message" rows="5"></textarea>
                    </div>
                </div>

                <div className={classes.controls}>
                    <div className={classes.actions}>
                        <button>send message</button>
                    </div>
                </div>
            </form>
            {
                notification && (
                    <Notification
                        status={notification.status}
                        title={notification.title}
                        message={notification.message} />
                )
            }
           
        </section>
    )
}

export default ContactForm
