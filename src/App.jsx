import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';

function App() {
  const [theme, setTheme] = useState('dark');

  // 다크모드 초기화
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <Router basename="/newway-mission">
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <main className="flex-1 mobile-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/blood-declaration"
              element={<Home />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
