---
name: Pull Request
description: Create a pull request
title: "[PR] "
body:
- type: markdown
  attributes:
    value: |
      Thanks for contributing! Please fill out the form below to help us review your changes.

- type: textarea
  id: description
  attributes:
    label: Description
    description: Describe the changes you made and why.
    placeholder: What changes did you make and why?
  validations:
    required: true

- type: textarea
  id: related
  attributes:
    label: Related Issues
    description: Link to any related issues this PR addresses.
    placeholder: Fixes #123, Addresses #456

- type: textarea
  id: changes
  attributes:
    label: Changes Made
    description: List the specific changes you made.
    placeholder: |
      - Added new feature X
      - Fixed bug in Y
      - Updated documentation for Z
  validations:
    required: true

- type: textarea
  id: testing
  attributes:
    label: Testing
    description: How did you test your changes?
    placeholder: |
      - Tested on Chrome/Firefox/Safari
      - Verified functionality works as expected
      - Ran existing tests
  validations:
    required: true

- type: textarea
  id: screenshots
  attributes:
    label: Screenshots (if applicable)
    description: Add screenshots to show visual changes.
    placeholder: Drag and drop images here

- type: checkboxes
  id: checklist
  attributes:
    label: Checklist
    description: Please check all that apply
    options:
      - label: My code follows the project's coding standards
        required: true
      - label: I have tested my changes thoroughly
        required: true
      - label: I have updated documentation if needed
        required: true
      - label: My changes don't break existing functionality
        required: true
      - label: I have added tests for new features (if applicable)
        required: true
      - label: All tests pass
        required: true