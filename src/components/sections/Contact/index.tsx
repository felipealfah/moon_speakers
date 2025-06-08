'use client';

import React from 'react';

const Contact = () => {
  return (
    <section className="w-full bg-[#000000] py-14">
      <div className="max-w-[1200px] mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="relative">
            <div className="w-[50px] h-[3px] bg-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2 font-montserrat">Contact Us</h2>
            <p className="text-base text-white font-montserrat">we value every message.</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Contact Form */}
          <div className="bg-[#7F5AF0] p-8 rounded-xl">
            <h3 className="text-3xl font-bold text-white mb-16">Get in Touch</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm text-white">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full h-[50px] px-4 rounded-lg bg-[#16161A] border border-[#383838] text-[#ADAEBC] placeholder-[#ADAEBC] focus:outline-none focus:border-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm text-white">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full h-[50px] px-4 rounded-lg bg-[#16161A] border border-[#383838] text-[#ADAEBC] placeholder-[#ADAEBC] focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm text-white">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full h-[50px] px-4 rounded-lg bg-[#16161A] border border-[#383838] text-[#ADAEBC] placeholder-[#ADAEBC] focus:outline-none focus:border-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm text-white">Message</label>
                <textarea
                  placeholder="Your message..."
                  rows={5}
                  className="w-full p-4 rounded-lg bg-[#16161A] border border-[#383838] text-[#ADAEBC] placeholder-[#ADAEBC] focus:outline-none focus:border-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-14 bg-[#2CB67D] text-white font-semibold rounded-lg hover:bg-[#2aa572] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-12">
            <h3 className="text-4xl font-bold text-white">Contact Information</h3>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#242629] rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3332 14.1V16.6C18.3341 16.8321 18.2866 17.0618 18.1936 17.2744C18.1006 17.487 17.9643 17.678 17.7933 17.8349C17.6222 17.9918 17.4203 18.1112 17.2005 18.1856C16.9806 18.26 16.7477 18.2876 16.5165 18.2667C13.9522 17.988 11.489 17.1118 9.32486 15.7083C7.31139 14.4289 5.60431 12.7218 4.32486 10.7083C2.91651 8.53432 2.04007 6.05914 1.76653 3.48333C1.7457 3.25288 1.77309 3.02067 1.84695 2.80138C1.9208 2.58209 2.03951 2.38061 2.19562 2.20972C2.35174 2.03883 2.54199 1.90224 2.75401 1.80881C2.96603 1.71537 3.19515 1.66729 3.42653 1.66666H5.92653C6.32691 1.66268 6.71575 1.80589 7.02152 2.06965C7.32729 2.33342 7.52793 2.69953 7.5932 3.09999C7.71636 3.90005 7.92617 4.68562 8.21986 5.44166C8.33668 5.73993 8.35832 6.06409 8.28215 6.37573C8.20598 6.68737 8.03538 6.97342 7.79153 7.19999L6.74153 8.24999C7.92783 10.3407 9.65914 12.072 11.7499 13.2583L12.7999 12.2083C13.0264 11.9645 13.3125 11.7939 13.6241 11.7177C13.9358 11.6415 14.2599 11.6632 14.5582 11.78C15.3143 12.0737 16.0998 12.2835 16.8999 12.4067C17.3047 12.4724 17.6744 12.6759 17.9398 12.9858C18.2052 13.2957 18.3478 13.6891 18.3332 14.1Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-base font-medium text-white">Phone</p>
                  <p className="text-base text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#242629] rounded-full flex items-center justify-center">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3332 3.00001C18.3332 2.08334 17.5832 1.33334 16.6665 1.33334H3.33317C2.4165 1.33334 1.6665 2.08334 1.6665 3.00001M18.3332 3.00001V13C18.3332 13.9167 17.5832 14.6667 16.6665 14.6667H3.33317C2.4165 14.6667 1.6665 13.9167 1.6665 13V3.00001M18.3332 3.00001L9.99984 8.83334L1.6665 3.00001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-base font-medium text-white">Email</p>
                  <p className="text-base text-gray-400">contact@company.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#242629] rounded-full flex items-center justify-center">
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 8.33333C15 14.1667 8 19.1667 8 19.1667C8 19.1667 1 14.1667 1 8.33333C1 6.34421 1.7902 4.43655 3.1967 3.03003C4.60322 1.62351 6.51088 0.833333 8.5 0.833333C10.4891 0.833333 12.3968 1.62351 13.8033 3.03003C15.2098 4.43655 16 6.34421 16 8.33333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 10.8333C9.38071 10.8333 10.5 9.71404 10.5 8.33333C10.5 6.95262 9.38071 5.83333 8 5.83333C6.61929 5.83333 5.5 6.95262 5.5 8.33333C5.5 9.71404 6.61929 10.8333 8 10.8333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-base font-medium text-white">Address</p>
                  <p className="text-base text-gray-400">123 Business Street, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-base font-medium text-white">Connect With Us</h4>
              <div className="flex gap-4">
                {/* Facebook */}
                <a href="#" className="w-10 h-10 bg-[#242629] rounded-full flex items-center justify-center hover:bg-[#2d2f33] transition-colors">
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 1H7.5C6.57174 1 5.6815 1.36875 5.02513 2.02513C4.36875 2.6815 4 3.57174 4 4.5V6.5H2V9.5H4V15.5H7V9.5H9L9.5 6.5H7V4.5C7 4.23478 7.10536 3.98043 7.29289 3.79289C7.48043 3.60536 7.73478 3.5 8 3.5H9.5V1Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                {/* Twitter */}
                <a href="#" className="w-10 h-10 bg-[#242629] rounded-full flex items-center justify-center hover:bg-[#2d2f33] transition-colors">
                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 1C14.8381 1.49667 14.1031 1.89667 13.3333 2.17333C12.9178 1.68667 12.3653 1.33667 11.7487 1.16667C11.1322 0.996667 10.4798 1.01333 9.87421 1.21333C9.26862 1.41333 8.73661 1.78667 8.34592 2.28667C7.95523 2.78667 7.72541 3.39333 7.68333 4.03333V4.7C6.46498 4.73333 5.26191 4.46667 4.17576 3.92667C3.08962 3.38667 2.15645 2.59333 1.45 1.61667C1.45 1.61667 -1.21667 7.61667 4.78333 10.2833C3.35855 11.2833 1.70834 11.8167 0 11.8333C5.99999 15.1667 13.3333 11.8333 13.3333 4C13.3328 3.81333 13.3157 3.62667 13.2833 3.44333C13.9756 2.75333 14.4593 1.91667 15.5 1Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="w-10 h-10 bg-[#242629] rounded-full flex items-center justify-center hover:bg-[#2d2f33] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3333 1.33334H4.66667C2.82572 1.33334 1.33333 2.82573 1.33333 4.66667V11.3333C1.33333 13.1743 2.82572 14.6667 4.66667 14.6667H11.3333C13.1743 14.6667 14.6667 13.1743 14.6667 11.3333V4.66667C14.6667 2.82573 13.1743 1.33334 11.3333 1.33334Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.6667 7.58C10.7489 8.13008 10.6542 8.69209 10.3958 9.18251C10.1375 9.67293 9.72877 10.0696 9.23166 10.3133C8.73455 10.557 8.16886 10.6355 7.62063 10.5375C7.0724 10.4395 6.5715 10.1698 6.18563 9.7683C5.79977 9.36665 5.54282 8.85654 5.46026 8.30601C5.37771 7.75547 5.47318 7.19341 5.73146 6.70504C5.98973 6.21666 6.40305 5.82164 6.90399 5.57989C7.40493 5.33814 7.97017 5.26177 8.52 5.36C9.08187 5.46077 9.60158 5.72377 10.0008 6.12296C10.4 6.52215 10.663 7.04186 10.6667 7.58Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.6667 4.33334H11.6733" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="w-10 h-10 bg-[#242629] rounded-full flex items-center justify-center hover:bg-[#2d2f33] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33333 4.66667C10.2616 4.66667 11.1518 5.0357 11.8082 5.69206C12.4646 6.34842 12.8333 7.23855 12.8333 8.16667V12.8333H10.5V8.16667C10.5 7.85725 10.3771 7.56051 10.1583 7.34172C9.93948 7.12293 9.64275 7 9.33333 7C9.02391 7 8.72718 7.12293 8.50839 7.34172C8.28959 7.56051 8.16667 7.85725 8.16667 8.16667V12.8333H5.83333V8.16667C5.83333 7.23855 6.20208 6.34842 6.85844 5.69206C7.5148 5.0357 8.40493 4.66667 9.33333 4.66667Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.5 5.25H1.16667V12.8333H3.5V5.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.33333 3.5C2.97767 3.5 3.5 2.97767 3.5 2.33333C3.5 1.689 2.97767 1.16667 2.33333 1.16667C1.689 1.16667 1.16667 1.689 1.16667 2.33333C1.16667 2.97767 1.689 3.5 2.33333 3.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-4">
              <h4 className="text-base font-medium text-white">Business Hours</h4>
              <div className="space-y-2">
                <p className="text-base text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-base text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-base text-gray-400">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 