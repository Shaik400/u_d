import { motion } from 'motion/react';
import { GraduationCap, Award, Target, Heart, BookOpen, Users } from 'lucide-react';

export function About() {
  const experience = [
    {
      year: '2020-2022',
      role: 'Physics Lecturer',
      institution: 'New Baldwin International School',
      description: 'Taught Physics to high school students with focus on conceptual understanding',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      year: '2022-Present',
      role: 'Physics & Maths Lecturer',
      institution: 'Narayana Junior College',
      description: 'Teaching PUC 1 & 2 students, preparing them for competitive exams',
      color: 'from-purple-500 to-pink-500',
    },
    {
      year: '2023-Present',
      role: 'Founder & Lead Tutor',
      institution: 'Upadhyaya Tutorials',
      description: 'Providing personalized coaching for Classes 1-12 in all subjects',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Every student has unique goals. We create personalized learning paths to help them achieve excellence.',
    },
    {
      icon: Heart,
      title: 'Passion for Teaching',
      description: 'Teaching is not just a profession for us, it\'s a calling. We love seeing our students succeed.',
    },
    {
      icon: BookOpen,
      title: 'Conceptual Learning',
      description: 'We focus on building strong foundations rather than rote learning. Understanding concepts is key.',
    },
    {
      icon: Users,
      title: 'Student-Centric',
      description: 'Small batch sizes ensure every student gets individual attention and their doubts are cleared.',
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
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-blue-300">About Us</span>
            </div>
            <h1 className="text-4xl lg:text-6xl text-white mb-6">
              Meet Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Educator</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate about transforming students into confident learners and achievers
            </p>
          </motion.div>

          {/* Tutor Profile */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 lg:p-12 overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

              <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Image */}
                <div className="lg:col-span-1">
                  <div className="relative w-64 h-64 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50"></div>
                    <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl overflow-hidden border-4 border-blue-500/30">
                      <GraduationCap className="w-32 h-32" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h2 className="text-3xl lg:text-4xl text-white mb-2">Chandana Dayananda</h2>
                    <div className="flex items-center space-x-2 text-blue-400">
                      <Award className="w-5 h-5" />
                      <span className="text-xl">M.Sc in Physics</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    With over 5 years of dedicated teaching experience in prestigious institutions, I bring a wealth of knowledge and a passion for making complex concepts simple and engaging. My journey in education has been driven by one goal: to empower every student to reach their full potential.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <div className="text-2xl text-blue-400 mb-1">5+</div>
                      <div className="text-sm text-gray-400">Years of Experience</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <div className="text-2xl text-purple-400 mb-1">100%</div>
                      <div className="text-sm text-gray-400">Student Satisfaction</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <div className="text-2xl text-orange-400 mb-1">2</div>
                      <div className="text-sm text-gray-400">Reputed Institutions</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <div className="text-2xl text-green-400 mb-1">1-12</div>
                      <div className="text-sm text-gray-400">Classes Covered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
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
              Professional <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-400">A timeline of dedication and excellence</p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  <div className="relative flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center`}>
                        <Award className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                        <h3 className="text-2xl text-white">{item.role}</h3>
                        <span className={`inline-block px-4 py-1 bg-gradient-to-r ${item.color} rounded-full text-white text-sm mt-2 lg:mt-0`}>
                          {item.year}
                        </span>
                      </div>
                      <div className="text-lg text-blue-400 mb-2">{item.institution}</div>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < experience.length - 1 && (
                  <div className="absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent -translate-x-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
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
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-400">The principles that guide our teaching</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 rounded-3xl p-1">
            <div className="relative bg-gray-900 rounded-3xl p-12">
              <div className="text-center space-y-6">
                <h2 className="text-4xl lg:text-5xl text-white">Our Mission</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  "At Upadhyaya Tutorials, we believe every student has the potential to excel. Our mission is to provide quality education that not only prepares students for exams but also instills in them a love for learning, critical thinking, and problem-solving skills that last a lifetime. We are committed to nurturing future leaders, innovators, and thinkers."
                </p>
                <div className="flex items-center justify-center space-x-4 pt-6">
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <GraduationCap className="w-8 h-8 text-blue-400" />
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
