import { SectionTitle } from '../../components/SectionTitle';
import { Reveal } from '../../components/Reveal';
import React, { useState } from 'react';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { ToastContainer, toast, Bounce, type ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { Profile } from '../../../shared/types';
import { sendContactMessage } from '../../api';

const toastOptions: ToastOptions = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
  transition: Bounce,
  style: { width: '70%' }
};

const emptyForm = { name: '', email: '', subject: '', message: '' };

export const Contact = ({ profile }: { profile: Profile }) => {
  const [formData, setFormData] = useState(emptyForm);

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendContactMessage(formData);
      toast.success(`Thanks, ${formData.name.split(' ')[0]}! Your message is on its way. I'll get back to you soon.`, toastOptions);
      setFormData(emptyForm);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to send message. Please try again later.', toastOptions);
    } finally {
      setLoading(false);
    }
  };

  const contactCards = [
    { icon: MdLocationOn, label: 'Location', value: profile.location },
    { icon: MdEmail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: MdPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  ];

  return (
    <section id='contact' className="scroll-mt-16 py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <SectionTitle label="say hello">Let's work together</SectionTitle>
      <Reveal>
        <p className='text-center text-lg text-gray-300 max-w-xl mx-auto -mt-4 mb-10 leading-8'>
          Whether it's a role, a project, or just a question about data, my inbox is open.
          I read every message myself.
        </p>
      </Reveal>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Contact Info Cards */}
        <div className='md:col-span-1 space-y-4'>
          {contactCards.map(({ icon: Icon, label, value, href }, index) => (
            <Reveal key={label} delay={index * 0.08}>
            <div className='glass-card-hover p-6 text-center group'>
              <div className='w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Icon className='text-primary text-2xl' />
              </div>
              <h3 className='text-primary font-bold text-lg mb-1'>{label}</h3>
              {href ? (
                <a href={href} className='text-gray-300 hover:text-primary transition-colors break-all'>{value}</a>
              ) : (
                <p className='text-gray-300'>{value}</p>
              )}
            </div>
            </Reveal>
          ))}
        </div>

        {/* Contact Form */}
        <Reveal delay={0.1} className='md:col-span-2'>
        <div className='glass-card p-8 h-full'>
          <h3 className='font-display text-2xl font-semibold text-slate-100 mb-1'>Send me a message</h3>
          <p className='text-gray-400 mb-6'>A couple of lines is plenty.</p>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <input
              type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Your name'
              maxLength={100}
              className='w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300'
              required
            />
            <input
              type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email address'
              maxLength={200}
              className='w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300'
              required
            />
            <input
              type='text' name='subject' value={formData.subject} onChange={handleChange} placeholder='What is it about?'
              maxLength={200}
              className='w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300'
              required
            />
            <textarea name='message' value={formData.message} onChange={handleChange} placeholder='Hi Kevin, …'
              rows={5}
              maxLength={5000}
              className='w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none'
              required
            ></textarea>
            <button
              type='submit'
              className='btn-glow w-full md:w-auto'
              disabled={loading}
            >
              {loading ? 'Sending…' : 'Send message →'}
            </button>
          </form>
        </div>
        </Reveal>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </section>
  );
};

export default Contact;
