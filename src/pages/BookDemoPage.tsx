
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { observeElements } from "@/utils/animations";

const BookDemoPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
    preferredDate: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Demo request submitted!",
        description: "Our team will contact you to confirm your demo appointment.",
      });
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        message: "",
        preferredDate: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins fade-in-element">
            Book a Personalized Demo
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto fade-in-element">
            See firsthand how InfraZeo can transform your community management with a customized demonstration.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-infrazeo-black font-poppins fade-in-element">What to Expect</h2>
              <p className="text-lg text-infrazeo-gray mb-8 fade-in-element">
                Our personalized demos are tailored to your specific needs and showcase how our platform can address your unique challenges.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex fade-in-element">
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-infrazeo-blue font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-infrazeo-black font-poppins">
                      Needs Assessment
                    </h3>
                    <p className="text-infrazeo-gray">
                      We'll discuss your current challenges and specific requirements to tailor the demo.
                    </p>
                  </div>
                </div>

                <div className="flex fade-in-element">
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-infrazeo-blue font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-infrazeo-black font-poppins">
                      Platform Demonstration
                    </h3>
                    <p className="text-infrazeo-gray">
                      See our white-label solution in action with examples relevant to your property portfolio.
                    </p>
                  </div>
                </div>

                <div className="flex fade-in-element">
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-infrazeo-blue font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-infrazeo-black font-poppins">
                      Q&A Session
                    </h3>
                    <p className="text-infrazeo-gray">
                      Get answers to all your questions from our product specialists and implementation experts.
                    </p>
                  </div>
                </div>

                <div className="flex fade-in-element">
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-infrazeo-blue font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-infrazeo-black font-poppins">
                      Custom Implementation Plan
                    </h3>
                    <p className="text-infrazeo-gray">
                      Receive a tailored implementation roadmap and pricing proposal for your specific needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md fade-in-element">
              <h3 className="text-2xl font-bold mb-6 text-infrazeo-black font-poppins">
                Schedule Your Demo
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-infrazeo-black mb-1"
                  >
                    Full Name*
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
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
                    Company Name*
                  </label>
                  <Input
                    id="companyName"
                    name="companyName"
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
                    Email*
                  </label>
                  <Input
                    id="email"
                    name="email"
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
                    Phone*
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 rounded-lg"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block text-sm font-medium text-infrazeo-black mb-1"
                  >
                    Preferred Demo Date
                  </label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-infrazeo-black mb-1"
                  >
                    Additional Information
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-lg"
                    placeholder="Tell us about your property portfolio and specific needs..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-infrazeo-blue hover:bg-blue-600 rounded-full py-6 h-auto text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Book Your Demo"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDemoPage;
