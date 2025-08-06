import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, MapPin, Clock, Heart } from 'lucide-react';
import Footer from '../../components/Footer';
import { footerNavigation, contactInfo } from '../../data/mockData';

interface Work {
  id: string;
  title: string;
  date: string;
  venue: string;
  description: string;
  image: string;
  fullDescription: string;
  gallery: string[];
}

const recentWorks: Work[] = [
  {
    id: '1',
    title: 'Education Support Drive',
    date: 'March 15, 2024',
    venue: 'Rural School, Karnataka',
    description: 'Distributed educational materials to 200+ students',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
    fullDescription: 'Our recent education support drive reached out to over 200 students in rural Karnataka. The initiative focused on providing essential educational materials including textbooks, notebooks, and stationery items to students from underprivileged backgrounds.',
    gallery: [
      'https://images.pexels.com/photos/8613985/pexels-photo-8613985.jpeg',
      'https://images.pexels.com/photos/8613940/pexels-photo-8613940.jpeg',
      'https://images.pexels.com/photos/8613919/pexels-photo-8613919.jpeg'
    ]
  },
  {
    id: '2',
    title: 'Health Camp',
    date: 'March 10, 2024',
    venue: 'Community Center, Bangalore',
    description: 'Free health checkups for 500+ individuals',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
    fullDescription: 'Our health camp provided free medical checkups, consultations, and medicines to over 500 individuals. The camp focused on general health, eye care, and dental services.',
    gallery: [
      'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
      'https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg',
      'https://images.pexels.com/photos/4386469/pexels-photo-4386469.jpeg'
    ]
  },
  {
    id: '3',
    title: 'Women Empowerment Workshop',
    date: 'March 5, 2024',
    venue: 'Community Hall, Chennai',
    description: 'Skill development workshop for 100 women',
    image: 'https://images.pexels.com/photos/7551755/pexels-photo-7551755.jpeg',
    fullDescription: 'The workshop focused on teaching practical skills like tailoring, handicrafts, and basic entrepreneurship to help women become financially independent.',
    gallery: [
      'https://images.pexels.com/photos/7551756/pexels-photo-7551756.jpeg',
      'https://images.pexels.com/photos/7551757/pexels-photo-7551757.jpeg',
      'https://images.pexels.com/photos/7551758/pexels-photo-7551758.jpeg'
    ]
  },
  {
    id: '4',
    title: 'Rural Development Project',
    date: 'February 28, 2024',
    venue: 'Village Cluster, Tamil Nadu',
    description: 'Infrastructure development in 5 villages',
    image: 'https://images.pexels.com/photos/6646467/pexels-photo-6646467.jpeg',
    fullDescription: 'Comprehensive development project covering water facilities, solar lighting, and road improvements across five villages.',
    gallery: [
      'https://images.pexels.com/photos/6646468/pexels-photo-6646468.jpeg',
      'https://images.pexels.com/photos/6646469/pexels-photo-6646469.jpeg',
      'https://images.pexels.com/photos/6646470/pexels-photo-6646470.jpeg'
    ]
  },
  {
    id: '5',
    title: 'Youth Leadership Program',
    date: 'February 20, 2024',
    venue: 'City Center, Hyderabad',
    description: 'Leadership training for 50 young leaders',
    image: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg',
    fullDescription: 'Intensive leadership development program for youth from underprivileged backgrounds, focusing on personal growth and community leadership.',
    gallery: [
      'https://images.pexels.com/photos/6147370/pexels-photo-6147370.jpeg',
      'https://images.pexels.com/photos/6147371/pexels-photo-6147371.jpeg',
      'https://images.pexels.com/photos/6147372/pexels-photo-6147372.jpeg'
    ]
  },
  {
    id: '6',
    title: 'Environmental Awareness Drive',
    date: 'February 15, 2024',
    venue: 'Public Park, Mumbai',
    description: 'Tree plantation and awareness campaign',
    image: 'https://images.pexels.com/photos/6591154/pexels-photo-6591154.jpeg',
    fullDescription: 'Community-wide environmental awareness campaign including tree plantation, waste management workshop, and educational sessions.',
    gallery: [
      'https://images.pexels.com/photos/6591155/pexels-photo-6591155.jpeg',
      'https://images.pexels.com/photos/6591156/pexels-photo-6591156.jpeg',
      'https://images.pexels.com/photos/6591157/pexels-photo-6591157.jpeg'
    ]
  }
];

