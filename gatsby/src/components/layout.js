import React from 'react';
import Header from './header';
import CookieConsentBanner from './cookie-consent';
import '../styles/global.css';

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-8">{children}</main>
      <CookieConsentBanner />
    </div>
  );
};

export default Layout;
