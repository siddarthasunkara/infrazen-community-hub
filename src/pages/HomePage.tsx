
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CTAButton from "@/components/CTAButton";
import { 
  Tag, 
  Brain, 
  ShieldCheck, 
  BarChart, 
  Layers, 
  Settings 
} from "lucide-react";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Community Living, Reinvented for Real Estate Brands
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                A modern digital platform for branded community engagement, access, and management — built for large residential ecosystems.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link to="/book-demo">
                  <Button className="bg-white text-infrazen-blue hover:bg-gray-100 px-6 py-6 h-auto text-lg">
                    Book a Demo
                  </Button>
                </Link>
                <Link to="/solutions">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 h-auto text-lg">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative mx-auto max-w-sm">
                <div className="bg-white p-4 rounded-3xl shadow-xl">
                  <div className="bg-blue-50 rounded-2xl p-4">
                    <img 
                      src="/placeholder.svg" 
                      alt="App Interface" 
                      className="w-full rounded-xl"
                    />
                    <div className="mt-4 p-2">
                      <div className="h-6 bg-gray-200 rounded-full w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-50"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-300 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">What We Offer</h2>
          <p className="section-subtitle text-center">
            Comprehensive tools designed specifically for real estate developers and property managers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Feature Card 1 */}
            <div className="feature-card">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Tag className="text-infrazen-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-infrazen-black">Custom Branding</h3>
              <p className="text-infrazen-gray">Your identity, your experience. Maintain brand consistency across all digital touchpoints.</p>
            </div>

            {/* Feature Card 2 */}
            <div className="feature-card">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Brain className="text-infrazen-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-infrazen-black">Smart Resident Interface</h3>
              <p className="text-infrazen-gray">Easy to use. Built for impact. Intuitive design that residents actually enjoy using.</p>
            </div>

            {/* Feature Card 3 */}
            <div className="feature-card">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <ShieldCheck className="text-infrazen-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-infrazen-black">Secure & Scalable Architecture</h3>
              <p className="text-infrazen-gray">Trusted cloud backbone that grows with your communities while maintaining security.</p>
            </div>

            {/* Feature Card 4 */}
            <div className="feature-card">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <BarChart className="text-infrazen-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-infrazen-black">Performance Insights</h3>
              <p className="text-infrazen-gray">Real-time operational visibility into community engagement and satisfaction metrics.</p>
            </div>

            {/* Feature Card 5 */}
            <div className="feature-card">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Layers className="text-infrazen-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-infrazen-black">Modular System</h3>
              <p className="text-infrazen-gray">Add features as your needs grow. Our platform expands with your business requirements.</p>
            </div>

            {/* Feature Card 6 */}
            <div className="feature-card">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Settings className="text-infrazen-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-infrazen-black">End-to-End Support</h3>
              <p className="text-infrazen-gray">From onboarding to updates. Continuous assistance throughout your partnership with us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help You Grow Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title text-center">How We Help You Grow</h2>
          <p className="section-subtitle text-center">
            A strategic partnership that elevates your brand and resident experience.
          </p>

          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 transform -translate-x-1/2"></div>
            
            <div className="space-y-24 relative">
              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right md:pr-12">
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 rounded-full bg-infrazen-blue transform -translate-x-1/2"></div>
                  <span className="text-sm font-semibold text-infrazen-blue uppercase tracking-wider">Step 1</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4 text-infrazen-black">You focus on building great communities</h3>
                  <p className="text-infrazen-gray">Continue what you do best - creating exceptional living spaces and fostering community growth.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-8 md:pl-12">
                  <img src="/placeholder.svg" alt="Building communities" className="rounded-lg w-full" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 bg-gray-50 rounded-lg p-8 md:pr-12">
                  <img src="/placeholder.svg" alt="Digital solution" className="rounded-lg w-full" />
                </div>
                <div className="order-1 md:order-2 md:pl-12">
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 rounded-full bg-infrazen-blue transform -translate-x-1/2"></div>
                  <span className="text-sm font-semibold text-infrazen-blue uppercase tracking-wider">Step 2</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4 text-infrazen-black">We deliver a digital solution that reflects your brand</h3>
                  <p className="text-infrazen-gray">Your own white-label platform, customized to your brand standards and community needs.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right md:pr-12">
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 rounded-full bg-infrazen-blue transform -translate-x-1/2"></div>
                  <span className="text-sm font-semibold text-infrazen-blue uppercase tracking-wider">Step 3</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4 text-infrazen-black">Your residents enjoy seamless, secure, and modern living experiences</h3>
                  <p className="text-infrazen-gray">Residents benefit from an intuitive digital platform that enhances their community experience.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-8 md:pl-12">
                  <img src="/placeholder.svg" alt="Resident experience" className="rounded-lg w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why InfraZen Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Why InfraZen?</h2>
          <p className="section-subtitle text-center">
            We're committed to being your long-term technology partner, not just another app provider.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Reason 1 */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow text-center">
              <h3 className="text-xl font-semibold mb-3 text-infrazen-black">Enterprise-grade reliability</h3>
              <p className="text-infrazen-gray">Built to handle thousands of users with 99.9% uptime guarantee.</p>
            </div>

            {/* Reason 2 */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow text-center">
              <h3 className="text-xl font-semibold mb-3 text-infrazen-black">Future-ready architecture</h3>
              <p className="text-infrazen-gray">Constantly evolving platform that adapts to changing technology landscapes.</p>
            </div>

            {/* Reason 3 */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow text-center">
              <h3 className="text-xl font-semibold mb-3 text-infrazen-black">Built for real estate groups</h3>
              <p className="text-infrazen-gray">Specifically designed for the unique needs of property developers and managers.</p>
            </div>

            {/* Reason 4 */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow text-center">
              <h3 className="text-xl font-semibold mb-3 text-infrazen-black">Custom design & deployment</h3>
              <p className="text-infrazen-gray">Tailored implementation to match your specific community requirements.</p>
            </div>

            {/* Reason 5 */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow text-center">
              <h3 className="text-xl font-semibold mb-3 text-infrazen-black">Zero maintenance for your team</h3>
              <p className="text-infrazen-gray">We handle all updates, security patches, and technical support.</p>
            </div>

            {/* Reason 6 */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow text-center">
              <h3 className="text-xl font-semibold mb-3 text-infrazen-black">Long-term tech innovation partner</h3>
              <p className="text-infrazen-gray">Committed to evolving with your business needs for years to come.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-20 bg-infrazen-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Brand. Our Technology.</h2>
          <p className="text-xl mb-10">Let's Elevate Community Living Together.</p>
          <CTAButton 
            text="Book a Free Demo" 
            to="/book-demo" 
            variant="default"
            className="bg-white text-infrazen-blue hover:bg-gray-100 px-8 py-6 h-auto text-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
