
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { observeElements } from "@/utils/animations";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = observeElements();
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins fade-in-element">
            Book a Demo or Request a Callback
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto fade-in-element">
            Get in touch with our team to learn how InfraZeo can transform your community management.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-infrazeo-black font-poppins fade-in-element">Contact Us</h2>
              <p className="text-lg text-infrazeo-gray mb-8 fade-in-element">
                Fill out the form and our team will get back to you within 24 hours. We're here to answer any questions you have about our platform.
              </p>

              <div className="space-y-8 mb-8">
                <div className="flex items-start fade-in-element">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-infrazeo-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-infrazeo-black font-poppins">
                      Email Us
                    </h3>
                    <a
                      href="mailto:contact@infrazeo.com"
                      className="text-infrazeo-blue hover:underline"
                    >
                      contact@infrazeo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start fade-in-element">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-infrazeo-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-infrazeo-black font-poppins">
                      Call Us
                    </h3>
                    <a
                      href="tel:+919063625533"
                      className="text-infrazeo-blue hover:underline"
                    >
                      +919063625533
                    </a>
                  </div>
                </div>

                <div className="flex items-start fade-in-element">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-infrazeo-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-infrazeo-black font-poppins">
                      Location
                    </h3>
                    <p className="text-infrazeo-gray">
                      Vijaywada,Andhra Pradesh, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 fade-in-element">
                <h3 className="text-xl font-semibold mb-4 text-infrazeo-black font-poppins">
                  Connect with us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/infrazeo/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-100 p-3 rounded-full text-infrazeo-blue hover:bg-blue-200 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:hello@infrazeo.com"
                    className="bg-blue-100 p-3 rounded-full text-infrazeo-blue hover:bg-blue-200 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md fade-in-element">
              <h3 className="text-2xl font-bold mb-6 text-infrazeo-black font-poppins">
                Send us a message
              </h3>
                <form action="https://formspree.io/f/mgykokjz" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-infrazeo-black mb-1"
                  >
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    name="fullName" // 👈 ADD THIS
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 rounded-lg"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-infrazeo-black mb-1"
                  >
                    Company Name
                  </label>
                  <Input
                    id="companyName"
                    name="companyName" // 👈 ADD THIS
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 rounded-lg"
                    placeholder="Your Company Ltd."
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-infrazeo-black mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email" // 👈 ADD THIS
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 rounded-lg"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-infrazeo-black mb-1"
                  >
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone" // 👈 ADD THIS
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-lg"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-infrazeo-black mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message" // 👈 ADD THIS
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 rounded-lg"
                    placeholder="Tell us about your requirements..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-infrazeo-blue hover:bg-blue-600 rounded-full py-6 h-auto"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-40"
        aria-label="Contact via WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  );
};

export default ContactPage;
