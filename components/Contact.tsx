import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:divyanile02@gmail.com?subject=Message from ${name}&body=Name: ${name}%0DEmail: ${email}%0D%0DMessage:%0D${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-6 items-center justify-center text-center px-4"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold tracking-wide">
        04. What’s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold text-white">Get In Touch</h2>
      <p className="max-w-[600px] text-textDark">
        I’m currently open to new opportunities and actively exploring roles that align with my interests. 
        Whether you have a question or just want to say hi, feel free to reach out!
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[500px] flex flex-col gap-4 mt-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="p-4 rounded-md border border-gray-600 bg-[#0b1120] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-textGreen"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="p-4 rounded-md border border-gray-600 bg-[#0b1120] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-textGreen"
        />
        <textarea
          name="message"
          rows={6}
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
          className="p-4 rounded-md border border-gray-600 bg-[#0b1120] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-textGreen"
        />
        <button
          type="submit"
          className="mt-4 w-fit mx-auto px-6 py-3 border border-textGreen text-textGreen font-semibold rounded-md hover:bg-hoverColor transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
