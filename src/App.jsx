import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { ScrollToTopButton } from './components/common/ScrollToTopButton';

// Multi-Page Routes
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { StayPage } from './pages/StayPage';
import { RoomDetailPage } from './pages/RoomDetailPage';
import { DiningPage } from './pages/DiningPage';
import { SpaPage } from './pages/SpaPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { EventsPage } from './pages/EventsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ExplorePage } from './pages/ExplorePage';
import { ContactPage } from './pages/ContactPage';
import { BookPage } from './pages/BookPage';

export const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-ivory text-charcoal font-sans selection:bg-sage-500 selection:text-white">
        {/* Global Desktop & Mobile Navigation */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/stay" element={<StayPage />} />
            <Route path="/stay/:slug" element={<RoomDetailPage />} />
            <Route path="/dining" element={<DiningPage />} />
            <Route path="/spa-wellness" element={<SpaPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book" element={<BookPage />} />

            {/* Redirect any unmatched route to Homepage */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Multi-Page Footer */}
        <Footer />

        {/* Floating Scroll to Top Arrow Button */}
        <ScrollToTopButton />
      </div>
    </Router>
  );
};

export default App;
