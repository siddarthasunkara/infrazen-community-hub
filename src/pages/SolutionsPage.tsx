
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  UserCheck, 
  CreditCard, 
  Bell, 
  Users, 
  BarChart4,
  Calendar,
  FileText 
} from "lucide-react";
import { observeElements } from "@/utils/animations";

const SolutionsPage = () => {
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
            Powerful Modules Tailored to Community Living
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto fade-in-element">
            Comprehensive suite of tools designed specifically for modern residential communities and their unique operational needs.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Solution 1 */}
            <div className="feature-card fade-in-element">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Wrench className="text-infrazeo-blue h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-infrazeo-black font-poppins">Complaint Management</h3>
              </div>
              <p className="text-infrazeo-gray mb-4">
                Simple ticketing for resident issues with automated tracking and resolution workflows.
              </p>
            </div>

            {/* Solution 2 */}
            <div className="feature-card fade-in-element">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <UserCheck className="text-infrazeo-blue h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-infrazeo-black font-poppins">Visitor & Gate Log</h3>
              </div>
              <p className="text-infrazeo-gray mb-4">
                Digital gate pass & entry logging system with advanced security features and visitor verification.
              </p>
            </div>

            {/* Solution 3 */}
            <div className="feature-card fade-in-element">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <CreditCard className="text-infrazeo-blue h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-infrazeo-black font-poppins">Digital Billing & Payments</h3>
              </div>
              <p className="text-infrazeo-gray mb-4">
                Society dues & payment history with multiple payment options and automated reminders.
              </p>
            </div>

            {/* Solution 4 */}
            <div className="feature-card fade-in-element">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Bell className="text-infrazeo-blue h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-infrazeo-black font-poppins">Announcements & Notices</h3>
              </div>
              <p className="text-infrazeo-gray mb-4">
                Broadcast updates via app with targeted messaging capabilities and delivery confirmation.
              </p>
            </div>

            {/* Solution 5 */}
            <div className="feature-card fade-in-element">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Users className="text-infrazeo-blue h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-infrazeo-black font-poppins">Resident Directory</h3>
              </div>
              <p className="text-infrazeo-gray mb-4">
                Verified digital resident records with privacy controls and community networking features.
              </p>
            </div>

            {/* Solution 6 */}
            <div className="feature-card fade-in-element">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <BarChart4 className="text-infrazeo-blue h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-infrazeo-black font-poppins">Admin Dashboard</h3>
              </div>
              <p className="text-infrazeo-gray mb-4">
                Data-rich, permission-based controls for community managers with comprehensive analytics.
              </p>
            </div>

            {/* Solution 7 */}
            <div className="feature-card fade-in-element">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Calendar className="text-infrazeo-blue h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-infrazeo-black font-poppins">Community Polls & Events</h3>
              </div>
              <p className="text-infrazeo-gray mb-4">
                Schedule and manage community events with RSVP tracking, and gather resident feedback through polls.
              </p>
            </div>

            {/* Solution 8 */}
            <div className="feature-card fade-in-element">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FileText className="text-infrazeo-blue h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-infrazeo-black font-poppins">Document Repository</h3>
              </div>
              <p className="text-infrazeo-gray mb-4">
                Centralized storage for society documents, bylaws, and important notices with access controls.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-infrazeo-black font-poppins fade-in-element">
              Ready to transform your community management?
            </h2>
            <p className="text-xl text-infrazeo-gray mb-8 max-w-2xl mx-auto fade-in-element">
              See how these solutions can be customized to fit your specific property needs.
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

export default SolutionsPage;
