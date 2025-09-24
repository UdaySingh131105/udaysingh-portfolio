"use client";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    message: "",
    isError: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitted: true, message: "Sending...", isError: false });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          submitted: true,
          message: "Message sent successfully! 🎉",
          isError: false,
        });
        setFormData({ name: "", lastname: "", email: "", message: "" });
      } else {
        setStatus({
          submitted: true,
          message: "Oops! There was a problem.",
          isError: true,
        });
      }
    } catch (error) {
      setStatus({
        submitted: true,
        message: "An error occurred. Please try again.",
        isError: true,
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center text-gray-200"
    >
      <div className="flex flex-col items-center px-6 py-10 mx-auto w-full">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Let&apos;s Connect!
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10 w-full max-w-5xl">
          {/* Left image */}
          <div className="hidden md:block">
            <img
              src={"/assets/Connect.png"}
              alt="connect"
              className="w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-full border border-gray-700 shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Dark Glassy Form */}
          <div className="p-6 md:p-10 rounded-2xl shadow-xl bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 w-full max-w-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John"
                    required
                    className="w-full px-5 py-3 rounded-lg border border-gray-700 bg-gray-800/50 backdrop-blur-md text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full px-5 py-3 rounded-lg border border-gray-700 bg-gray-800/50 backdrop-blur-md text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  required
                  className="w-full px-5 py-3 rounded-lg border border-gray-700 bg-gray-800/50 backdrop-blur-md text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  required
                  className="w-full h-32 md:h-40 px-5 py-3 rounded-lg border border-gray-700 bg-gray-800/50 backdrop-blur-md text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status.message === "Sending..."}
                className="w-full px-6 py-3 text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
              >
                {status.message === "Sending..." ? "Sending..." : "Send Message"}
              </button>

              {status.message && status.message !== "Sending..." && (
                <p
                  className={`text-center text-sm mt-4 ${
                    status.isError ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
