
'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    })
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-6">
            Have questions or feedback? We'd love to hear from you. Fill out the form
            and we'll get back to you as soon as possible.
          </p>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Our Information</h2>
            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <span className="text-primary-600">📍</span> 
                <span>123 Main Street, City, Country</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-primary-600">📧</span> 
                <span>contact@example.com</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-primary-600">📞</span> 
                <span>+1 (123) 456-7890</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
          {formStatus.submitted ? (
            <div className={`p-4 rounded-md ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              <p className="text-center">{formStatus.message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn btn-primary py-3"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
