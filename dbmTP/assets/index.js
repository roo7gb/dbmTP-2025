import React from 'react';
import { createRoot } from 'react-dom/client';
import MyApp from './app.js';

const root = createRoot(document.getElementById('root'));
root.render(<MyApp />);