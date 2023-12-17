"use client"
import React from 'react';
// import DisplayContacts from './displayContacts.tsx/displayContacts';
export default function Home() {

  const handleSubmit = () => {
    alert("Button click");
  };

  var userName: string = "Default"
  const userContact = (event: string) => {
    return (
      console.log("Event", event.target.value)
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>

        <h2>Form Handling</h2>

        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