const previousWorks: Work[] = [
  {
    id: 'prev1',
    title: 'Digital Literacy Program',
    date: 'January 2024',
    venue: 'Multiple Centers',
    description: 'Computer training for 300 students',
    image: 'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg',
    fullDescription: 'Month-long digital literacy program covering basic computer skills, internet usage, and online safety.',
    gallery: [
      'https://images.pexels.com/photos/4778612/pexels-photo-4778612.jpeg',
      'https://images.pexels.com/photos/4778613/pexels-photo-4778613.jpeg',
      'https://images.pexels.com/photos/4778614/pexels-photo-4778614.jpeg'
    ]
  },
  {
    id: 'prev2',
    title: 'Senior Citizens Support',
    date: 'December 2023',
    venue: 'Elder Care Center',
    description: 'Healthcare and companionship program',
    image: 'https://images.pexels.com/photos/7551669/pexels-photo-7551669.jpeg',
    fullDescription: 'Comprehensive support program for elderly including health checkups, recreational activities, and social engagement.',
    gallery: [
      'https://images.pexels.com/photos/7551670/pexels-photo-7551670.jpeg',
      'https://images.pexels.com/photos/7551671/pexels-photo-7551671.jpeg',
      'https://images.pexels.com/photos/7551672/pexels-photo-7551672.jpeg'
    ]
  },
  {
    id: 'prev3',
    title: 'Food Distribution Drive',
    date: 'November 2023',
    venue: 'Multiple Locations',
    description: 'Provided meals to 1000+ families',
    image: 'https://images.pexels.com/photos/6646676/pexels-photo-6646676.jpeg',
    fullDescription: 'Large-scale food distribution campaign reaching out to underprivileged families across multiple districts.',
    gallery: [
      'https://images.pexels.com/photos/6646677/pexels-photo-6646677.jpeg',
      'https://images.pexels.com/photos/6646678/pexels-photo-6646678.jpeg',
      'https://images.pexels.com/photos/6646679/pexels-photo-6646679.jpeg'
    ]
  },
  {
    id: 'prev4',
    title: 'Art & Culture Festival',
    date: 'October 2023',
    venue: 'Community Center',
    description: 'Celebrating local arts and culture',
    image: 'https://images.pexels.com/photos/7551890/pexels-photo-7551890.jpeg',
    fullDescription: 'Cultural festival showcasing traditional arts, crafts, and performances from local communities.',
    gallery: [
      'https://images.pexels.com/photos/7551891/pexels-photo-7551891.jpeg',
      'https://images.pexels.com/photos/7551892/pexels-photo-7551892.jpeg',
      'https://images.pexels.com/photos/7551893/pexels-photo-7551893.jpeg'
    ]
  },
  {
    id: 'prev5',
    title: 'Sports Development Program',
    date: 'September 2023',
    venue: 'Sports Complex',
    description: 'Training 200 young athletes',
    image: 'https://images.pexels.com/photos/8613466/pexels-photo-8613466.jpeg',
    fullDescription: 'Comprehensive sports training program for talented young athletes from underprivileged backgrounds.',
    gallery: [
      'https://images.pexels.com/photos/8613467/pexels-photo-8613467.jpeg',
      'https://images.pexels.com/photos/8613468/pexels-photo-8613468.jpeg',
      'https://images.pexels.com/photos/8613469/pexels-photo-8613469.jpeg'
    ]
  },
  {
    id: 'prev6',
    title: 'Mental Health Workshop',
    date: 'August 2023',
    venue: 'Community Hall',
    description: 'Mental wellness sessions for youth',
    image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg',
    fullDescription: 'Series of workshops focusing on mental health awareness, stress management, and emotional well-being.',
    gallery: [
      'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
      'https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg',
      'https://images.pexels.com/photos/6646920/pexels-photo-6646920.jpeg'
    ]
  }
];

