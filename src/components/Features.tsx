
import { Shield, Clock, CreditCard, Users, MapPin, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: 'Special Female Discount',
      description: 'Get 25% extra discount on all bus passes. Promoting safe and affordable travel for female students.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Shield,
      title: 'Verified Students Only',
      description: 'All passes are issued after proper student ID verification for enhanced security and authenticity.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Clock,
      title: 'Flexible Validity',
      description: 'Choose from monthly, semester, or annual passes based on your academic schedule and budget.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: CreditCard,
      title: 'Easy Payment',
      description: 'Multiple payment options including UPI, cards, and net banking for convenient transactions.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: MapPin,
      title: 'All Routes Covered',
      description: 'Access to all city bus routes connecting schools, colleges, and residential areas.',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join a community of thousands of students using smart transportation solutions.',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">StudentPass?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're committed to making student transportation affordable, safe, and convenient in tier 2 & 3 cities across India.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Students</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Cities</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Bus Routes</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25%</div>
              <div className="text-blue-100">Female Discount</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
