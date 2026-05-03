import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TreeProvider } from './context/TreeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { DecisionTreePage } from './pages/DecisionTree';
import { Docs } from './pages/Docs';

function App() {
  return (
    <TreeProvider>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/eligible" element={<DecisionTreePage />} />
              <Route path="/docs" element={<Docs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </TreeProvider>
  );
}

export default App;
