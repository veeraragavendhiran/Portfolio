import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { GlitchText } from '../ui/GlitchText';
import { MagneticButton } from '../ui/MagneticButton';

const socialLinks = [
  { 
    platform: 'Email',
value: 'veeraragavendhiran12@gmail.com',
icon: Mail,
href: 'mailto:veeraragavendhiran12@gmail.com',
color: 'from-cyan-500 to-cyan-600'

  },
  { 
    platform: 'Location', 
    value: 'Tamilnadu , India',
    icon: MapPin,
    color: 'from-purple-500 to-purple-600'
  },
  { 
    platform: 'Phone', 
    value: '+91 8122738582',
    icon: Phone,
    href: 'tel:+918122738582',
    color: 'from-pink-500 to-pink-600'
  },
];

export const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_id', // Replace with your EmailJS service ID
        'template_id', // Replace with your EmailJS template ID
        data,
        'user_id' // Replace with your EmailJS user ID
      );
      
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <GlitchText text="Connect" className="text-gradient" />
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Have an idea or project in mind? Let’s discuss how we can turn it into a meaningful solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-slate-400 mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and design.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.platform}
                  href={item.href}
                  target={item.href ? '_blank' : undefined}
                  rel={item.href ? 'noopener noreferrer' : undefined}
                  className={`flex items-center space-x-4 p-4 rounded-xl
                    bg-slate-900/50 hover:bg-slate-800/50 transition-all duration-300
                    ${!item.href ? 'cursor-default' : 'cursor-pointer'}`}
                  whileHover={{ x: 10 }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color}
                    flex items-center justify-center`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">{item.platform}</div>
                    <div className="text-slate-400">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
<div>
  <h4 className="text-lg font-bold mb-4">Follow Me</h4>
  <div className="flex space-x-4">
    {[
      {
        name: 'GitHub',
        url: 'https://github.com/veeraragavendhiran',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/veeraragavendhiran',
      },
      {
        name: 'Twitter',
        url: 'https://x.com/hariveera007',
      },
    ].map((platform) => (
      <MagneticButton
        key={platform.name}
        className="px-6 py-3 text-sm"
        onClick={() => window.open(platform.url, '_blank')}
      >
        {platform.name}
      </MagneticButton>
    ))}
  </div>
</div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="cyber-card p-8 space-y-6"
            >
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400">Message sent successfully!</span>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-rose-500/10 border border-rose-500/20"
                >
                  <AlertCircle className="w-5 h-5 text-rose-400" />
                  <span className="text-rose-400">Failed to send message. Please try again.</span>
                </motion.div>
              )}

              {/* Form Fields */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-800
                    focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your name"
                />
                {errors.name && (
                  <span className="text-sm text-rose-400 mt-1">{errors.name.message}</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-800
                    focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <span className="text-sm text-rose-400 mt-1">{errors.email.message}</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-800
                    focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
                {errors.message && (
                  <span className="text-sm text-rose-400 mt-1">{errors.message.message}</span>
                )}
              </div>

              <MagneticButton
                type="submit"
                disabled={isSubmitting}
                className="w-full justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-3" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-3" />
                    Send Message
                  </>
                )}
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};