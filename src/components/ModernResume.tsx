// components/ModernResume.tsx
import React from 'react';
import type { ResumeData } from '../types';

interface ModernResumeProps {
  data: ResumeData;
}

const ModernResume: React.FC<ModernResumeProps> = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 p-8 shadow-lg">
      {/* Header */}
      <div className="border-b-4 border-blue-500 pb-6 mb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{data.personalInfo.name}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <span>📧 {data.personalInfo.email}</span>
          <span>📱 {data.personalInfo.phone}</span>
          <span>🏠 {data.personalInfo.address}</span>
          {data.personalInfo.linkedin && <span>💼 {data.personalInfo.linkedin}</span>}
          {data.personalInfo.github && <span>🐙 {data.personalInfo.github}</span>}
        </div>
      </div>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Professional Summary</h2>
        <p className="text-gray-700 leading-relaxed">{data.summary}</p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4 pb-4 border-b border-gray-200 last:border-b-0">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-medium text-gray-800">{exp.position}</h3>
              <span className="text-sm text-gray-500">{exp.startDate} - {exp.endDate}</span>
            </div>
            <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-800">{edu.degree}</h3>
                <p className="text-blue-600">{edu.institution}</p>
              </div>
              <span className="text-sm text-gray-500">{edu.startDate} - {edu.endDate}</span>
            </div>
            {edu.gpa && <p className="text-sm text-gray-600 mt-1">GPA: {edu.gpa}</p>}
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Projects</h2>
          {data.projects.map((project, index) => (
            <div key={index} className="mb-4 pb-4 border-b border-gray-200 last:border-b-0">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-gray-800">{project.name}</h3>
                {project.link && (
                  <a href={project.link} className="text-blue-600 hover:underline text-sm">🔗 Link</a>
                )}
              </div>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {data.certifications && data.certifications.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Certifications</h2>
          {data.certifications.map((cert, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between">
                <h3 className="text-lg font-medium text-gray-800">{cert.name}</h3>
                <span className="text-sm text-gray-500">{cert.date}</span>
              </div>
              <p className="text-blue-600">{cert.issuer}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default ModernResume;