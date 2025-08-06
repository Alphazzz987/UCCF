import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Program } from '../types';

interface ProgramCardProps {
  program: Program;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <Link 
      to={`/programs/${program.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2 group"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={program.imageUrl}
          alt={program.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 bg-gradient-to-b from-white to-gray-50">
        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition-colors">
          {program.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {program.description}
        </p>
        <span className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium group/link">
          Read More
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

export default ProgramCard;