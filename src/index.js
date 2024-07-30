import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Blog from './pages/blog';
import Settings from './pages/settings';
import MarkdownRenderer from './components/render_markdown';
import { DataContextProvider } from './DataContext';

const MainApp = () => {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Settings />} />
          <Route path="/:category" element={<MarkdownRenderer />} />
        </Routes>
      </DataContextProvider>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainApp />);

reportWebVitals();
