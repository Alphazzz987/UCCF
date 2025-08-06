import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Target, Rocket, Users, BookOpen, ArrowRight } from 'lucide-react';
import Footer from '../../components/Footer';
import { footerNavigation, contactInfo } from '../../data/mockData';

const About = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Project Expenses', 'Administrative Cost', 'Accumulation for Next Year', 'Depreciation'],
            datasets: [{
              data: [90, 7, 2.6, 0.4],
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0'
              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            animation: {
              animateScale: true,
              animateRotate: true,
              duration: 2000,
              easing: 'easeInOutQuart'
            }
          }
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Title Section */}
      <div 
        className="relative py-24 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://unweanedchildcarefoundation.org/wp-content/uploads/2021/12/page-title-bg.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">About Us</h1>
          <div className="flex items-center justify-center space-x-3">
            <a href="/" className="text-white hover:text-orange-500 transition-colors">Home</a>
            <ArrowRight className="text-orange-500 w-4 h-4" />
            <span className="text-orange-500">About</span>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-xl p-10 transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-2xl mr-6 shadow-lg">
                <Target size={36} className="text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Vision</h2>
                <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our vision is to provide support, build capacity and integrate individuals into mainstream society who have traditionally been suppressed in personal, social, economic and political domains.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                </div>
                <p className="ml-4 text-gray-600">Empowering underprivileged communities</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                </div>
                <p className="ml-4 text-gray-600">Building sustainable futures</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-10 transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-2xl mr-6 shadow-lg">
                <Rocket size={36} className="text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Mission</h2>
                <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              To deploy best possible methodology and technology for achieving ideal social return on investment, to practice and promote good governance.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                </div>
                <p className="ml-4 text-gray-600">Innovative solutions for social impact</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                </div>
                <p className="ml-4 text-gray-600">Transparent and effective governance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expenses Chart Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Fund Allocation</h2>
            <p className="text-gray-600">Transparency in how we utilize our resources to create maximum impact</p>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
            <canvas ref={chartRef}></canvas>
          </div>
        </div>
      </div>

      {/* Board Members Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Board</h2>
          <p className="text-gray-600">Led by experienced professionals dedicated to our mission</p>
        </div>
        <div className="flex justify-center">
          <div className="text-center max-w-lg">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transform rotate-6"></div>
              <img 
                src="https://unweanedchildcarefoundation.org/wp-content/uploads/2024/07/board.jpg"
                alt="Mr. Dayananda G R"
                className="relative w-48 h-48 object-cover rounded-full mx-auto mb-6 border-4 border-white shadow-xl"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Mr. Dayananda G R</h3>
            <p className="text-gray-600 leading-relaxed">
              Masters Of Business Management in LONDON, Company Secretary, and Qualified in Sports injury prevention and rehabilitation.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-gray-600">Dedicated professionals working towards positive change</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div className="relative">
                <img 
                  src="https://unweanedchildcarefoundation.org/wp-content/uploads/2025/01/suzen.jpg"
                  alt="Ms. Suzannah"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ms. Suzannah Pamela Wilson Lyngdoh</h3>
                <p className="text-gray-600">
                  Program Coordinator with 6 years of experience in making children smile.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
                  alt="Mr. Rahul Sharma"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mr. Rahul Sharma</h3>
                <p className="text-gray-600">
                  Education Program Director with 8 years of experience in curriculum development.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg"
                  alt="Ms. Priya Patel"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ms. Priya Patel</h3>
                <p className="text-gray-600">
                  Community Outreach Manager specializing in rural development programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer 
        logo="https://unweanedchildcarefoundation.org/wp-content/uploads/2022/07/uccf-logo.png"
        contactInfo={contactInfo}
        navigation={footerNavigation}
      />
    </div>
  );
};

export default About;