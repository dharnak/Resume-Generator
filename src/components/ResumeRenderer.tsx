// components/ResumeRenderer.tsx
import React from 'react';
import type { ResumeData, TemplateType } from '../types';
import ClassicResume from './ClassicResume';
import ModernResume from './ModernResume';
import MinimalistResume from './MinimalistResume';

interface ResumeRendererProps {
  data: ResumeData;
  template: TemplateType;
}

const ResumeRenderer: React.FC<ResumeRendererProps> = ({ data, template }) => {
  const renderTemplate = () => {
    switch (template) {
      case 'classic':
        return <ClassicResume data={data} />;
      case 'modern':
        return <ModernResume data={data} />;
      case 'minimalist':
        return <MinimalistResume data={data} />;
      default:
        return <ModernResume data={data} />;
    }
  };

  return (
    <div id="resume-content" className="bg-white min-h-screen">
      {renderTemplate()}
    </div>
  );
};

export default ResumeRenderer;