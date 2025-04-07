
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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
      <section className="bg-infrazen-blue text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Book a Personalized Demo
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See firsthand how InfraZen can transform your community management with a customized demonstration.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-infrazen-black">What to Expect</h2>
              <p className="text-lg text-infrazen-gray mb-8">
                Our personalized demos are tailored to your specific needs and showcase how our platform can address your unique challenges.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex">
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-infrazen-blue font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-infrazen-black">
                      Needs Assessment
                    </h3>
                    <p className="text-infrazen-gray">
                      We'll discuss your current challenges and specific requirements to tailor the demo.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-infrazen-blue font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-infrazen-black">
                      Platform Demonstration
                    </h3>
                    <p className="text-infrazen-gray">
                      See our white-label solution in action with examples relevant to your property portfolio.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-infrazen-blue font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-infrazen-black">
                      Q&A Session
                    </h3>
                    <p className="text-infrazen-gray">
                      Get answers to all your questions from our product specialists and implementation experts.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-infrazen-blue font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-infrazen-black">
                      Custom Implementation Plan
                    </h3>
                    <p className="text-infrazen-gray">
                      Receive a tailored implementation roadmap and pricing proposal for your specific needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-infrazen-black">
                  What Our Clients Say
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-infrazen-blue pl-4">
                    <p className="italic text-infrazen-gray mb-2">
                      "The demo clearly showed how InfraZen could solve our community management challenges. Implementation was smooth and our residents love the branded experience."
                    </p>
                    <p className="font-medium text-infrazen-black">
                      - Sarah Johnson, VP of Operations at Milestone Properties
                    </p>
                  </div>
                  <div className="border-l-4 border-infrazen-blue pl-4">
                    <p className="italic text-infrazen-gray mb-2">
                      "We were impressed by how quickly we could get our branded platform up and running. The resident adoption has been remarkable."
                    </p>
                    <p className="font-medium text-infrazen-black">
                      - Michael Chen, CTO at Urban Living Developments
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-infrazen-black">
                Schedule Your Demo
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-infrazen-black mb-1"
                  >
                    Full Name*
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-infrazen-black mb-1"
                  >
                    Company Name*
                  </label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300"
                    placeholder="Your Company Ltd."
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-infrazen-black mb-1"
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
                    className="w-full border-gray-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-infrazen-black mb-1"
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
                    className="w-full border-gray-300"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block text-sm font-medium text-infrazen-black mb-1"
                  >
                    Preferred Demo Date
                  </label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full border-gray-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-infrazen-black mb-1"
                  >
                    Additional Information
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-gray-300"
                    placeholder="Tell us about your property portfolio and specific needs..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-infrazen-blue hover:bg-blue-600 py-6 h-auto text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Book Your Demo"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h3 className="text-2xl font-bold mb-12 text-center text-infrazen-black">
            Trusted by Leading Real Estate Developers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-infrazen-gray text-sm">Client Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDemoPage;
