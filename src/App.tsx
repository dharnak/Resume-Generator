// App.tsx
import React, { useState, useRef } from 'react';
import { useResumeStore } from './store';
import { parseResumeData, validateResumeData } from './utils';
import ResumeRenderer from './components/ResumeRenderer';
import html2pdf from 'html2pdf.js';
import exampleYaml from '../example-resume.yaml?raw';

function App() {
  const { resumeData, template, theme, setResumeData, setTemplate, toggleTheme } = useResumeStore();
  const [inputText, setInputText] = useState('');
  const [inputFormat, setInputFormat] = useState<'json' | 'yaml'>('json');
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTextSubmit = () => {
    try {
      const data = parseResumeData(inputText, inputFormat);
      if (validateResumeData(data)) {
        setResumeData(data);
        setError(null);
      } else {
        setError('Invalid resume data structure');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to parse input');
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      const format = file.name.endsWith('.yaml') || file.name.endsWith('.yml') ? 'yaml' : 'json';
      setInputFormat(format);
      setInputText(content);
    };
    reader.readAsText(file);
  };

  const loadExample = () => {
    setInputText(exampleYaml);
    setInputFormat('yaml');
  };

  const exportToPDF = () => {
    const element = document.getElementById('resume-content');
    if (!element) return;

    const opt = {
      margin: 1,
      filename: `${resumeData?.personalInfo.name || 'resume'}.pdf`,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' as const }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Resume Generator</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
            <h2 className="text-2xl font-semibold mb-4">Input Resume Data</h2>

            {/* Format Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Format:</label>
              <select
                value={inputFormat}
                onChange={(e) => setInputFormat(e.target.value as 'json' | 'yaml')}
                className={`w-full p-2 border rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              >
                <option value="json">JSON</option>
                <option value="yaml">YAML</option>
              </select>
            </div>

            {/* Text Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Paste your resume data:</label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={`Paste your resume in ${inputFormat.toUpperCase()} format...`}
                className={`w-full h-64 p-3 border rounded font-mono text-sm ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              />
            </div>

            {/* File Upload */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Or upload a file:</label>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json,.yaml,.yml"
                onChange={handleFileUpload}
                className={`w-full p-2 border rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              />
            </div>

            {/* Load Example Button */}
            <div className="mb-4">
              <button
                onClick={loadExample}
                className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
              >
                Load Example YAML
              </button>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleTextSubmit}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Generate Resume
            </button>

            {error && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}
          </div>

          {/* Preview Panel */}
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Preview</h2>

              {/* Controls */}
              <div className="flex gap-2">
                {/* Template Selector */}
                <select
                  value={template}
                  onChange={(e) => setTemplate(e.target.value as any)}
                  className={`p-2 border rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                >
                  <option value="modern">Modern</option>
                  <option value="classic">Classic</option>
                  <option value="minimalist">Minimalist</option>
                </select>

                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className={`p-2 border rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                >
                  {theme === 'light' ? '🌙' : '☀️'}
                </button>

                {/* Export PDF */}
                {resumeData && (
                  <button
                    onClick={exportToPDF}
                    className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                  >
                    Export PDF
                  </button>
                )}
              </div>
            </div>

            {/* Resume Preview */}
            <div className={`border rounded p-4 ${theme === 'dark' ? 'border-gray-600 bg-gray-900' : 'border-gray-300 bg-white'}`}>
              {resumeData ? (
                <ResumeRenderer data={resumeData} template={template} />
              ) : (
                <div className="text-center text-gray-500 py-12">
                  <p className="text-lg">No resume data loaded</p>
                  <p className="text-sm mt-2">Paste your resume data or upload a file to get started</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
