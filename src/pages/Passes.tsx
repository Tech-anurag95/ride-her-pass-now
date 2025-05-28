
import { Check, ArrowRight, Crown, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const Passes = () => {
  const passes = [
    {
      name: 'Monthly Pass',
      description: 'Perfect for short-term needs',
      price: 1000,
      femalePrice: 750,
      duration: '30 days',
      features: [
        'Unlimited rides on all routes',
        'Valid for 1 month',
        'Student ID verification required',
        'Mobile pass with QR code',
        'Customer support'
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Semester Pass',
      description: 'Most popular among students',
      price: 5000,
      femalePrice: 3750,
      duration: '6 months',
      features: [
        'Unlimited rides on all routes',
        'Valid for 6 months',
        'Student ID verification required',
        'Mobile pass with QR code',
        'Priority customer support',
        'Free pass replacement',
        'Academic calendar sync'
      ],
      popular: true,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Annual Pass',
      description: 'Best value for money',
      price: 8000,
      femalePrice: 6000,
      duration: '12 months',
      features: [
        'Unlimited rides on all routes',
        'Valid for 1 full year',
        'Student ID verification required',
        'Mobile pass with QR code',
        'VIP customer support',
        'Free pass replacement',
        'Academic calendar sync',
        'Special discounts on renewals',
        'Guest pass benefits'
      ],
      popular: false,
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Perfect Pass</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Flexible bus pass options designed for students in tier 2 & 3 cities. 
            <span className="font-semibold text-pink-600"> Female students get 25% extra discount on all passes!</span>
          </p>
          
          {/* Female discount banner */}
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Crown className="h-6 w-6" />
              <span className="font-bold text-lg">Special Female Discount</span>
            </div>
            <p className="text-pink-100">Save 25% extra on all bus passes! Empowering education through affordable transportation.</p>
          </div>
        </div>

        {/* Passes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {passes.map((pass, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden ${
                pass.popular ? 'ring-4 ring-purple-500 ring-opacity-50 scale-105' : ''
              } hover:shadow-2xl transition-all duration-300`}
            >
              {/* Popular badge */}
              {pass.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pass.name}</h3>
                  <p className="text-gray-600 mb-4">{pass.description}</p>
                  
                  {/* Pricing */}
                  <div className="space-y-2">
                    <div className="text-center">
                      <span className="text-3xl font-bold text-gray-900">₹{pass.price}</span>
                      <span className="text-gray-500 ml-1">/{pass.duration}</span>
                    </div>
                    <div className="bg-pink-50 border border-pink-200 rounded-lg p-3">
                      <div className="text-sm text-pink-700 font-medium mb-1">Female Student Price:</div>
                      <div className="text-2xl font-bold text-pink-600">₹{pass.femalePrice}</div>
                      <div className="text-xs text-pink-600">Save ₹{pass.price - pass.femalePrice}!</div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {pass.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${pass.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to="/apply"
                  className={`w-full bg-gradient-to-r ${pass.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2 group`}
                >
                  <span>Choose This Pass</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help Choosing?</h3>
            <p className="text-gray-700 mb-6">
              Our team is here to help you select the best pass for your needs. Contact us for personalized recommendations based on your travel patterns and academic schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Support
              </button>
              <Link to="/about" className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passes;
