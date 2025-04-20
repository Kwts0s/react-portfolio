import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './cookieConsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('portfolioCookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('portfolioCookieConsent', 'accepted', { expires: 365 });
    setIsVisible(false);
    console.log('Cookies accepted');
    // Add analytics initialization here if needed
  };

  const handleDecline = () => {
    Cookies.set('portfolioCookieConsent', 'declined', { expires: 365 });
    setIsVisible(false);
    console.log('Cookies declined');
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent">
      <p>
        This website uses cookies to improve your experience. By continuing, you agree to our use of cookies.
        <a href="/privacy-policy" className="cookie-consent__link">
          Learn more
        </a>
      </p>
      <div className="cookie-consent__buttons">
        <button className="cookie-consent__button cookie-consent__button--accept" onClick={handleAccept}>
          Accept
        </button>
        <button className="cookie-consent__button cookie-consent__button--decline" onClick={handleDecline}>
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;