
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { observeElements } from "@/utils/animations";

const AboutPage = () => {
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
            We Build the Tech, You Build the Legacy
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto fade-in-element">
            InfraZeo empowers real estate brands with their own tech platform — without hiring a tech team.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="fade-in-element">
              <h2 className="text-3xl font-bold mb-6 text-infrazeo-black font-poppins">Our Mission</h2>
              <p className="text-lg text-infrazeo-gray mb-6">
                At InfraZeo, we empower real estate developers with white-label digital infrastructure to manage communities at scale. 
                Our goal is simple — make modern living seamless for residents, and effortless for builders.
              </p>
              <p className="text-lg text-infrazeo-gray">
                By providing white-label, comprehensive digital infrastructure, we enable property developers to focus on what they do best—building exceptional living spaces—while we handle the digital experience.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md fade-in-element">
              <img 
                src="/placeholder.svg" 
                alt="Our Mission" 
                className="w-full rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-20">
            <div className="order-2 md:order-1 bg-gray-50 p-8 rounded-xl shadow-md fade-in-element">
              <img 
                src="/placeholder.svg" 
                alt="Our Approach" 
                className="w-full rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2 fade-in-element">
              <h2 className="text-3xl font-bold mb-6 text-infrazeo-black font-poppins">Our Approach</h2>
              <p className="text-lg text-infrazeo-gray mb-6">
                Unlike generic community apps, we believe in preserving and enhancing your brand identity. Our white-label platform becomes an extension of your real estate brand, not another third-party service.
              </p>
              <p className="text-lg text-infrazeo-gray">
                We're not just a SaaS company. We're your long-term innovation partner, focused on evolving alongside your business growth, continually adapting our platform to meet evolving community needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center fade-in-element">Our Core Values</h2>
          <p className="section-subtitle text-center fade-in-element">
            The principles that guide everything we do at InfraZeo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] fade-in-element">
              <h3 className="text-2xl font-bold mb-4 text-infrazeo-black font-poppins">Brand Empowerment</h3>
              <p className="text-infrazeo-gray">
                We believe your digital platform should strengthen your brand, not replace it. Every solution we build puts your identity at the forefront.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] fade-in-element">
              <h3 className="text-2xl font-bold mb-4 text-infrazeo-black font-poppins">Technological Excellence</h3>
              <p className="text-infrazeo-gray">
                We maintain the highest standards of security, performance, and innovation in everything we build, ensuring reliable and future-proof solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] fade-in-element">
              <h3 className="text-2xl font-bold mb-4 text-infrazeo-black font-poppins">Partnership Mindset</h3>
              <p className="text-infrazeo-gray">
                We don't just provide a service; we build lasting relationships with our clients, becoming an extension of their team and vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 font-poppins fade-in-element">Partner with InfraZeo</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto fade-in-element">
            Ready to elevate your community experience with a custom-branded digital platform?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in-element">
            <Link to="/book-demo">
              <Button className="bg-white text-infrazeo-blue hover:bg-gray-100 px-8 py-6 h-auto text-lg rounded-full shadow-md">
                Book a Demo
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 h-auto text-lg rounded-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
