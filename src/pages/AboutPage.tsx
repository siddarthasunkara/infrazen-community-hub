
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-infrazen-blue text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            We Build the Tech, You Build the Legacy
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            InfraZen empowers real estate brands with their own tech platform — without hiring a tech team.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-infrazen-black">Our Mission</h2>
              <p className="text-lg text-infrazen-gray mb-6">
                We're on a mission to transform how real estate developers engage with their communities through technology, without losing their brand identity in the process.
              </p>
              <p className="text-lg text-infrazen-gray">
                By providing white-label, comprehensive digital infrastructure, we enable property developers to focus on what they do best—building exceptional living spaces—while we handle the digital experience.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <img 
                src="/placeholder.svg" 
                alt="Our Mission" 
                className="w-full rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-20">
            <div className="order-2 md:order-1 bg-gray-50 p-8 rounded-lg">
              <img 
                src="/placeholder.svg" 
                alt="Our Approach" 
                className="w-full rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-infrazen-black">Our Approach</h2>
              <p className="text-lg text-infrazen-gray mb-6">
                Unlike generic community apps, we believe in preserving and enhancing your brand identity. Our white-label platform becomes an extension of your real estate brand, not another third-party service.
              </p>
              <p className="text-lg text-infrazen-gray">
                We're a long-term technology partner focused on innovating alongside your business growth, continually adapting our platform to meet evolving community needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Core Values</h2>
          <p className="section-subtitle text-center">
            The principles that guide everything we do at InfraZen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-infrazen-black">Brand Empowerment</h3>
              <p className="text-infrazen-gray">
                We believe your digital platform should strengthen your brand, not replace it. Every solution we build puts your identity at the forefront.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-infrazen-black">Technological Excellence</h3>
              <p className="text-infrazen-gray">
                We maintain the highest standards of security, performance, and innovation in everything we build, ensuring reliable and future-proof solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-infrazen-black">Partnership Mindset</h3>
              <p className="text-infrazen-gray">
                We don't just provide a service; we build lasting relationships with our clients, becoming an extension of their team and vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Experience Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Expertise</h2>
          <p className="section-subtitle text-center">
            Backed by years of experience in real estate technology and community management.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-infrazen-black">Real Estate Technology Specialists</h3>
              <p className="text-infrazen-gray mb-6">
                Our team combines deep expertise in property technology with practical experience in community management systems. We understand both the technical challenges and business needs of modern real estate development.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-infrazen-blue font-bold mr-2">•</span>
                  <span className="text-infrazen-gray">Custom property management solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-infrazen-blue font-bold mr-2">•</span>
                  <span className="text-infrazen-gray">Secure payment and access control systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-infrazen-blue font-bold mr-2">•</span>
                  <span className="text-infrazen-gray">Scalable cloud architecture for growing communities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-infrazen-black">Client Success Focus</h3>
              <p className="text-infrazen-gray mb-6">
                Our success is measured by your success. We maintain a relentless focus on delivering solutions that create real business value and enhance resident satisfaction.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-infrazen-blue font-bold mr-2">•</span>
                  <span className="text-infrazen-gray">Dedicated implementation managers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-infrazen-blue font-bold mr-2">•</span>
                  <span className="text-infrazen-gray">Ongoing platform optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-infrazen-blue font-bold mr-2">•</span>
                  <span className="text-infrazen-gray">Regular business impact assessments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-infrazen-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Partner with InfraZen</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to elevate your community experience with a custom-branded digital platform?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book-demo">
              <Button className="bg-white text-infrazen-blue hover:bg-gray-100 px-8 py-6 h-auto text-lg">
                Book a Demo
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 h-auto text-lg">
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
