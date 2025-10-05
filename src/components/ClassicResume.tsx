// components/ClassicResume.tsx
import React from 'react';
import type { ResumeData } from '../types';

interface ClassicResumeProps {
  data: ResumeData;
}

const ClassicResume: React.FC<ClassicResumeProps> = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 p-8 font-serif">
      {/* Header */}
      <div className="text-center border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{data.personalInfo.name}</h1>
        <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-600">
          <span>{data.personalInfo.email}</span>
          <span>{data.personalInfo.phone}</span>
          <span>{data.personalInfo.address}</span>
        </div>
        <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-600 mt-1">
          {data.personalInfo.linkedin && <span>{data.personalInfo.linkedin}</span>}
          {data.personalInfo.github && <span>{data.personalInfo.github}</span>}
          {data.personalInfo.website && <span>{data.personalInfo.website}</span>}
        </div>
      </div>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide mb-2">Professional Summary</h2>
        <p className="text-gray-700 leading-relaxed text-justify">{data.summary}</p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide mb-3">Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-base font-semibold text-gray-800">{exp.position}</h3>
              <span className="text-sm text-gray-600">{exp.startDate} - {exp.endDate}</span>
            </div>
            <p className="text-gray-700 italic mb-2">{exp.company}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-sm">{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide mb-3">Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-base font-semibold text-gray-800">{edu.degree}</h3>
                <p className="text-gray-700">{edu.institution}</p>
              </div>
              <span className="text-sm text-gray-600">{edu.startDate} - {edu.endDate}</span>
            </div>
            {edu.gpa && <p className="text-sm text-gray-600 mt-1">GPA: {edu.gpa}</p>}
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide mb-3">Skills</h2>
        <p className="text-gray-700">{data.skills.join(', ')}</p>
      </section>

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide mb-3">Projects</h2>
          {data.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-base font-semibold text-gray-800">{project.name}</h3>
                {project.link && (
                  <a href={project.link} className="text-blue-600 hover:underline text-sm">Link</a>
                )}
              </div>
              <p className="text-gray-700 mb-2 text-sm">{project.description}</p>
              <p className="text-gray-600 text-sm"><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {data.certifications && data.certifications.length > 0 && (
        <section>
          <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide mb-3">Certifications</h2>
          {data.certifications.map((cert, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between">
                <h3 className="text-base font-semibold text-gray-800">{cert.name}</h3>
                <span className="text-sm text-gray-600">{cert.date}</span>
              </div>
              <p className="text-gray-700">{cert.issuer}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default ClassicResume;