const Media = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const worksPerPage = 6;

  const openWorkDetails = (work: Work) => {
    setSelectedWork(work);
    document.body.style.overflow = 'hidden';
  };

  const closeWorkDetails = () => {
    setSelectedWork(null);
    document.body.style.overflow = 'auto';
  };

  const totalPages = Math.ceil(previousWorks.length / worksPerPage);
  const indexOfLastWork = currentPage * worksPerPage;
  const indexOfFirstWork = indexOfLastWork - worksPerPage;
  const currentWorks = previousWorks.slice(indexOfFirstWork, indexOfLastWork);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Our Impact</h1>
            <div className="flex items-center justify-center space-x-3 text-white">
              <a href="/" className="hover:text-orange-500 transition-colors">Home</a>
              <ArrowRight className="w-4 h-4" />
              <span className="text-orange-500">Media</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Works Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentWorks.map((work) => (
              <div 
                key={work.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => openWorkDetails(work)}
              >
                <div className="relative h-48">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{work.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{work.venue}</span>
                  </div>
                  <p className="text-gray-600">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Previous Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentWorks.map((work) => (
              <div 
                key={work.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => openWorkDetails(work)}
              >
                <div className="relative h-48">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{work.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{work.venue}</span>
                  </div>
                  <p className="text-gray-600">{work.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === i + 1
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <img 
                src="https://images.pexels.com/photos/8613466/pexels-photo-8613466.jpeg"
                alt="Gallery 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/8613467/pexels-photo-8613467.jpeg"
                alt="Gallery 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/8613468/pexels-photo-8613468.jpeg"
                alt="Gallery 3"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/8613469/pexels-photo-8613469.jpeg"
                alt="Gallery 4"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/8613470/pexels-photo-8613470.jpeg"
                alt="Gallery 5"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Us Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heart size={48} className="mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Our Cause</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Your support helps us continue our mission of empowering communities and changing lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Donate</h3>
              <p className="mb-6">Make a direct impact through financial support</p>
              <a 
                href="/donate"
                className="inline-block w-full py-3 bg-white text-orange-600 rounded-md font-medium hover:bg-gray-100 transition duration-300"
              >
                Donate Now
              </a>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Volunteer</h3>
              <p className="mb-6">Join our team and make a difference</p>
              <a 
                href="/volunteer"
                className="inline-block w-full py-3 bg-white text-orange-600 rounded-md font-medium hover:bg-gray-100 transition duration-300"
              >
                Join Us
              </a>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Partner</h3>
              <p className="mb-6">Collaborate with us on projects</p>
              <a 
                href="/partner"
                className="inline-block w-full py-3 bg-white text-orange-600 rounded-md font-medium hover:bg-gray-100 transition duration-300"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Details Modal */}
      {selectedWork && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeWorkDetails}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
              >
                ×
              </button>
              <img 
                src={selectedWork.image}
                alt={selectedWork.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">{selectedWork.title}</h2>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{selectedWork.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{selectedWork.venue}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-8">{selectedWork.fullDescription}</p>
              <div className="grid grid-cols-3 gap-4">
                {selectedWork.gallery.map((image, index) => (
                  <img 
                    key={index}
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer 
        logo="https://unweanedchildcarefoundation.org/wp-content/uploads/2022/07/uccf-logo.png"
        contactInfo={contactInfo}
        navigation={footerNavigation}
      />
    </div>
  );
};

export default Media;