
import { useEffect, useRef } from "react";
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
import { observeElements } from "@/utils/animations";

const HomePage = () => {
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
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left fade-in-element">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-poppins">
                Community Living, Reinvented for Real Estate Brands
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                A future-ready digital solution for builders and gated communities to manage residents, operations, and engagement — all under your brand.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link to="/book-demo">
                  <Button className="bg-white text-infrazeo-blue hover:bg-gray-100 px-6 py-6 h-auto text-lg rounded-full shadow-md">
                    Book a Demo
                  </Button>
                </Link>
                <Link to="/solutions">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 h-auto text-lg rounded-full">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
                <div className="hidden lg:block fade-in-element">
                  <div className="relative mx-auto max-w-sm">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                      <img 
                        src="/home1.jpg" 
                        alt="App" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-blue-400 rounded-full opacity-50"></div>
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-300 rounded-full opacity-40"></div>
                <div className="absolute top-1/2 right-[-50px] w-16 h-16 bg-blue-500 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center fade-in-element">What We Offer</h2>
          <p className="section-subtitle text-center fade-in-element">
            Comprehensive tools designed specifically for real estate developers and property managers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Feature Card 1 */}
            <div className="feature-card fade-in-element">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Tag className="text-infrazeo-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-infrazeo-black font-poppins">Custom Branding</h3>
              <p className="text-infrazeo-gray">Your identity, your experience. Maintain brand consistency across all digital touchpoints.</p>
            </div>

            {/* Feature Card 2 */}
            <div className="feature-card fade-in-element">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Brain className="text-infrazeo-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-infrazeo-black font-poppins">Smart Resident Interface</h3>
              <p className="text-infrazeo-gray">Easy to use. Built for impact. Intuitive design that residents actually enjoy using.</p>
            </div>

            {/* Feature Card 3 */}
            <div className="feature-card fade-in-element">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <ShieldCheck className="text-infrazeo-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-infrazeo-black font-poppins">Secure & Scalable Architecture</h3>
              <p className="text-infrazeo-gray">Cloud-native reliability that grows with your communities while maintaining security.</p>
            </div>

            {/* Feature Card 4 */}
            <div className="feature-card fade-in-element">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <BarChart className="text-infrazeo-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-infrazeo-black font-poppins">Performance Insights</h3>
              <p className="text-infrazeo-gray">Real-time operational visibility into community engagement and satisfaction metrics.</p>
            </div>

            {/* Feature Card 5 */}
            <div className="feature-card fade-in-element">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Layers className="text-infrazeo-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-infrazeo-black font-poppins">Modular System</h3>
              <p className="text-infrazeo-gray">Add features as your needs grow. Our platform expands with your business requirements.</p>
            </div>

            {/* Feature Card 6 */}
            <div className="feature-card fade-in-element">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Settings className="text-infrazeo-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-infrazeo-black font-poppins">End-to-End Support</h3>
              <p className="text-infrazeo-gray">From deployment to upgrades. Continuous assistance throughout your partnership with us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help You Grow Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title text-center fade-in-element">How It Helps You Grow</h2>
          <p className="section-subtitle text-center fade-in-element">
            A strategic partnership that elevates your brand and resident experience.
          </p>

          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 transform -translate-x-1/2"></div>
            
            <div className="space-y-24 relative">
              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right md:pr-12 fade-in-element">
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 rounded-full bg-infrazeo-blue transform -translate-x-1/2"></div>
                  <span className="text-sm font-semibold text-infrazeo-blue uppercase tracking-wider">Step 1</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4 text-infrazeo-black font-poppins">You build the community</h3>
                  <p className="text-infrazeo-gray">Continue what you do best - creating exceptional living spaces and fostering community growth.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-8 md:pl-12 fade-in-element">
                  <img src="/pic1.jpg" alt="Building communities" className="rounded-lg w-full shadow-md" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 bg-gray-50 rounded-lg p-8 md:pr-12 fade-in-element">
                  <img src="/step2.jpg" alt="Digital solution" className="rounded-lg w-full shadow-md" />
                </div>
                <div className="order-1 md:order-2 md:pl-12 fade-in-element">
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 rounded-full bg-infrazeo-blue transform -translate-x-1/2"></div>
                  <span className="text-sm font-semibold text-infrazeo-blue uppercase tracking-wider">Step 2</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4 text-infrazeo-black font-poppins">We deliver your branded tech</h3>
                  <p className="text-infrazeo-gray">Your own white-label platform, customized to your brand standards and community needs.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right md:pr-12 fade-in-element">
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 rounded-full bg-infrazeo-blue transform -translate-x-1/2"></div>
                  <span className="text-sm font-semibold text-infrazeo-blue uppercase tracking-wider">Step 3</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4 text-infrazeo-black font-poppins">Your residents enjoy modern living</h3>
                  <p className="text-infrazeo-gray">Residents benefit from an intuitive digital platform that enhances their community experience.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-8 md:pl-12 fade-in-element">
                  <img src="/step33.jpg" alt="Resident experience" className="rounded-lg w-full shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why InfraZeo Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center fade-in-element">Why InfraZeo?</h2>
          <p className="section-subtitle text-center fade-in-element">
            We're committed to being your long-term technology partner, not just another app provider.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Reason 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all hover:translate-y-[-5px] fade-in-element text-center">
              <h3 className="text-xl font-semibold mb-3 text-infrazeo-black font-poppins">Enterprise-grade reliability</h3>
              <p className="text-infrazeo-gray">Built to handle thousands of users with 99.9% uptime guarantee.</p>
            </div>

            {/* Reason 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all hover:translate-y-[-5px] fade-in-element text-center">
              <h3 className="text-xl font-semibold mb-3 text-infrazeo-black font-poppins">Future-ready infrastructure</h3>
              <p className="text-infrazeo-gray">Constantly evolving platform that adapts to changing technology landscapes.</p>
            </div>

            {/* Reason 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all hover:translate-y-[-5px] fade-in-element text-center">
              <h3 className="text-xl font-semibold mb-3 text-infrazeo-black font-poppins">Designed for real estate groups</h3>
              <p className="text-infrazeo-gray">Specifically designed for the unique needs of property developers and managers.</p>
            </div>

            {/* Reason 4 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all hover:translate-y-[-5px] fade-in-element text-center">
              <h3 className="text-xl font-semibold mb-3 text-infrazeo-black font-poppins">White-label, tailored design</h3>
              <p className="text-infrazeo-gray">Tailored implementation to match your specific community requirements.</p>
            </div>

            {/* Reason 5 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all hover:translate-y-[-5px] fade-in-element text-center">
              <h3 className="text-xl font-semibold mb-3 text-infrazeo-black font-poppins">Zero maintenance burden</h3>
              <p className="text-infrazeo-gray">We handle all updates, security patches, and technical support.</p>
            </div>

            {/* Reason 6 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all hover:translate-y-[-5px] fade-in-element text-center">
              <h3 className="text-xl font-semibold mb-3 text-infrazeo-black font-poppins">Trusted innovation partner</h3>
              <p className="text-infrazeo-gray">Committed to evolving with your business needs for years to come.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins fade-in-element">Your Brand. Our Technology.</h2>
          <p className="text-xl mb-10 fade-in-element">Let's Elevate Community Living Together.</p>
          <div className="fade-in-element">
            <CTAButton 
              text="Book a Free Demo" 
              to="/book-demo" 
              variant="default"
              className="bg-white text-infrazeo-blue hover:bg-gray-100 px-8 py-6 h-auto text-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
