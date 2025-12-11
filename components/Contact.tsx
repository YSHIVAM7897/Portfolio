import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { PERSONAL_DETAILS } from '../constants';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2, XCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus('idle');

    // EmailJS credentials
    const SERVICE_ID = 'service_evlnuw8';
    const TEMPLATE_ID = 'template_t0lppis';
    const PUBLIC_KEY = 'AsO8sIjTsVj3LsoB2';

    // Extract form data
    const formData = new FormData(formRef.current);

    // Construct parameters object with timestamp
    const templateParams = {
      name: formData.get('user_name') as string,
      email: formData.get('user_email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      time: new Date().toLocaleString(), // Adding the current time
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
          setStatus('success');
          setIsSubmitting(false);
          formRef.current?.reset();
          // Clear success message after 5 seconds
          setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
          console.error(error.text);
          setStatus('error');
          setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          <div>
            <span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">Let's start a project together</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Interested in working together? I'm currently open to new opportunities and collaborations. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600 mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-slate-600 hover:text-indigo-600 transition-colors">
                    {PERSONAL_DETAILS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone</h4>
                  <p className="text-slate-600">
                    {PERSONAL_DETAILS.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Location</h4>
                  <p className="text-slate-600">
                    {PERSONAL_DETAILS.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
            {/* Status Overlay */}
            {status === 'success' && (
              <div className="absolute inset-0 z-10 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 animate-in fade-in">
                <CheckCircle2 size={64} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600">Thanks for reaching out. I'll get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm font-bold text-indigo-600 hover:text-indigo-800"
                >
                  Send another message
                </button>
              </div>
            )}

            <form ref={formRef} className="space-y-5" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-sm font-medium text-slate-700">Name</label>
                  <input 
                    type="text" 
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-sm font-medium text-slate-700">Email</label>
                  <input 
                    type="email" 
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                  <XCircle size={16} />
                  <span>Something went wrong. Please try again later.</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-indigo-600 transition-colors shadow-lg hover:shadow-indigo-500/20 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};