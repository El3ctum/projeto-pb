import React from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/layouts/footer";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Quotation Management System</h1>
          <p className="text-lg text-gray-300 mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam illo quo molestias cum repellat ullam, iusto perspiciatis dolor fugiat, quas eius deleniti nostrum ratione ipsam consectetur neque odio praesentium et?</p>
          <div className="flex justify-center space-x-4">
            <Link to="/system/auth/login" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md">
              Get Started
            </Link>
            <Link to="/system/about" className="bg-gray-700 hover:bg-gray-800 text-white py-3 px-6 rounded-lg shadow-md">
              Learn More
            </Link>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Core</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <FeatureCard icon="📱" title="Mobile Compatible" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
          <FeatureCard icon="🔒" title="Secure Data" description="Vel mollitia repellat ullam aut ea accusantium ipsum, maxime illo officiis suscipit." />
          <FeatureCard icon="💬" title="24/7 Support" description="Inventore, placeat saepe!" />
        </div>
      </section>

      <section className="bg-gray-800 text-white py-12 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Start your trial today!</h2>
          <p className="text-lg text-gray-300 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum impedit ducimus porro maiores et praesentium quos doloribus fugit, minima ipsa consequuntur ex est accusantium deleniti architecto explicabo nisi voluptatibus consequatur.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md">
            Sign Up
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4 max-w-xs">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default LandingPage;
