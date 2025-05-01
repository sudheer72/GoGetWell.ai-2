import React from 'react';
import { useThemeStore } from '../../store/themeStore';

interface Doctor {
  id: string;
  name: string;
  title: string;
  experience: string;
  hospital: string;
}

const doctors: Doctor[] = [
  {
    id: 'doc1',
    name: 'Dr. Ashok B C',
    title: 'HOD - Department of Plastic Surgery, Reconstructive and Aesthetic Surgery & Chief of Medical Services (at Aster Whitefield Hospital)',
    experience: '33 years of experience',
    hospital: 'Manipal Hospital Old Airport Road Bengaluru'
  },
  {
    id: 'doc2',
    name: 'Dr. Ranjan Shetty',
    title: 'Consultant - Interventional Cardiologist',
    experience: '21+ years of experience in Interventional Cardiology',
    hospital: 'Manipal Hospital Old Airport Road Bengaluru'
  },
  {
    id: 'doc3',
    name: 'Dr. Lokesh A Veerappa',
    title: 'Consultant Orthopaedic Robotic Joint Replacement',
    experience: 'N/A',
    hospital: 'Manipal Hospital Old Airport Road Bengaluru'
  }
];

const TopDoctors: React.FC = () => {
  const { currentTheme, themes } = useThemeStore();
  const theme = themes[currentTheme];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Top Doctors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{doctor.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{doctor.title}</p>
                
                <div className="flex items-start mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Experience: {doctor.experience}</span>
                </div>
                
                <div className="flex items-start mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1.581.814L10 14.584l-4.419 2.23A1 1 0 014 16V4zm2 0h8v10.434l-4-2.015-4 2.015V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Hospital: {doctor.hospital}</span>
                </div>
                
                <button 
                  className="w-full py-2 px-4 rounded-md text-white font-medium transition-colors"
                  style={{ backgroundColor: theme.primaryColor }}
                >
                  More details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-md font-medium transition-colors">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDoctors;