
import { ArrowRight, Bus, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Bus Passes</span> for Students
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Affordable, convenient bus transportation for school and college students in tier 2 & 3 cities. 
              <span className="font-semibold text-pink-600"> Special 25% discount for female students!</span>
            </p>

            {/* Key benefits */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                <Bus className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">All Routes Covered</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">Student Verified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                <Heart className="h-5 w-5 text-pink-600" />
                <span className="text-sm font-medium">Female Friendly</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/apply"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Apply Now</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/passes"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
              >
                View Passes
              </Link>
            </div>
          </div>

          {/* Right content - Visual */}
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 mx-auto max-w-md">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                    <Bus className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Female Student Pass</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-1">₹750</div>
                  <div className="text-sm text-gray-500 line-through mb-2">₹1000</div>
                  <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    25% Discount
                  </div>
                  <div className="mt-4 space-y-2 text-left">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Valid for 1 month</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>All city routes</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Student ID verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium animate-bounce">
                🎓 For Students
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-medium animate-bounce delay-300">
                ✨ Safe & Secure
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
