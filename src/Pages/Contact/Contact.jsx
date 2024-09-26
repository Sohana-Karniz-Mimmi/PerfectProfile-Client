import React from "react";
import Container from "../../Shared/Container";
import contact from "../../assets/contact.jpg";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope, FaPhone, FaRocketchat } from "react-icons/fa6";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can handle form submission here, e.g., send data to API
  };
  return (
    <div className="min-h-screen">
      <section
        className="lg:py-52 py-16 bg-primary relative"
        style={{
          backgroundImage: `url(${contact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Opacity overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <Container>
          <div className="flex justify-center items-center relative">
            <h1 className="lg:text-5xl md:text-4xl text-3xl font-extrabold font-lora uppercase text-white">
              Contact Us
            </h1>
          </div>
        </Container>
      </section>
      <Container>
        <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 lg:-mt-24 -mt-8 z-50">
          <div className="lg:w-[250px] w-full p-6 flex flex-col  items-center  h-[250px] bg-white shadow-2xl rounded z-10 space-y-5">
            <FaMapMarkerAlt className="text-3xl text-primary" />
            <h2 className="text-xl text-center font-extrabold font-lora uppercase">
              Our main office
            </h2>
            <p className="font-montserrat text-center">
              117/A, Rangs Bhaban, Bijoy Sharani, Tejgaon, Dhaka-1215
            </p>
          </div>
          <div className="lg:w-[250px] w-full p-6 flex flex-col  items-center h-[250px] bg-white shadow-2xl rounded z-10 space-y-5">
            <FaPhoneAlt className="text-3xl text-primary" />
            <h2 className="text-xl text-center font-extrabold font-lora uppercase">
              Phone number
            </h2>
            <p className="font-montserrat text-center">
              234-5674-6855 <br />
              888-4567-9845 - Toll free
            </p>
          </div>
          <div className="lg:w-[250px] w-full p-6 flex flex-col  items-center h-[250px] bg-white shadow-2xl rounded z-10 space-y-5">
            <FaRocketchat className="text-3xl text-primary" />
            <h2 className="text-xl text-center font-extrabold font-lora uppercase">
              Live chat
            </h2>
            <p className="font-montserrat text-center">
              Get real-time assistance and answers to your questions quickly.
            </p>
          </div>
          <div className="lg:w-[250px] w-full p-6 flex flex-col  items-center  h-[250px] bg-white shadow-2xl rounded z-10 space-y-5">
            <FaEnvelope className="text-3xl text-primary" />
            <h2 className="text-xl text-center font-extrabold font-lora uppercase">
              Email
            </h2>
            <p className="font-montserrat text-center">
              support@perfectprofile.com
            </p>
          </div>
        </section>
        <section className="py-12">
          <div className="flex lg:flex-row flex-col-reverse justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="font-montserrat pr-4"
              >
                <div className="mb-4 ">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-bold "
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-primary"
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-bold"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-primary"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-bold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="w-full p-2 border rounded"
                    placeholder="Enter your message"
                    rows="5"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-primary text-white w-full py-2 px-4 rounded"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="lg:w-1/2 w-full px-4 space-y-4 border">
              <h2 className="font-montserrat text-3xl font-bold">Get in touch</h2>
              <p className="font-lora">We believe sustainability is vitally important.</p>
              <p className="font-montserrat">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea natus placeat et non esse beatae ipsa, ipsum modi voluptates asperiores nam doloribus minus repudiandae at ut veritatis tempore dolores? Quia, labore suscipit!</p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Contact;
