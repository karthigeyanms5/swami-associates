import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  return (
    <div className="bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <div
          id="form"
          className="flex flex-col md:flex-row items-start justify-between   px-6 py-10 md:px-16 md:py-20 gap-10 "
        >
          {/* Left text section */}
          <div className="max-w-md text-left">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-snug font-serif"
              // style={{ fontFamily: "var(--font-minion)" }}
            >
              Ready to build <br /> your dream home? <br />
              Get in touch with us.
            </h2>
          </div>

          {/* Right form section */}
          <Form />
        </div>
      </div>
    </div>
  );
}

export function Form() {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false); // 1. Add loading state

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    emailjs
      .sendForm("service_y4y3wsv", "template_0fljijk", form.current, {
        publicKey: "gdXjFGk3OIp2PD3EU",
      })
      .then(
        () => {
          setStatus("SUCCESS");
          setLoading(false); // Stop loading
          form.current.reset();
        },
        (error) => {
          setStatus("FAILED");
          setLoading(false); // Stop loading
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex-1 w-full max-w-xl space-y-6"
      >
        {/* Name */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-gray-600">
            Your Name
          </label>
          <input
            type="text"
            name="user_name"
            className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-black py-2"
            required
          />
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-600">
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-black py-2"
              required
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-600">
              Phone
            </label>
            <input
              type="tel"
              name="user_mobile"
              pattern="[0-9]{10}"
              inputMode="numeric"
              className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-black py-2"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-gray-600">
            Message
          </label>
          <textarea
            name="message"
            rows="2"
            placeholder="Write your message..."
            className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-black py-2 resize-none"
            required
          />
        </div>

        {/* Submit button aligned right */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-center">
          {/* Phone */}
          <h2 className="flex items-center text-sm sm:text-base">
            <svg
              className="w-5 h-5 me-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            9842219755
          </h2>

          {/* Email */}
          <h2 className="flex items-center text-sm sm:text-base">
            <svg
              className="w-5 h-5 me-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            swamiassociatesmtp@gmail.com
          </h2>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full sm:w-auto px-6 py-2 rounded-sm flex items-center justify-center gap-2 transition ${
              loading
                ? "bg-gray-500 text-white cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              "Send"
            )}
          </button>
        </div>

        {/* Status messages */}
        {status === "SUCCESS" && (
          <p className="text-green-600 text-right">
            Message sent successfully!
          </p>
        )}
        {status === "FAILED" && (
          <p className="text-red-600 text-right">
            Failed to send message. Please try again.
          </p>
        )}
      </form>
    </>
  );
}
