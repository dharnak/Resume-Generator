// components/MinimalistResume.tsx
import React from 'react';
import type { ResumeData } from '../types';

interface MinimalistResumeProps {
  data: ResumeData;
}

const MinimalistResume: React.FC<MinimalistResumeProps> = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 p-8 font-light">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-light text-gray-800 mb-4">{data.personalInfo.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
          <div>✉ {data.personalInfo.email}</div>
          <div>☎ {data.personalInfo.phone}</div>
          <div>📍 {data.personalInfo.address}</div>
          <div className="md:col-span-2">
            {data.personalInfo.linkedin && <span>💼 {data.personalInfo.linkedin} </span>}
            {data.personalInfo.github && <span>🐙 {data.personalInfo.github} </span>}
            {data.personalInfo.website && <span>🌐 {data.personalInfo.website}</span>}
          </div>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-8">
        <p className="text-gray-700 leading-relaxed text-lg">{data.summary}</p>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-light text-gray-800 mb-4 uppercase tracking-wider">Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-normal text-gray-800">{exp.position}</h3>
              <span className="text-sm text-gray-500">{exp.startDate} — {exp.endDate}</span>
            </div>
            <p className="text-gray-600 mb-3">{exp.company}</p>
            <div className="space-y-2">
              {exp.description.map((desc, i) => (
                <p key={i} className="text-gray-700 text-sm leading-relaxed">{desc}</p>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-light text-gray-800 mb-4 uppercase tracking-wider">Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-normal text-gray-800">{edu.degree}</h3>
              <span className="text-sm text-gray-500">{edu.startDate} — {edu.endDate}</span>
            </div>
            <p className="text-gray-600">{edu.institution}</p>
            {edu.gpa && <p className="text-sm text-gray-500 mt-1">GPA: {edu.gpa}</p>}
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-light text-gray-800 mb-4 uppercase tracking-wider">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {data.skills.map((skill, index) => (
            <span key={index} className="text-gray-700 text-sm border border-gray-300 px-3 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-light text-gray-800 mb-4 uppercase tracking-wider">Projects</h2>
          {data.projects.map((project, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-lg font-normal text-gray-800">{project.name}</h3>
                {project.link && (
                  <a href={project.link} className="text-gray-600 hover:text-gray-800 text-sm">→</a>
                )}
              </div>
              <p className="text-gray-700 mb-3 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-gray-500 text-xs bg-gray-100 px-2 py-1 rounded">
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
          <h2 className="text-2xl font-light text-gray-800 mb-4 uppercase tracking-wider">Certifications</h2>
          {data.certifications.map((cert, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="text-base font-normal text-gray-800">{cert.name}</h3>
                <span className="text-sm text-gray-500">{cert.date}</span>
              </div>
              <p className="text-gray-600">{cert.issuer}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default MinimalistResume;