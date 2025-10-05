# Resume Generator

A modern, responsive web application for generating professional resumes from JSON or YAML data. Built with React, TypeScript, Vite, and TailwindCSS.

## Features

- **Multiple Input Formats**: Support for JSON and YAML resume data
- **File Upload**: Upload resume files directly
- **Multiple Templates**: Choose from Classic, Modern, and Minimalist designs
- **Dark/Light Mode**: Toggle between themes
- **PDF Export**: Export resumes as PDF files
- **Responsive Design**: Works on desktop and mobile devices
- **Client-side Only**: No server required, all processing done in the browser

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: TailwindCSS
- **State Management**: Zustand
- **Parsing**: `js-yaml` for YAML, built-in JSON parsing
- **PDF Export**: `html2pdf.js`

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd resume-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Input Resume Data**:
   - Paste JSON or YAML resume data in the left panel
   - Or upload a `.json` or `.yaml` file
   - Or click "Load Example YAML" to load sample data for testing
   - Use the provided example files: `example-resume.json` or `example-resume.yaml`

2. **Select Template**:
   - Choose from Modern, Classic, or Minimalist templates

3. **Customize**:
   - Toggle between light and dark modes
   - Preview your resume in real-time

4. **Export**:
   - Click "Export PDF" to download your resume as a PDF

## Resume Data Format

The resume data should follow this structure:

```json
{
  "personalInfo": {
    "name": "Your Name",
    "email": "your.email@example.com",
    "phone": "Your Phone",
    "address": "Your Address",
    "linkedin": "linkedin.com/in/yourprofile",
    "github": "github.com/yourusername",
    "website": "yourwebsite.com"
  },
  "summary": "Professional summary...",
  "experience": [
    {
      "company": "Company Name",
      "position": "Job Title",
      "startDate": "Start Date",
      "endDate": "End Date",
      "description": ["Responsibility 1", "Responsibility 2"]
    }
  ],
  "education": [
    {
      "institution": "University Name",
      "degree": "Degree Name",
      "startDate": "Start Year",
      "endDate": "End Year",
      "gpa": "3.8"
    }
  ],
  "skills": ["Skill 1", "Skill 2", "Skill 3"],
  "projects": [
    {
      "name": "Project Name",
      "description": "Project description",
      "technologies": ["Tech 1", "Tech 2"],
      "link": "project-link.com"
    }
  ],
  "certifications": [
    {
      "name": "Certification Name",
      "issuer": "Issuing Organization",
      "date": "2023"
    }
  ]
}
```

## Project Structure

```
src/
├── components/
│   ├── ClassicResume.tsx
│   ├── ModernResume.tsx
│   ├── MinimalistResume.tsx
│   └── ResumeRenderer.tsx
├── store.ts          # Zustand state management
├── types.ts          # TypeScript type definitions
├── utils.ts          # Utility functions for parsing
└── App.tsx           # Main application component
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
