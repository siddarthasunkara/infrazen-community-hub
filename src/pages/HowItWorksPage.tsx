
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HowItWorksPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-infrazen-blue text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How It Works
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
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
              <div className="flex items-center mb-8">
                <div className="bg-infrazen-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  1
                </div>
                <h2 className="text-3xl font-bold text-infrazen-black">Developer signs up</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-infrazen-gray mb-6">
                    After an initial consultation, we gather your brand requirements, community details, and desired modules. 
                    Our team then creates a white-label digital app customized specifically for your real estate portfolio.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-infrazen-blue font-bold mr-2">•</span>
                      <span className="text-infrazen-gray">Branding assets collected</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-infrazen-blue font-bold mr-2">•</span>
                      <span className="text-infrazen-gray">Module configuration tailored to your needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-infrazen-blue font-bold mr-2">•</span>
                      <span className="text-infrazen-gray">Community structure mapped digitally</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <img 
                    src="/placeholder.svg" 
                    alt="Developer Signup Process" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-24">
              <div className="flex items-center mb-8">
                <div className="bg-infrazen-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  2
                </div>
                <h2 className="text-3xl font-bold text-infrazen-black">Admins onboarded</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 bg-gray-50 p-8 rounded-lg">
                  <img 
                    src="/placeholder.svg" 
                    alt="Admin Onboarding" 
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <p className="text-lg text-infrazen-gray mb-6">
                    Our team provides comprehensive training for your staff and management. We set up administrator access with customized permission levels and ensure everyone is comfortable with the platform.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-infrazen-blue font-bold mr-2">•</span>
                      <span className="text-infrazen-gray">Role-based access configuration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-infrazen-blue font-bold mr-2">•</span>
                      <span className="text-infrazen-gray">Interactive training sessions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-infrazen-blue font-bold mr-2">•</span>
                      <span className="text-infrazen-gray">Comprehensive admin documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-infrazen-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  3
                </div>
                <h2 className="text-3xl font-bold text-infrazen-black">Residents use the app</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-infrazen-gray mb-6">
                    Residents download your branded app and create accounts. They can then use all available features including payments, access control, communication tools, and service requests.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-infrazen-blue font-bold mr-2">•</span>
                      <span className="text-infrazen-gray">Simple self-registration process</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-infrazen-blue font-bold mr-2">•</span>
                      <span className="text-infrazen-gray">Digital payments and community access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-infrazen-blue font-bold mr-2">•</span>
                      <span className="text-infrazen-gray">Complaint submission and resolution tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-infrazen-blue font-bold mr-2">•</span>
                      <span className="text-infrazen-gray">Community announcements and updates</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <img 
                    src="/placeholder.svg" 
                    alt="Resident App Usage" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Ongoing Support */}
          <div className="mt-24 bg-gray-50 p-8 md:p-12 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-infrazen-black">Continuous Support & Development</h3>
            <p className="text-lg text-infrazen-gray mb-8">
              Our relationship doesn't end with deployment. InfraZen provides ongoing support, regular updates, and continuous improvement based on your feedback and evolving needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2 text-infrazen-black">Technical Support</h4>
                <p className="text-infrazen-gray">Dedicated support team available to resolve any technical issues promptly.</p>
              </div>
              <div className="bg-white p-6 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2 text-infrazen-black">Regular Updates</h4>
                <p className="text-infrazen-gray">Continuous platform improvements and new feature releases.</p>
              </div>
              <div className="bg-white p-6 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2 text-infrazen-black">Custom Development</h4>
                <p className="text-infrazen-gray">Ability to request custom features specific to your communities.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-infrazen-black">
              Ready to get started?
            </h2>
            <p className="text-xl text-infrazen-gray mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your community management with a branded digital solution.
            </p>
            <Link to="/book-demo">
              <Button className="bg-infrazen-blue hover:bg-blue-600 px-8 py-6 h-auto text-lg">
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
