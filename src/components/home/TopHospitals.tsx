import React from 'react';
import { useThemeStore } from '../../store/themeStore';

const hospitals = [
  {
    id: 'hosp1',
    name: 'Manipal Hospital Old Airport Road',
    location: 'Bengaluru, Karnataka',
    specialties: ['Organ Transplant', 'Cardiology', 'Neurology'],
    accreditation: 'NABH, JCI Accredited',
    image: 'https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'hosp2',
    name: 'Apollo Hospitals',
    location: 'Chennai, Tamil Nadu',
    specialties: ['Cardiology', 'Oncology', 'Orthopedics'],
    accreditation: 'NABH Accredited',
    image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'hosp3',
    name: 'Medanta - The Medicity',
    location: 'Gurugram, Haryana',
    specialties: ['Organ Transplant', 'Neurology', 'Cardiology'],
    accreditation: 'JCI Accredited',
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const TopHospitals: React.FC = () => {
  const { currentTheme, themes } = useThemeStore();
  const theme = themes[currentTheme];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Top Hospitals</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hospitals.map((hospital) => (
            <div key={hospital.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={hospital.image} 
                  alt={hospital.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{hospital.name}</h3>
                <p className="text-gray-600 mb-4">{hospital.location}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hospital.specialties.map((specialty, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-xs rounded-full"
                        style={{ 
                          backgroundColor: `${theme.primaryColor}20`,
                          color: theme.primaryColor
                        }}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{hospital.accreditation}</span>
                  <button 
                    className="px-4 py-2 rounded-md text-white text-sm font-medium transition-colors"
                    style={{ backgroundColor: theme.primaryColor }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button 
            className="px-6 py-2 rounded-md border transition-colors hover:bg-gray-50"
            style={{ borderColor: theme.primaryColor, color: theme.primaryColor }}
          >
            View All Hospitals
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopHospitals;