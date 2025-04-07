
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  UserCheck, 
  CreditCard, 
  Bell, 
  Users, 
  BarChart4 
} from "lucide-react";

const SolutionsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-infrazen-blue text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Modules Tailored to Community Living
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive suite of tools designed specifically for modern residential communities and their unique operational needs.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Solution 1 */}
            <div className="feature-card">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Wrench className="text-infrazen-blue h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-infrazen-black">Complaint Management</h3>
              </div>
              <p className="text-infrazen-gray mb-4">
                Simple ticketing for resident issues with automated tracking, assignment, and resolution workflows.
              </p>
              <ul className="space-y-2 text-infrazen-gray mb-6">
                <li className="flex items-center">
                  <span className="text-infrazen-blue mr-2">•</span>
                  Categorized complaint submission
                </li>
                <li className="flex items-center">
                  <span className="text-infrazen-blue mr-2">•</span>
                  Real-time status updates
                </li>
                <li className="flex items-center">
                  <span className="text-infrazen-blue mr-2">•</span>
                  Satisfaction rating system
                </li>
              </ul>
              <img 
                src="/placeholder.svg" 
                alt="Complaint Management" 
                className="rounded-lg w-full h-40 object-cover" 
              />
            </div>

            {/* Solution 2 */}
            <div className="feature-card">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <UserCheck className="text-infrazen-blue h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-infrazen-black">Visitor & Security Log</h3>
              </div>
              <p className="text-infrazen-gray mb-4">
                Digital gate pass & entry logging system with advanced security features and visitor verification.
              </p>
              <ul className="space-y-2 text-infrazen-gray mb-6">
                <li className="flex items-center">
                  <span className="text-infrazen-blue mr-2">•</span>
                  Pre-approved visitor management
                </li>
                <li className="flex items-center">
                  <span className="text-infrazen-blue mr-2">•</span>
                  QR code based entry passes
                </li>
                <li className="flex items-center">
                  <span className="text-infrazen-blue mr-2">•</span>
                  Complete entry/exit records
                </li>
              </ul>
              <img 
                src="/placeholder.svg" 
                alt="Visitor Management" 
                className="rounded-lg w-full h-40 object-cover" 
              />
            </div>

            {/* Solution 3 */}
            <div className="feature-card">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <CreditCard className="text-infrazen-blue h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-infrazen-black">Digital Billing & Payments</h3>
              </div>
              <p className="text-infrazen-gray mb-4">
                Society dues & payment history with multiple payment options and automated reminders.
              </p>
              <ul className="space-y-2 text-infrazen-gray mb-6">
                <li className="flex items-center">
                  <span className="text-infrazen-blue mr-2">•</span>
                  Recurring payment setup
                </li>
                <li className="flex items-center">
                  <span className="text-infrazen-blue mr-2">•</span>
                  Digital receipts and invoices
                </li>
                <li className="flex items-center">
                  <span className="text-infrazen-blue mr-2">•</span>
                  Payment history analytics
                </li>
              </ul>
              <img 
                src="/placeholder.svg" 
                alt="Digital Billing" 
                className="rounded-lg w-full h-40 object-cover" 
              />
            </div>

            {/* Solution 4 */}
            <div className="feature-card">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Bell className="text-infrazen-blue h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-infrazen-black">Announcements & Notices</h3>
              </div>
              <p className="text-infrazen-gray mb-4">
                Broadcast updates via app with targeted messaging capabilities and delivery confirmation.
              </p>
              <ul className="space-y-2 text-infrazen-gray mb-6">
                <li className="flex items-center">
                  <span className="text-infrazen-blue mr-2">•</span>
                  Scheduled announcements
                </li>
                <li className="flex items-center">
                  <span className="text-infrazen-blue mr-2">•</span>
                  Emergency notifications
                </li>
                <li className="flex items-center">
                  <span className="text-infrazen-blue mr-2">•</span>
                  Read receipt tracking
                </li>
              </ul>
              <img 
                src="/placeholder.svg" 
                alt="Announcements" 
                className="rounded-lg w-full h-40 object-cover" 
              />
            </div>

            {/* Solution 5 */}
            <div className="feature-card">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Users className="text-infrazen-blue h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-infrazen-black">Resident Directory</h3>
              </div>
              <p className="text-infrazen-gray mb-4">
                Verified digital resident records with privacy controls and community networking features.
              </p>
              <ul className="space-y-2 text-infrazen-gray mb-6">
                <li className="flex items-center">
                  <span className="text-infrazen-blue mr-2">•</span>
                  Digital ID verification
                </li>
                <li className="flex items-center">
                  <span className="text-infrazen-blue mr-2">•</span>
                  Privacy-first design
                </li>
                <li className="flex items-center">
                  <span className="text-infrazen-blue mr-2">•</span>
                  Emergency contact system
                </li>
              </ul>
              <img 
                src="/placeholder.svg" 
                alt="Resident Directory" 
                className="rounded-lg w-full h-40 object-cover" 
              />
            </div>

            {/* Solution 6 */}
            <div className="feature-card">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <BarChart4 className="text-infrazen-blue h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-infrazen-black">Admin Dashboard</h3>
              </div>
              <p className="text-infrazen-gray mb-4">
                Data-rich, permission-based controls for community managers with comprehensive analytics.
              </p>
              <ul className="space-y-2 text-infrazen-gray mb-6">
                <li className="flex items-center">
                  <span className="text-infrazen-blue mr-2">•</span>
                  Role-based access control
                </li>
                <li className="flex items-center">
                  <span className="text-infrazen-blue mr-2">•</span>
                  Real-time community insights
                </li>
                <li className="flex items-center">
                  <span className="text-infrazen-blue mr-2">•</span>
                  Customizable reporting
                </li>
              </ul>
              <img 
                src="/placeholder.svg" 
                alt="Admin Dashboard" 
                className="rounded-lg w-full h-40 object-cover" 
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-infrazen-black">
              Ready to transform your community management?
            </h2>
            <p className="text-xl text-infrazen-gray mb-8 max-w-2xl mx-auto">
              See how these solutions can be customized to fit your specific property needs.
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

export default SolutionsPage;
