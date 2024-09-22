import React from "react";
import { useForm } from "react-hook-form";
// import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import ContactBanner from "../../Components/ContactBanner/ContactBanner";
import { FaEnvelope, FaLocationPin, FaPhone } from "react-icons/fa6";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // emailjs
    //   .send(
    //     "service_cknoetd", // Replace with your Email.js service ID
    //     "template_opszo6w", // Replace with your Email.js template ID
    //     data,

    //     "VXJYTTbDms0frxBQK" // Replace with your Email.js user ID

    //     "1DqOD6ZUMrca9CdZG" // Replace with your Email.js user ID

    //   )
    //   .then(
    //     (response) => {
    //       toast.success(
    //         "Thank you for contacting us! We will get back to you shortly."
    //       );
    //       reset(); // Reset the form on successful submission
    //     },
    //     (error) => {
    //       toast.error("There was an error. Please try again later.");
    //     }
    //   );
  };

  return (
    <div>
      <section>
        <ContactBanner></ContactBanner>
      </section>
      <section>
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold font-lora text-center mb-16">
            Need Assistance? We’re Ready to Hear from You!
          </h2>

          {/* Hot Toast Notifications */}
          <Toaster />

          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
            {/* Left Side: Contact Info */}
            <div className="lg:w-2/6 p-6 bg-white rounded-md shadow-md">
              <div className="h-full flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-200 p-4 rounded">
                      <FaLocationPin className="text-blue-600"></FaLocationPin>
                    </span>
                    <p> 1234 Park View, Houston, Miami, United State</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-200 p-4 rounded">
                      <FaEnvelope className="text-blue-600"></FaEnvelope>
                    </span>
                    <p> support@resumeprofile.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-200 p-4 rounded">
                      <FaPhone className="text-blue-600"></FaPhone>
                    </span>
                    <p> +88 01788 000 777</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="md:w-4/6">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4  bg-white rounded-md"
              >
                {/* Name Field */}
                <div>
                  <strong className="block  font-bold">Name</strong>
                  <input
                    id="name"
                    placeholder="Your name"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-blue-600"
                    type="text"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <strong className="block font-bold">Email</strong>
                  <input
                    id="email"
                    placeholder="Enter valid email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-blue-600"
                    type="email"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <strong className="block font-bold">Message</strong>
                  <textarea
                    id="message"
                    placeholder="Write your message"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-blue-600"
                    rows="5"
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-bold rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4">
        <div className="flex justify-center items-center py-12">
          <h1 className="text-4xl text-center font-lora font-bold pb-8">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-5">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What is a resume profile?
          </div>
          <div className="collapse-content">
            <p>
              A resume profile is a concise summary of your career goals,
              skills, and experience, typically found at the top of your resume,
              designed to grab the attention of potential employers.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-5">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How do I create a professional-looking resume?
          </div>
          <div className="collapse-content">
            <p>
              Start with a clean, easy-to-read template, focus on your relevant
              experience and skills, and keep it concise. Highlight key
              achievements and tailor your resume to the job you're applying
              for.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-5">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Can I edit my resume after submitting it?
          </div>
          <div className="collapse-content">
            <p>
              Yes, you can update your resume anytime by logging into your
              account and making changes. All saved versions will remain
              accessible for future edits.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-5">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Are there any costs associated with creating a resume?
          </div>
          <div className="collapse-content">
            <p>
              You can create a basic resume for free. However, premium features
              like advanced templates, cover letters, and resume-sharing options
              may require a paid subscription.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-5">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl text-secondary font-medium">
            How do I share my resume with potential employers?
          </div>
          <div className="collapse-content">
            <p>
              After building your resume, you can download it as a PDF or use
              the live URL sharing feature to send your resume directly to
              employers.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-5">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Is my personal information secure on your platform?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we take data privacy seriously. All personal information is
              encrypted and protected, ensuring your data remains safe.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
