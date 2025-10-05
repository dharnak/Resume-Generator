// store.ts
import { create } from 'zustand';
import type { ResumeData, TemplateType, Theme } from './types';

interface ResumeStore {
  resumeData: ResumeData | null;
  template: TemplateType;
  theme: Theme;
  setResumeData: (data: ResumeData) => void;
  setTemplate: (template: TemplateType) => void;
  toggleTheme: () => void;
}

export const useResumeStore = create<ResumeStore>((set) => ({
  resumeData: null,
  template: 'modern',
  theme: 'light',
  setResumeData: (data) => set({ resumeData: data }),
  setTemplate: (template) => set({ template }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));