
import { useState } from 'react';
import { Upload, User, School, CreditCard, FileCheck } from 'lucide-react';
import Header from '@/components/Header';

const Apply = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    
    // Student Info
    studentId: '',
    institutionName: '',
    institutionType: '',
    course: '',
    year: '',
    
    // Pass Selection
    passType: '',
    startDate: '',
    
    // Documents
    studentIdCard: null,
    photo: null,
    addressProof: null
  });

  const steps = [
    { number: 1, title: 'Personal Info', icon: User },
    { number: 2, title: 'Student Details', icon: School },
    { number: 3, title: 'Pass Selection', icon: FileCheck },
    { number: 4, title: 'Documents', icon: Upload },
    { number: 5, title: 'Payment', icon: CreditCard }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getFemaleDiscountPrice = (originalPrice: number) => {
    return formData.gender === 'female' ? originalPrice * 0.75 : originalPrice;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Apply for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Bus Pass</span>
          </h1>
          <p className="text-lg text-gray-600">
            Quick and easy application process. Get your pass in just 5 simple steps!
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${
                  step.number <= currentStep 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'border-gray-300 text-gray-500'
                }`}>
                  {step.number < currentStep ? (
                    <FileCheck className="h-6 w-6" />
                  ) : (
                    <step.icon className="h-6 w-6" />
                  )}
                </div>
                <div className="ml-3 hidden sm:block">
                  <p className={`text-sm font-medium ${
                    step.number <= currentStep ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    Step {step.number}
                  </p>
                  <p className={`text-xs ${
                    step.number <= currentStep ? 'text-blue-500' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 ${
                    step.number < currentStep ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Step 1: Personal Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {formData.gender === 'female' && (
                    <p className="mt-2 text-sm text-pink-600 font-medium">
                      🎉 You're eligible for 25% special discount!
                    </p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your complete address"
                />
              </div>
            </div>
          )}

          {/* Step 2: Student Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Student ID Number *</label>
                  <input
                    type="text"
                    value={formData.studentId}
                    onChange={(e) => handleInputChange('studentId', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your student ID"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Institution Type *</label>
                  <select
                    value={formData.institutionType}
                    onChange={(e) => handleInputChange('institutionType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Type</option>
                    <option value="school">School</option>
                    <option value="college">College</option>
                    <option value="university">University</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Institution Name *</label>
                  <input
                    type="text"
                    value={formData.institutionName}
                    onChange={(e) => handleInputChange('institutionName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your school/college name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Course/Stream *</label>
                  <input
                    type="text"
                    value={formData.course}
                    onChange={(e) => handleInputChange('course', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Engineering, Arts, Science"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Year/Class *</label>
                  <input
                    type="text"
                    value={formData.year}
                    onChange={(e) => handleInputChange('year', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 1st Year, Class 12"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Pass Selection */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Pass</h2>
              
              <div className="space-y-4">
                {[
                  { type: 'monthly', name: 'Monthly Pass', price: 1000, duration: '30 days' },
                  { type: 'semester', name: 'Semester Pass', price: 5000, duration: '6 months' },
                  { type: 'annual', name: 'Annual Pass', price: 8000, duration: '12 months' }
                ].map((pass) => {
                  const discountedPrice = getFemaleDiscountPrice(pass.price);
                  const isSelected = formData.passType === pass.type;
                  
                  return (
                    <div
                      key={pass.type}
                      onClick={() => handleInputChange('passType', pass.type)}
                      className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${
                        isSelected 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{pass.name}</h3>
                          <p className="text-gray-600">Valid for {pass.duration}</p>
                        </div>
                        <div className="text-right">
                          {formData.gender === 'female' && discountedPrice < pass.price ? (
                            <div>
                              <div className="text-lg line-through text-gray-400">₹{pass.price}</div>
                              <div className="text-2xl font-bold text-pink-600">₹{discountedPrice}</div>
                              <div className="text-sm text-pink-600">25% OFF!</div>
                            </div>
                          ) : (
                            <div className="text-2xl font-bold text-gray-900">₹{pass.price}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pass Start Date *</label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Step 4: Documents */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Documents</h2>
              
              <div className="space-y-6">
                {[
                  { key: 'studentIdCard', label: 'Student ID Card', required: true },
                  { key: 'photo', label: 'Passport Size Photo', required: true },
                  { key: 'addressProof', label: 'Address Proof', required: true }
                ].map((doc) => (
                  <div key={doc.key}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {doc.label} {doc.required && '*'}
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">PNG, JPG, PDF up to 5MB</p>
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            setFormData(prev => ({ ...prev, [doc.key]: e.target.files?.[0] || null }));
                          }
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Payment */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Summary</h2>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Pass Type:</span>
                    <span className="font-medium text-gray-900">
                      {formData.passType ? formData.passType.charAt(0).toUpperCase() + formData.passType.slice(1) : 'Not selected'} Pass
                    </span>
                  </div>
                  
                  {formData.gender === 'female' && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Original Price:</span>
                        <span className="line-through text-gray-500">
                          ₹{formData.passType === 'monthly' ? 1000 : formData.passType === 'semester' ? 5000 : 8000}
                        </span>
                      </div>
                      <div className="flex justify-between text-pink-600">
                        <span>Female Student Discount (25%):</span>
                        <span>-₹{formData.passType === 'monthly' ? 250 : formData.passType === 'semester' ? 1250 : 2000}</span>
                      </div>
                    </>
                  )}
                  
                  <hr className="my-3" />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Amount:</span>
                    <span className="text-blue-600">
                      ₹{getFemaleDiscountPrice(
                        formData.passType === 'monthly' ? 1000 : 
                        formData.passType === 'semester' ? 5000 : 
                        formData.passType === 'annual' ? 8000 : 0
                      )}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Payment Method</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['UPI', 'Card', 'Net Banking'].map((method) => (
                    <div key={method} className="border border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 cursor-pointer transition-colors">
                      <CreditCard className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                      <span className="text-sm font-medium text-gray-900">{method}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-8 border-t border-gray-200">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>
            
            <button
              onClick={currentStep === 5 ? () => alert('Application submitted!') : handleNext}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              {currentStep === 5 ? 'Submit Application' : 'Next Step'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
