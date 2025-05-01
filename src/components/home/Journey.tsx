import React from 'react';
import { 
  CheckCircle2, 
  FileText, 
  ListChecks, 
  Building2, 
  User2, 
  Award 
} from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';

const Journey: React.FC = () => {
  const { currentTheme, themes } = useThemeStore();
  const theme = themes[currentTheme];
  
  const steps = [
    {
      icon: <FileText size={24} />,
      title: 'Choose Treatment',
      color: theme.primaryColor
    },
    {
      icon: <ListChecks size={24} />,
      title: 'Get Treatment Plan',
      color: theme.primaryColor
    },
    {
      icon: <Building2 size={24} />,
      title: 'Select Hospital',
      color: theme.primaryColor
    },
    {
      icon: <User2 size={24} />,
      title: 'Select Doctor',
      color: theme.primaryColor
    },
    {
      icon: <Award size={24} />,
      title: 'Finalize Treatment',
      color: theme.primaryColor
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Start Your Journey</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Upload your medical report to receive AI-powered insights on the best treatment plans.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-4 rounded-lg"
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-white shadow-md"
                style={{ color: step.color }}
              >
                {step.icon}
              </div>
              <h3 className="text-center font-medium">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;