# Contributing to Resume Generator

Thank you for your interest in contributing to Resume Generator! We welcome contributions from the community. This document provides guidelines and information for contributors.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Submitting Changes](#submitting-changes)
- [Reporting Issues](#reporting-issues)

## 🤝 Code of Conduct

This project follows a code of conduct to ensure a welcoming environment for all contributors. Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## 🚀 How to Contribute

### Types of Contributions

- 🐛 **Bug fixes** - Fix existing issues
- ✨ **Features** - Add new functionality
- 📚 **Documentation** - Improve documentation
- 🎨 **UI/UX** - Improve user interface and experience
- 🧪 **Tests** - Add or improve tests
- 📦 **Dependencies** - Update or add dependencies

### Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
3. Create a new branch for your changes
4. Make your changes
5. Test your changes
6. Submit a pull request

## 🛠️ Development Setup

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, or pnpm

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Resume-Generator.git
   cd Resume-Generator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser** to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
Resume-Generator/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── ClassicResume.tsx
│   │   ├── ModernResume.tsx
│   │   ├── MinimalistResume.tsx
│   │   └── ResumeRenderer.tsx
│   ├── App.tsx            # Main application component
│   ├── index.css          # Global styles
│   ├── main.tsx           # Application entry point
│   ├── store.ts           # Zustand state management
│   ├── types.ts           # TypeScript type definitions
│   └── utils.ts           # Utility functions
├── example-resume.yaml    # Sample resume data
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 💻 Coding Standards

### TypeScript/React

- Use TypeScript for all new code
- Follow React best practices and hooks guidelines
- Use functional components with hooks
- Maintain proper TypeScript typing

### Code Style

- Follow the existing code style
- Use ESLint configuration
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Commit Messages

Use clear, descriptive commit messages:

```
feat: add dark mode toggle
fix: resolve PDF export color issue
docs: update installation instructions
```

### Testing

- Test your changes thoroughly
- Ensure existing functionality still works
- Test on different browsers if making UI changes

## 🔄 Submitting Changes

### Pull Request Process

1. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and commit them:
   ```bash
   git add .
   git commit -m "feat: description of your changes"
   ```

3. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request** on GitHub with:
   - Clear title and description
   - Reference any related issues
   - Screenshots for UI changes

### Pull Request Guidelines

- Ensure your PR has a clear description
- Reference any issues it addresses
- Keep PRs focused on a single feature or fix
- Ensure CI checks pass
- Request review from maintainers

## 🐛 Reporting Issues

### Bug Reports

When reporting bugs, please include:

- **Description**: Clear description of the issue
- **Steps to reproduce**: Step-by-step instructions
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Environment**: Browser, OS, Node.js version
- **Screenshots**: If applicable

### Feature Requests

For feature requests, please include:

- **Description**: What feature you'd like to see
- **Use case**: Why this feature would be useful
- **Implementation ideas**: If you have any suggestions

## 📞 Getting Help

If you need help or have questions:

- 📧 Check existing [issues](https://github.com/TheUnknown550/Resume-Generator/issues) and [discussions](https://github.com/TheUnknown550/Resume-Generator/discussions)
- 💬 Start a [discussion](https://github.com/TheUnknown550/Resume-Generator/discussions) for questions
- 📧 Contact the maintainers

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project (MIT License).

Thank you for contributing to Resume Generator! 🎉