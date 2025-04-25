
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { observeElements } from "@/utils/animations";

const HowItWorksPage = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = observeElements();
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins fade-in-element">
            How It Works
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto fade-in-element">
            Our streamlined implementation process gets your branded community platform up and running with minimal effort on your part.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="mb-24">
              <div className="flex items-center mb-8 fade-in-element">
                <div className="bg-infrazeo-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  1
                </div>
                <h2 className="text-3xl font-bold text-infrazeo-black font-poppins">Builders sign up → We create branded app + dashboard</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="fade-in-element">
                  <p className="text-lg text-infrazeo-gray mb-6">
                    After an initial consultation, we gather your brand requirements, community details, and desired modules. 
                    Our team then creates a white-label digital app customized specifically for your real estate portfolio.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-infrazeo-blue font-bold mr-2">•</span>
                      <span className="text-infrazeo-gray">Branding assets collected</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-infrazeo-blue font-bold mr-2">•</span>
                      <span className="text-infrazeo-gray">Module configuration tailored to your needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-infrazeo-blue font-bold mr-2">•</span>
                      <span className="text-infrazeo-gray">Community structure mapped digitally</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-md fade-in-element">
                  <img 
                    src="/step11.jpg" 
                    alt="Developer Signup Process" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-24">
              <div className="flex items-center mb-8 fade-in-element">
                <div className="bg-infrazeo-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  2
                </div>
                <h2 className="text-3xl font-bold text-infrazeo-black font-poppins">Admins onboarded → Residents added via secure onboarding</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 bg-gray-50 p-8 rounded-xl shadow-md fade-in-element">
                  <img 
                    src="/step2.jpg" 
                    alt="Admin Onboarding" 
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2 fade-in-element">
                  <p className="text-lg text-infrazeo-gray mb-6">
                    Our team provides comprehensive training for your staff and management. We set up administrator access with customized permission levels and ensure everyone is comfortable with the platform.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-infrazeo-blue font-bold mr-2">•</span>
                      <span className="text-infrazeo-gray">Role-based access configuration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-infrazeo-blue font-bold mr-2">•</span>
                      <span className="text-infrazeo-gray">Interactive training sessions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-infrazeo-blue font-bold mr-2">•</span>
                      <span className="text-infrazeo-gray">Comprehensive admin documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex items-center mb-8 fade-in-element">
                <div className="bg-infrazeo-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  3
                </div>
                <h2 className="text-3xl font-bold text-infrazeo-black font-poppins">App handles all community tasks</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="fade-in-element">
                  <p className="text-lg text-infrazeo-gray mb-6">
                    Residents download your branded app and create accounts. They can then use all available features including payments, access control, communication tools, and service requests.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-infrazeo-blue font-bold mr-2">•</span>
                      <span className="text-infrazeo-gray">Payments, Gate Pass, SOS</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-infrazeo-blue font-bold mr-2">•</span>
                      <span className="text-infrazeo-gray">Digital payments and community access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-infrazeo-blue font-bold mr-2">•</span>
                      <span className="text-infrazeo-gray">Complaint submission and resolution tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-infrazeo-blue font-bold mr-2">•</span>
                      <span className="text-infrazeo-gray">Community announcements and updates</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-md fade-in-element">
                  <img 
                    src="/step3.jpg" 
                    alt="Resident App Usage" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold mb-6 text-infrazeo-black font-poppins fade-in-element">
              Ready to get started?
            </h2>
            <p className="text-xl text-infrazeo-gray mb-8 max-w-2xl mx-auto fade-in-element">
              Let's discuss how we can transform your community management with a branded digital solution.
            </p>
            <Link to="/book-demo" className="fade-in-element inline-block">
              <Button className="bg-infrazeo-blue hover:bg-blue-600 px-8 py-6 h-auto text-lg rounded-full shadow-md">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
