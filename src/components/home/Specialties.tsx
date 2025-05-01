import React, { useState } from 'react';
import { useThemeStore } from '../../store/themeStore';
import { specialties } from '../../data/specialties';
import { ChevronDown, ChevronUp } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const Specialties: React.FC = () => {
  const { currentTheme, setTheme } = useThemeStore();
  const [expandedSpecialty, setExpandedSpecialty] = useState<string | null>(null);
  
  const toggleSpecialty = (id: string) => {
    if (expandedSpecialty === id) {
      setExpandedSpecialty(null);
    } else {
      setExpandedSpecialty(id);
      // If the specialty has a theme, switch to it
      const specialty = specialties.find(s => s.id === id);
      if (specialty?.themeId) {
        setTheme(specialty.themeId);
      }
    }
  };
  
  // Dynamic icon component
  const IconComponent = ({ name }: { name: string }) => {
    const Icon = (LucideIcons as any)[name.charAt(0).toUpperCase() + name.slice(1)] || LucideIcons.CircleDot;
    return <Icon size={24} />;
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Explore more about Treatments</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty) => (
            <div key={specialty.id} className="mb-6">
              <div 
                className={`
                  specialty-card bg-white p-4 rounded-lg flex items-center justify-between cursor-pointer
                  ${specialty.themeId === currentTheme ? 'ring-2 ring-blue-500' : ''}
                  ${expandedSpecialty === specialty.id ? 'border-blue-500' : ''}
                `}
                onClick={() => toggleSpecialty(specialty.id)}
              >
                <div className="flex items-center">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-3 text-blue-500"
                    style={{ 
                      color: specialty.themeId === currentTheme ? 'var(--primary)' : '#3B82F6'
                    }}
                  >
                    <IconComponent name={specialty.icon} />
                  </div>
                  <span className="font-medium">{specialty.name}</span>
                </div>
                <div>
                  {expandedSpecialty === specialty.id ? <ChevronUp /> : <ChevronDown />}
                </div>
              </div>
              
              {expandedSpecialty === specialty.id && (
                <div className="bg-white mt-1 rounded-lg shadow-sm border border-gray-100 p-3">
                  <ul className="space-y-2">
                    {specialty.subspecialties.map((sub) => (
                      <li key={sub.id} className="pl-4 py-1 border-l-2 border-blue-100 hover:border-blue-500 transition-colors">
                        <a href="#" className="text-gray-700 hover:text-blue-600">{sub.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;