import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setError('Email is required')
    } else if (!validateEmail(email)) {
      setError('Email is invalid')
    } else {
      // Implement actual password reset logic here
      setSuccess(true)
      setError('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <Link to="/" className="text-indigo-600 hover:text-indigo-800">
            &larr; Back to Login
          </Link>
          <Mail className="text-indigo-600 w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold mb-6">Reset my password</h2>
        {success ? (
          <div className="text-green-600 mb-4">
            Password reset instructions have been sent to your email.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`w-full p-3 border rounded-md ${
                  error ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-md font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default ResetPassword