import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import BusinessSetupPage from './pages/BusinessSetupPage.jsx';
import GoldenVisaPage from './pages/GoldenVisaPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ResidentialRealEstatePage from './pages/ResidentialRealEstatePage.jsx';
import CommercialRealEstatePage from './pages/CommercialRealEstatePage.jsx';
import BusinessBuySellPage from './pages/BusinessBuySellPage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import { navItems, contactDetails } from './components/Data.js';

function App() {
  // Get initial page from URL if it exists
  const getInitialPage = () => {
    const path = window.location.pathname;
    console.log('Current path:', path); // Debug
    
    // Map URLs to your navItems page identifiers
    const pathMap = {
      '/': 'home',
      '/about': 'aboutpage',           // Matches navItems: "aboutpage"
      '/businesssetup': 'businesssetup',
      '/commercialrealestate': 'commercial',  // Matches navItems: "commercial"
      '/residentialrealestate': 'residential', // Matches navItems: "residential"
      '/goldenvisa': 'goldenvisa',
      '/contact': 'contactpage',       // Matches navItems: "contactpage"
      '/businessbuysell': 'buyingselling' // Matches navItems: "buyingselling"
    };
    
    const page = pathMap[path] || 'home';
    console.log('Mapped to page:', page);
    return page;
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage());

  const handleNavClick = (page) => {
    console.log('Navigating to:', page);
    setCurrentPage(page);
    
    // Map internal page identifiers to public URLs
    const urlMap = {
      'home': '/',
      'aboutpage': '/about',           // aboutpage → /about
      'businesssetup': '/businesssetup',
      'commercial': '/commercialrealestate',  // commercial → /commercialrealestate
      'residential': '/residentialrealestate', // residential → /residentialrealestate
      'goldenvisa': '/goldenvisa',
      'contactpage': '/contact',       // contactpage → /contact
      'buyingselling': '/businessbuysell' // buyingselling → /businessbuysell
    };
    
    const path = urlMap[page] || '/';
    console.log('Setting URL to:', path);
    window.history.pushState({}, '', path);
    
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      console.log('popstate triggered');
      setCurrentPage(getInitialPage());
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    console.log('Rendering page:', currentPage);
    switch (currentPage) {
      case 'home':
        return <HomePage handleNavClick={handleNavClick} />;
      case 'aboutpage':  // Must match navItems
        return <AboutPage handleNavClick={handleNavClick} />;
      case 'businesssetup':
        return <BusinessSetupPage handleNavClick={handleNavClick} />;
      case 'goldenvisa':
        return <GoldenVisaPage handleNavClick={handleNavClick} />;
      case 'contactpage':  // Must match navItems
        return <ContactPage handleNavClick={handleNavClick} />;
      case 'residential':  // Must match navItems
        return <ResidentialRealEstatePage handleNavClick={handleNavClick} />;
      case 'commercial':  // Must match navItems
        return <CommercialRealEstatePage handleNavClick={handleNavClick} />;
      case 'buyingselling':  // Must match navItems
        return <BusinessBuySellPage handleNavClick={handleNavClick} />;
      default:
        console.log('Page not found, defaulting to home:', currentPage);
        return <HomePage handleNavClick={handleNavClick} />;
    }
  };

  return (
    <div className="App">
      <Header 
        page={currentPage}
        handleNavClick={handleNavClick}
        navItems={navItems}
        contactDetails={contactDetails}
      />
      <main>
        {renderPage()}
      </main>
      <Footer 
        handleNavClick={handleNavClick}
        contactDetails={contactDetails}
      />
      <WhatsAppButton />
    </div>
  );
}

export default App;