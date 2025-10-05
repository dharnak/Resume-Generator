# Resume Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.14-38B2AC.svg)](https://tailwindcss.com/)

A modern, responsive web application for generating professional resumes from JSON or YAML data. Built with React, TypeScript, Vite, and TailwindCSS.

## ✨ Features

- **📄 Multiple Input Formats**: Support for JSON and YAML resume data
- **📁 File Upload**: Upload resume files directly from your device
- **🎨 Multiple Templates**: Choose from Classic, Modern, and Minimalist designs
- **🌙 Dark/Light Mode**: Toggle between themes for comfortable viewing
- **📕 PDF Export**: Export resumes as high-quality PDF files with proper formatting
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **⚡ Client-side Only**: No server required, all processing done in the browser
- **🔒 Privacy First**: Your resume data never leaves your device

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: TailwindCSS v4
- **State Management**: Zustand
- **Parsing**: `js-yaml` for YAML, built-in JSON parsing
- **PDF Export**: `html2pdf.js`
- **Build Tool**: Vite
- **Linting**: ESLint

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TheUnknown550/Resume-Generator.git
   cd Resume-Generator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 📖 Usage

### Creating a Resume

1. **Choose your input method:**
   - Paste JSON or YAML data directly into the text area
   - Upload a `.json` or `.yaml` file using the file upload button
   - Click "Load Example" to see a sample resume

2. **Select a template:**
   - **Modern**: Clean, contemporary design with blue accents
   - **Classic**: Traditional resume layout with serif fonts
   - **Minimalist**: Simple, elegant design focusing on content

3. **Customize appearance:**
   - Toggle between light and dark themes
   - Adjust content as needed

4. **Export to PDF:**
   - Click the "Export to PDF" button
   - Your resume will be downloaded as a high-quality PDF

### Resume Data Format

The application accepts resume data in the following JSON structure:

```json
{
  "personalInfo": {
    "name": "John Doe",
    "email": "john.doe@email.com",
    "phone": "(555) 123-4567",
    "location": "City, State",
    "website": "https://johndoe.com",
    "linkedin": "https://linkedin.com/in/johndoe"
  },
  "summary": "Professional summary...",
  "experience": [
    {
      "position": "Software Engineer",
      "company": "Tech Company",
      "startDate": "Jan 2020",
      "endDate": "Present",
      "description": ["Responsibility 1", "Responsibility 2"]
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Science in Computer Science",
      "school": "University Name",
      "startDate": "2016",
      "endDate": "2020"
    }
  ],
  "skills": ["JavaScript", "React", "Node.js"]
}
```

See `example-resume.yaml` for a complete YAML example.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on:

- How to set up your development environment
- Coding standards and guidelines
- Submitting pull requests
- Reporting issues

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔒 Security

For security-related information, please see our [Security Policy](SECURITY.md).

## 📋 Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to maintain a welcoming community.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) - Client-side HTML-to-PDF conversion
- [js-yaml](https://github.com/nodeca/js-yaml) - YAML parser for JavaScript

## 📞 Support

If you have any questions or need help:

- 📧 Open an [issue](https://github.com/TheUnknown550/Resume-Generator/issues) on GitHub
- 💬 Check out our [discussions](https://github.com/TheUnknown550/Resume-Generator/discussions) for community support

---

⭐ **Star this repository** if you find it helpful!

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
   - Click "Export PDF" to download your resume as a high-quality PDF file
   - The PDF will be automatically named using your name and saved to your downloads folder

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
