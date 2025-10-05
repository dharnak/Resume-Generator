// utils.ts
import yaml from 'js-yaml';
import type { ResumeData } from './types';

export function parseResumeData(input: string, format: 'json' | 'yaml'): ResumeData {
  try {
    if (format === 'json') {
      return JSON.parse(input) as ResumeData;
    } else {
      return yaml.load(input) as ResumeData;
    }
  } catch (error) {
    throw new Error(`Failed to parse ${format.toUpperCase()}: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export function validateResumeData(data: any): data is ResumeData {
  // Basic validation - you can expand this
  return (
    data &&
    typeof data === 'object' &&
    data.personalInfo &&
    typeof data.personalInfo.name === 'string' &&
    data.summary &&
    Array.isArray(data.experience) &&
    Array.isArray(data.education) &&
    Array.isArray(data.skills)
  );
}