import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

// I didn't have time to touch these, but I prefer Jest + RTL for unit tests
// Things I would consider unit testing:
// Smoke test, does the page render
// Does the loading state show while we're fetching the data
// Do the graphs finish rendering
// Do the tables finish rendering
// Tests of each individual utility function from sharedUtilities.ts
