import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Award, Users, BookOpen, Target, Zap, Globe, CheckCircle2 } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Globe,
      title: 'Online + Offline',
      description: 'Flexible learning modes to suit your needs',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Personalized Coaching',
      description: 'Individual attention for every student',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Award,
      title: 'Experienced Faculty',
      description: '5+ years of teaching excellence',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Target,
      title: 'Result Oriented',
      description: 'Focused on academic excellence',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Classes Offered', value: '1-12' },
    { label: 'Success Rate', value: '100%' },
    { label: 'Learning Modes', value: '2' },
  ];

  const highlights = [
    'Expert teaching in Physics & Mathematics',
    'Comprehensive coverage of all subjects for Classes 1-12',
    'Small batch sizes for better interaction',
    'Regular tests and performance tracking',
    'Doubt clearing sessions',
    'Study materials provided',
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1690079374922-7f50d5c1a102?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZWR1Y2F0aW9uJTIwY2xhc3Nyb29tJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM1MzAxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/80 to-gray-950"></div>
        </motion.div>

        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full px-6 py-3 backdrop-blur-sm"
            >
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-blue-300">Quality Coaching for Classes 1–12</span>
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight"
            >
              <span className="block">Unleash Your</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                Academic Power
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Join <span className="text-blue-400">Upadhyaya Tutorials</span> and experience education
              that transforms students into toppers. Expert guidance by{' '}
              <span className="text-purple-400">Chandana Dayananda, M.Sc Physics</span>.
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={() => navigate('/payment')}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center space-x-2 text-white">
                  <span>Enroll Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => navigate('/courses')}
                className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-gray-800 hover:border-blue-500/50 transition-all duration-300"
              >
                View Courses
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-blue-500 rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl text-white mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Upadhyaya Tutorials</span>
            </h2>
            <p className="text-xl text-gray-400">Excellence in education, powered by experience</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  {/* Icon */}
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1760043186309-69c11f4c08ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNzJTIwc2NpZW5jZSUyMGFic3RyYWN0JTIwZGFya3xlbnwxfHx8fDE3NjM1MzE4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Physics Education"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 shadow-2xl shadow-blue-500/50">
                <div className="text-4xl text-white">5+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">What Makes Us Different</span>
              </div>

              <h2 className="text-4xl lg:text-5xl text-white">
                Transform Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Learning Journey</span>
              </h2>

              <p className="text-xl text-gray-400">
                Led by Chandana Dayananda (M.Sc Physics) with extensive experience from New Baldwin International School and Narayana Junior College.
              </p>

              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">{highlight}</span>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => navigate('/about')}
                className="group inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-gray-800 hover:border-blue-500/50 transition-all duration-300"
              >
                <span className="text-white">Learn More About Us</span>
                <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 rounded-3xl p-1 overflow-hidden">
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 animate-pulse"></div>

            {/* Content */}
            <div className="relative bg-gray-900 rounded-3xl p-12 text-center">
              <h2 className="text-4xl lg:text-5xl text-white mb-6">
                Ready to Excel in Your Studies?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of successful students who have transformed their academic journey with Upadhyaya Tutorials.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/50 hover:scale-105"
                >
                  Contact Us Today
                </button>
                <button
                  onClick={() => navigate('/payment')}
                  className="px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all duration-300"
                >
                  View Fee Structure
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
