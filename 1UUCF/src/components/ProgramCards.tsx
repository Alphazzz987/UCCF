import React from 'react';
import ProgramCard from './ProgramCard';
import { Program } from '../types';

interface ProgramCardsProps {
  title: string;
  description?: string;
  programs: Program[];
}

const ProgramCards: React.FC<ProgramCardsProps> = ({ title, description, programs }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{title}</h2>
          {description && (
            <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramCards;