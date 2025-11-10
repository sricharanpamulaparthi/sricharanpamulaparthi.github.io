import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function RentalManagementWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTenantOTP, setShowTenantOTP] = useState(false);
  const [showOwnerOTP, setShowOwnerOTP] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-800">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between bg-white shadow-md px-6 py-4 fixed top-0 w-full z-50">
        <h1 className="text-2xl font-bold text-sky-700">Rental Management</h1>
        <div className="hidden md:flex space-x-6 font-medium text-gray-700">
          <a href="#home" className="hover:text-sky-600">Home</a>
          <a href="#features" className="hover:text-sky-600">Features</a>
          <a href="#about" className="hover:text-sky-600">About</a>
          <a href="#contact" className="hover:text-sky-600">Contact</a>
          <a href="#login" className="hover:text-sky-600">Login</a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X className="w-6 h-6 text-sky-700" /> : <Menu className="w-6 h-6 text-sky-700" />}
        </button>
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
            <a href="#home" className="hover:text-sky-600" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#features" className="hover:text-sky-600" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#about" className="hover:text-sky-600" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" className="hover:text-sky-600" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href="#login" className="hover:text-sky-600" onClick={() => setMenuOpen(false)}>Login</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="text-center py-28 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-sky-700 mb-4"
        >
          Smart Rental & Maintenance Management Software
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-6">
          Simplify rent collection, utility tracking, and tenant communication for 650+ flats — all in one platform.
        </p>
        <div className="space-x-4">
          <Button className="bg-sky-600 text-white px-6 py-2 rounded-full">Get a Free Demo</Button>
          <Button variant="outline" className="border-sky-600 text-sky-600 px-6 py-2 rounded-full">Learn More</Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-sky-700 mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Rent Collection & Receipts",
              desc: "Automatic rent generation, instant digital receipts, and real-time tracking dashboard.",
            },
            {
              title: "Utility Bill Tracking",
              desc: "Monitor electricity, water, and maintenance bills with reminders and reports.",
            },
            {
              title: "Smart Reminders",
              desc: "Automatic alerts for due dates, rent payments, and maintenance schedules.",
            },
            {
              title: "Tenant & Owner Management",
              desc: "Manage secure profiles, KYC, agreements, and occupancy status easily.",
            },
            {
              title: "Dashboard & Reports",
              desc: "Transparent financial insights and exportable reports in PDF or Excel.",
            },
            {
              title: "Secure & Reliable",
              desc: "Role-based access, data encryption, and cloud backups for 24/7 availability.",
            },
          ].map((feature, index) => (
            <Card key={index} className="shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-sky-700 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-sky-50 text-center px-6 md:px-24">
        <h2 className="text-3xl font-bold text-sky-700 mb-6">About Our Software</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          Our platform helps apartment societies and property managers automate rent collection, track bills, manage tenants, and send smart reminders — making community management simple and efficient.
        </p>
        <Button className="bg-sky-600 text-white rounded-full px-8 py-2">Explore Features</Button>
      </section>

      {/* Login Section */}
      <section id="login" className="py-20 bg-white text-center px-6 md:px-24">
        <h2 className="text-3xl font-bold text-sky-700 mb-6">Login Portal</h2>
        <p className="text-gray-700 mb-8">Access your account securely as a Tenant or an Owner.</p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Tenant Login */}
          <Card className="w-full md:w-1/3 shadow-md hover:shadow-xl transition">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-sky-700 mb-4">Tenant Login</h3>
              <form className="space-y-4">
                <Input type="text" placeholder="Username" className="border-gray-300" />
                <Input type="password" placeholder="Password" className="border-gray-300" />
                {showTenantOTP && <Input type="text" placeholder="Enter OTP" className="border-gray-300" />}
                <Button className="bg-sky-600 text-white w-full">Login</Button>
                <div className="flex justify-between text-sm text-sky-600">
                  <button type="button" onClick={() => setShowTenantOTP(true)}>Login with OTP</button>
                  <a href="#" className="hover:underline">Forgot Password?</a>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Owner Login */}
          <Card className="w-full md:w-1/3 shadow-md hover:shadow-xl transition">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-sky-700 mb-4">Owner Login</h3>
              <form className="space-y-4">
                <Input type="text" placeholder="Username" className="border-gray-300" />
                <Input type="password" placeholder="Password" className="border-gray-300" />
                {showOwnerOTP && <Input type="text" placeholder="Enter OTP" className="border-gray-300" />}
                <Button className="bg-sky-600 text-white w-full">Login</Button>
                <div className="flex justify-between text-sm text-sky-600">
                  <button type="button" onClick={() => setShowOwnerOTP(true)}>Login with OTP</button>
                  <a href="#" className="hover:underline">Forgot Password?</a>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-sky-50 text-center px-6 md:px-24">
        <h2 className="text-3xl font-bold text-sky-700 mb-6">Get In Touch</h2>
        <p className="text-gray-700 mb-8">We’d love to show you how our software can simplify your apartment operations.</p>
        <div className="space-y-2">
          <p>📧 Email: info@rentalsystem.com</p>
          <p>📞 Phone: +91 98765 43210</p>
          <p>🏢 Address: Hyderabad, India</p>
        </div>
        <div className="mt-8">
          <Button className="bg-sky-600 text-white rounded-full px-8 py-2">Book a Demo</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-700 text-white text-center py-6 mt-10">
        <p>© 2025 Sri Industries Global Solutions. All Rights Reserved.</p>
        <div className="mt-2 space-x-4 text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#login" className="hover:underline">Login</a>
        </div>
      </footer>
    </div>
  );
}
