import React from 'react';
import { navigate } from 'gatsby-link';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [state, setState] = React.useState({})
  const [isButtonPressed, setButtonPressed] = React.useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .then(() => setButtonPressed(true))
      .catch((error) => alert(error))
  }

  return (
    <>
      <form
        className='contact-form'
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p className="contact">
          <label className='contact-label'>
            Your name:
            <br />
            <input type="text" className='contact-input' name="name" onChange={handleChange} />
          </label>
          <label className='contact-label'>
            Your email:
            <br />
            <input type="email" className='contact-input' name="email" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label className='contact-label'>
            Message:
            <br />
            <textarea name="message" rows="4" className='contact-message' onChange={handleChange} />
          </label>
        </p>
          <p style={{textAlign:'center'}}>
            <button className="cta-btn cta-btn--resume" disabled={isButtonPressed} type="submit">{isButtonPressed ? 'Thanks!': 'Submit'}</button>
        </p>
      </form>
    </>
  )
}
