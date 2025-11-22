import { motion } from 'motion/react';
import { BookOpen, Users, Globe, CheckCircle2, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Courses() {
  const navigate = useNavigate();

  const courses = [
    {
      grade: 'Classes 1–5',
      title: 'Foundation Building',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi/Kannada'],
      features: [
        'Fun and interactive learning',
        'Building strong basics',
        'Activity-based teaching',
        'Regular assessments',
      ],
      fee: '₹2,500/month',
      color: 'from-blue-500 to-cyan-500',
      icon: '🌱',
    },
    {
      grade: 'Classes 6–8',
      title: 'Skill Development',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi/Kannada'],
      features: [
        'Conceptual understanding',
        'Problem-solving skills',
        'Project-based learning',
        'Exam preparation',
      ],
      fee: '₹3,000/month',
      color: 'from-purple-500 to-pink-500',
      icon: '📚',
    },
    {
      grade: 'Classes 9–10',
      title: 'Board Exam Mastery',
      subjects: ['English', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Studies'],
      features: [
        'Comprehensive board prep',
        'Previous year papers',
        'Mock tests',
        'Doubt clearing sessions',
      ],
      fee: '₹4,000/month',
      color: 'from-orange-500 to-red-500',
      icon: '🎯',
    },
    {
      grade: '11th & 12th (PUC)',
      title: 'Competitive Excellence',
      subjects: ['Physics', 'Mathematics', 'Chemistry', 'Biology', 'Commerce subjects'],
      features: [
        'JEE/NEET preparation',
        'Board + competitive focus',
        'Advanced problem solving',
        'Regular tests & analysis',
      ],
      fee: '₹4,000/month',
      color: 'from-green-500 to-emerald-500',
      icon: '🚀',
    },
  ];

  const modes = [
    {
      title: 'Online Classes',
      description: 'Live interactive sessions with screen sharing and digital whiteboard',
      features: ['Flexible timings', 'Recorded sessions', 'Digital study material', 'One-on-one doubt clearing'],
      icon: Globe,
    },
    {
      title: 'Offline Classes',
      description: 'In-person coaching at our Bengaluru center with personalized attention',
      features: ['Small batch sizes', 'Face-to-face interaction', 'Printed study material', 'Immediate feedback'],
      icon: Users,
    },
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
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-blue-300">Our Courses</span>
            </div>
            <h1 className="text-4xl lg:text-6xl text-white mb-6">
              Comprehensive <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Learning Programs</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From foundational learning to competitive exam preparation - we've got you covered
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="relative px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 overflow-hidden h-full">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  {/* Header */}
                  <div className="relative mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-5xl mb-3">{course.icon}</div>
                        <h3 className="text-2xl text-white mb-1">{course.grade}</h3>
                        <p className="text-gray-400">{course.title}</p>
                      </div>
                      <div className={`px-4 py-2 bg-gradient-to-r ${course.color} rounded-xl`}>
                        <div className="text-white">{course.fee}</div>
                      </div>
                    </div>
                  </div>

                  {/* Subjects */}
                  <div className="relative mb-6">
                    <h4 className="text-white mb-3 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                      Subjects Covered
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map((subject, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-800/70 border border-gray-700 rounded-full text-sm text-gray-300"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="relative mb-6">
                    <h4 className="text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 bg-gradient-to-r ${course.color} bg-clip-text text-transparent`} />
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => navigate('/payment')}
                    className={`relative w-full px-6 py-3 bg-gradient-to-r ${course.color} rounded-xl hover:scale-105 transition-transform duration-300 text-white shadow-lg`}
                  >
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Modes */}
      <section className="relative px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl text-white mb-4">
              Flexible <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Learning Modes</span>
            </h2>
            <p className="text-xl text-gray-400">Choose what works best for you</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modes.map((mode, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <mode.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl text-white mb-2">{mode.title}</h3>
                  <p className="text-gray-400">{mode.description}</p>
                </div>

                <ul className="space-y-3">
                  {mode.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 rounded-3xl p-1">
            <div className="relative bg-gray-900 rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Special Features */}
                <div>
                  <h3 className="text-2xl text-white mb-4">What's Included</h3>
                  <ul className="space-y-3">
                    {[
                      'Study materials and worksheets',
                      'Regular assessments and feedback',
                      'Parent-teacher meetings',
                      'Progress tracking and reports',
                      'Doubt clearing sessions',
                      'Exam strategy guidance',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fee Note */}
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <h3 className="text-2xl text-white mb-4">Fee Structure</h3>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      <span className="text-blue-400">Admit Fee:</span> ₹2,000 (one-time)
                    </p>
                    <p className="text-sm text-gray-400">
                      • Yearly fees available at discounted rates<br />
                      • Fees are negotiable for online-only students<br />
                      • Sibling discounts available
                    </p>
                    <button
                      onClick={() => navigate('/payment')}
                      className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg text-white mt-4"
                    >
                      View Complete Fee Structure
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}