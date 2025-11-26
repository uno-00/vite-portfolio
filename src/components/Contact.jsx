import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' })

  // Initialize EmailJS when component mounts
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    if (publicKey && publicKey !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(publicKey)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus({ type: null, message: '' })

    // EmailJS configuration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Check if credentials are configured
    if (!serviceId || !templateId || !publicKey || 
        serviceId === 'YOUR_SERVICE_ID' || 
        templateId === 'YOUR_TEMPLATE_ID' || 
        publicKey === 'YOUR_PUBLIC_KEY') {
      setIsLoading(false)
      setSubmitStatus({ 
        type: 'error', 
        message: 'Email service not configured. Please set up EmailJS credentials in .env file.' 
      })
      return
    }

    try {
      // Get current time for the template
      const currentTime = new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
      })

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,  // Changed from from_name to name to match template
          email: formData.email,  // Changed from from_email to email for Reply To
          message: formData.message,
          time: currentTime,  // Added time for template
          from_email: formData.email,  // Keep for backward compatibility
          reply_to: formData.email
        }
      )

      if (result.status === 200) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you! I have received your message. I will contact you as soon as possible.' 
        })
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('EmailJS error:', error)
      
      let errorMessage = 'Message could not be sent. Please try again or email me directly at ysrvictorio@gmail.com'
      
      // Check for specific EmailJS error types
      if (error.status === 400) {
        errorMessage = 'EmailJS configuration error. Please check if the Service ID, Template ID, and Public Key in the .env file are correct. Follow the instructions in EMAILJS_SETUP.md'
      } else if (error.status === 401 || error.status === 403) {
        errorMessage = 'Invalid Public Key. Please check the Public Key in the .env file.'
      } else if (error.text) {
        // EmailJS specific error messages
        const errorText = error.text.toLowerCase()
        if (errorText.includes('invalid template') || errorText.includes('template not found')) {
          errorMessage = 'Invalid Template ID. Please check the Template ID in the .env file.'
        } else if (errorText.includes('invalid service') || errorText.includes('service not found')) {
          errorMessage = 'Invalid Service ID. Please check the Service ID in the .env file.'
        } else if (errorText.includes('invalid public key') || errorText.includes('unauthorized')) {
          errorMessage = 'Invalid Public Key. Please check the Public Key in the .env file.'
        } else {
          errorMessage = `Error: ${error.text}`
        }
      } else if (error.message) {
        errorMessage = `Error: ${error.message}`
      }
      
      setSubmitStatus({ 
        type: 'error', 
        message: errorMessage
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm currently available for freelance work and interesting projects.
              If you have a project in mind or just want to chat, feel free to reach out!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:ysrvictorio@gmail.com">ysrvictorio@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <span>Cabiao, Nueva Ecija 3107</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/yv020804" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/yv020804
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🐙</div>
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/uno-00" target="_blank" rel="noopener noreferrer">
                    github.com/uno-00
                  </a>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-btn" 
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus.type && (
              <div className={`submit-status ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

