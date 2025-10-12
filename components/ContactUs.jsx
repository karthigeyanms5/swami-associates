import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
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
    <div className="bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <div
          id="form"
          className="flex flex-col md:flex-row items-start justify-between   px-6 py-10 md:px-16 md:py-20 gap-10 "
        >
          {/* Left text section */}
          <div className="max-w-md text-left">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-snug"
              style={{ fontFamily: "var(--font-minion)" }}
            >
              Ready to build <br /> your dream home? <br />
              Get in touch with us.
            </h2>
          </div>

          {/* Right form section */}
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
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-2 rounded-sm flex items-center gap-2 transition ${
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
        </div>
      </div>
    </div>
  );
}
