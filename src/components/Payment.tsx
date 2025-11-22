import { useState } from 'react';
import { motion } from 'motion/react';
import { CreditCard, Calculator, CheckCircle2, AlertCircle, IndianRupee, Calendar } from 'lucide-react';

export function Payment() {
  const [selectedClass, setSelectedClass] = useState('1-5');
  const [paymentMode, setPaymentMode] = useState<'monthly' | 'yearly'>('monthly');
  const [includeAdmit, setIncludeAdmit] = useState(true);

  const feeStructure = {
    '1-5': { monthly: 2500, yearly: 20000 },
    '6-8': { monthly: 3000, yearly: 25000 },
    '9-10': { monthly: 4000, yearly: 30000 },
    '11-12': { monthly: 4000, yearly: 30000 },
  };

  const admitFee = 2000;

  const calculateTotal = () => {
    const classKey = selectedClass as keyof typeof feeStructure;
    const baseFee = feeStructure[classKey][paymentMode];
    return includeAdmit ? baseFee + admitFee : baseFee;
  };

  const classOptions = [
    { value: '1-5', label: 'Classes 1-5', color: 'from-blue-500 to-cyan-500' },
    { value: '6-8', label: 'Classes 6-8', color: 'from-purple-500 to-pink-500' },
    { value: '9-10', label: 'Classes 9-10', color: 'from-orange-500 to-red-500' },
    { value: '11-12', label: 'Classes 11-12', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <div className="relative pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-3 mb-6">
              <CreditCard className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-blue-300">Fee Structure & Payment</span>
            </div>
            <h1 className="text-4xl lg:text-6xl text-white mb-6">
              Transparent <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Affordable quality education with flexible payment options
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Fee Calculator */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 lg:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl text-white">Fee Calculator</h2>
                </div>

                {/* Class Selection */}
                <div className="mb-8">
                  <label className="text-white mb-4 block">Select Class</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {classOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setSelectedClass(option.value)}
                        className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                          selectedClass === option.value
                            ? `border-blue-500 bg-gradient-to-r ${option.color} bg-opacity-10`
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                      >
                        <div className="text-white">{option.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Payment Mode */}
                <div className="mb-8">
                  <label className="text-white mb-4 block">Payment Mode</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setPaymentMode('monthly')}
                      className={`relative p-6 rounded-xl border-2 transition-all duration-300 ${
                        paymentMode === 'monthly'
                          ? 'border-blue-500 bg-blue-500/10'
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <Calendar className="w-8 h-8 text-blue-400 mb-2" />
                      <div className="text-white mb-1">Monthly</div>
                      <div className="text-sm text-gray-400">Pay every month</div>
                    </button>
                    <button
                      onClick={() => setPaymentMode('yearly')}
                      className={`relative p-6 rounded-xl border-2 transition-all duration-300 ${
                        paymentMode === 'yearly'
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <Calendar className="w-8 h-8 text-purple-400 mb-2" />
                      <div className="text-white mb-1">Yearly</div>
                      <div className="text-sm text-gray-400">Save with yearly plan</div>
                    </button>
                  </div>
                </div>

                {/* Admit Fee */}
                <div className="mb-8">
                  <label className="flex items-center space-x-3 cursor-pointer bg-gray-800/50 p-4 rounded-xl hover:bg-gray-800 transition-colors">
                    <input
                      type="checkbox"
                      checked={includeAdmit}
                      onChange={(e) => setIncludeAdmit(e.target.checked)}
                      className="w-5 h-5 rounded border-gray-600 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-900"
                    />
                    <div className="flex-1">
                      <span className="text-white">Include Admit Fee (One-time)</span>
                      <div className="text-sm text-gray-400">₹2,000</div>
                    </div>
                    <div className="text-blue-400">₹2,000</div>
                  </label>
                </div>

                {/* Breakdown */}
                <div className="bg-gray-800/50 rounded-2xl p-6 space-y-4 mb-8">
                  <h3 className="text-white">Payment Breakdown</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-gray-300">
                      <span>Tuition Fee ({paymentMode})</span>
                      <span className="flex items-center">
                        <IndianRupee className="w-4 h-4" />
                        {feeStructure[selectedClass as keyof typeof feeStructure][paymentMode].toLocaleString()}
                      </span>
                    </div>
                    {includeAdmit && (
                      <div className="flex items-center justify-between text-gray-300">
                        <span>Admit Fee (one-time)</span>
                        <span className="flex items-center">
                          <IndianRupee className="w-4 h-4" />
                          {admitFee.toLocaleString()}
                        </span>
                      </div>
                    )}
                    <div className="border-t border-gray-700 pt-3">
                      <div className="flex items-center justify-between text-white text-xl">
                        <span>Total Amount</span>
                        <span className="flex items-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          <IndianRupee className="w-5 h-5 text-blue-400" />
                          {calculateTotal().toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Alert */}
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-8 flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-blue-300 mb-1">Special Offers</div>
                    <div className="text-sm text-gray-400">
                      • Fees are negotiable for online-only students<br />
                      • Sibling discounts available<br />
                      • Monthly installment options available
                    </div>
                  </div>
                </div>

                {/* Razorpay Integration Placeholder */}
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      alert('Razorpay integration will be added here. Total amount: ₹' + calculateTotal().toLocaleString());
                    }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/50 hover:scale-105 text-white flex items-center justify-center space-x-2"
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>Proceed to Payment</span>
                  </button>

                  <div className="text-center text-sm text-gray-400">
                    {/* Razorpay script will be integrated here */}
                    Secure payment powered by Razorpay
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Fee Structure Summary */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-6">
              {/* Quick Reference */}
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>

                <h3 className="text-2xl text-white mb-6">Quick Reference</h3>

                <div className="space-y-4">
                  {[
                    { class: 'Classes 1-5', monthly: '₹2,500', yearly: '₹20,000', color: 'from-blue-500 to-cyan-500' },
                    { class: 'Classes 6-8', monthly: '₹3,000', yearly: '₹25,000', color: 'from-purple-500 to-pink-500' },
                    { class: 'Classes 9-10', monthly: '₹4,000', yearly: '₹30,000', color: 'from-orange-500 to-red-500' },
                    { class: 'Classes 11-12', monthly: '₹4,000', yearly: '₹30,000', color: 'from-green-500 to-emerald-500' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-xl p-4 space-y-2">
                      <div className={`text-white mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.class}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Monthly:</span>
                        <span className="text-gray-300">{item.monthly}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Yearly:</span>
                        <span className="text-gray-300">{item.yearly}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-4">
                    <div className="text-white mb-2">Admit Fee</div>
                    <div className="text-2xl text-blue-400">₹2,000</div>
                    <div className="text-xs text-gray-400 mt-1">One-time payment</div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8">
                <h3 className="text-xl text-white mb-4">Payment Benefits</h3>
                <ul className="space-y-3">
                  {[
                    'Multiple payment options',
                    'Secure payment gateway',
                    'Instant confirmation',
                    'Email receipts',
                    'Refund policy available',
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Razorpay Integration Instructions */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8">
            <h3 className="text-2xl text-white mb-4">Razorpay Integration Guide</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 mb-4">
                To integrate Razorpay payment gateway, add the following script to your HTML:
              </p>
              <div className="bg-gray-950 rounded-xl p-6 overflow-x-auto">
                <pre className="text-sm text-green-400">
{`<script src="https://checkout.razorpay.com/v1/checkout.js"></script>

<script>
  var options = {
    "key": "YOUR_RAZORPAY_KEY_ID",
    "amount": ${calculateTotal() * 100}, // Amount in paise
    "currency": "INR",
    "name": "Upadhyaya Tutorials",
    "description": "Course Fee Payment",
    "image": "your-logo-url",
    "handler": function (response) {
      alert("Payment successful: " + response.razorpay_payment_id);
      // Handle success - save payment details, show confirmation
    },
    "prefill": {
      "name": "Student Name",
      "email": "student@example.com",
      "contact": "9999999999"
    },
    "theme": {
      "color": "#3B82F6"
    }
  };
  
  var rzp = new Razorpay(options);
  rzp.open();
</script>`}
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}