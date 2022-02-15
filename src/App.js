import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Events,
  Contact,
  NotFound,
  Services,
  CompanyHistory,
  Location,
} from './pages/pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}>
        <Route path="services" element={<Services />} />
        <Route path="company-history" element={<CompanyHistory />} />
        <Route path="location" element={<Location />} />
      </Route>
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
