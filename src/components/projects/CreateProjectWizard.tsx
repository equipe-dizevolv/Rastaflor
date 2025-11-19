import { useState } from 'react';
import { ProjectStep1 } from './ProjectStep1';
import { ProjectStep2 } from './ProjectStep2';
import { ProjectStep3 } from './ProjectStep3';

interface CreateProjectWizardProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (projectData: any) => void;
}

export function CreateProjectWizard({ isOpen, onClose, onComplete }: CreateProjectWizardProps) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const [currentStep, setCurrentStep] = useState(1);
  const [projectData, setProjectData] = useState({
    name: '',
    executionMonths: '',
    restorationGoal: '',
    initialStage: '',
    financiers: [] as Array<{ bank: string; amount: string }>,
    supplier: ''
  });

  if (!isOpen) return null;

  const handleStep1Next = (data: any) => {
    setProjectData({ ...projectData, ...data });
    setCurrentStep(2);
  };

  const handleStep2Next = (data: any) => {
    setProjectData({ ...projectData, ...data });
    setCurrentStep(3);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCreateProject = () => {
    onComplete(projectData);
    onClose();
  };

  const handleEditStep = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-[12px] shadow-lg ${
        isDarkMode ? 'bg-[#2A2A2A]' : 'bg-white'
      }`}>
        <div className="p-8">
          {currentStep === 1 && (
            <ProjectStep1
              data={projectData}
              onNext={handleStep1Next}
              onCancel={onClose}
              isDarkMode={isDarkMode}
            />
          )}
          {currentStep === 2 && (
            <ProjectStep2
              data={projectData}
              onNext={handleStep2Next}
              onBack={handleBack}
              isDarkMode={isDarkMode}
            />
          )}
          {currentStep === 3 && (
            <ProjectStep3
              data={projectData}
              onBack={handleBack}
              onCreate={handleCreateProject}
              onEdit={handleEditStep}
              isDarkMode={isDarkMode}
            />
          )}
        </div>
      </div>
    </div>
  );
}