import Navbar from './components/Navbar';
import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './components/News';
import { useState } from 'react';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar';
import SearchNews from './components/SearchNews';

function App() {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <LoadingBar
          height={2}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path="/" key="home" element={<Homepage apiKey={apiKey} setProgress={setProgress} />} />
          <Route path="/business" key="business" element={<News setProgress={setProgress} apiKey={apiKey} category="business" />} />
          <Route path="/entertainment" key="entertainment" element={<News setProgress={setProgress} apiKey={apiKey} category="entertainment" />} />
          <Route path="/world" key="world" element={<News setProgress={setProgress} apiKey={apiKey} category="world" />} />
          <Route path="/general" key="general" element={<News setProgress={setProgress} apiKey={apiKey} category="general" />} />
          <Route path="/health" key="health" element={<News setProgress={setProgress} apiKey={apiKey} category="health" />} />
          <Route path="/science" key="science" element={<News setProgress={setProgress} apiKey={apiKey} category="science" />} />
          <Route path="/sports" key="sports" element={<News setProgress={setProgress} apiKey={apiKey} category="sports" />} />
          <Route path="/technology" key="technology" element={<News setProgress={setProgress} apiKey={apiKey} category="technology" />} />
          <Route path="/search" key="searchNews" element={<SearchNews setProgress={setProgress} apiKey={apiKey} />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
