
import { Heart, Shield, Users, MapPin, Phone, Mail } from 'lucide-react';
import Header from '@/components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">StudentPass</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering students in tier 2 & 3 cities with affordable, safe, and convenient transportation solutions. 
            We believe every student deserves access to quality education without transportation barriers.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              To make quality education accessible by providing affordable and reliable transportation 
              solutions for students across India's growing cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Accessibility</h3>
              <p className="text-gray-600">Making transportation affordable for all students, regardless of economic background.</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safety</h3>
              <p className="text-gray-600">Ensuring safe and secure travel for all students, especially female students.</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Empowerment</h3>
              <p className="text-gray-600">Special focus on empowering female students through additional discounts and support.</p>
            </div>
          </div>
        </div>

        {/* Why Female Discount Section */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl shadow-xl p-12 mb-16 text-white">
          <div className="text-center mb-8">
            <Heart className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Why 25% Special Discount for Female Students?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4">Promoting Gender Equality in Education</h3>
              <ul className="space-y-3 text-pink-100">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Reducing financial barriers for female students and their families</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Encouraging more girls to pursue higher education in tier 2 & 3 cities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Supporting families who prioritize education for all children</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Creating a safer, more comfortable travel environment</span>
                </li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-20 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Impact So Far</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold">15K+</div>
                  <div className="text-pink-100">Female Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">₹50L+</div>
                  <div className="text-pink-100">Savings Generated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">85%</div>
                  <div className="text-pink-100">Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">60+</div>
                  <div className="text-pink-100">Cities Covered</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Section */}
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-16">
          <div className="text-center mb-12">
            <MapPin className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Coverage</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Currently serving students across tier 2 & 3 cities with plans to expand nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-700">Cities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-700">Bus Routes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-700">Active Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-2">1000+</div>
              <div className="text-gray-700">Partner Institutes</div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-xl p-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Have questions or need support? Our team is here to help you navigate your student transportation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Phone Support</h3>
              <p className="text-blue-100">1800-123-PASS</p>
              <p className="text-blue-100 text-sm">Mon-Sat 9AM-6PM</p>
            </div>

            <div>
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Email Support</h3>
              <p className="text-blue-100">support@studentpass.in</p>
              <p className="text-blue-100 text-sm">24/7 Response</p>
            </div>

            <div>
              <Users className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Community</h3>
              <p className="text-blue-100">Join our WhatsApp groups</p>
              <p className="text-blue-100 text-sm">City-wise support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
