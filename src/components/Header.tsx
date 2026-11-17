import React, { useState } from "react";
import { Mail, Phone, User, Menu, X } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="ep-header-wrapper reveal">
      <style>{`
        .ep-header-wrapper {
          width: 100%;
          font-family: 'Inter', sans-serif;
          background: #ffffff;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .ep-top-bar {
          color: #ffffff;
          display: flex;
          align-items: stretch;
          font-size: 12px;
          min-height: 48px;
          position: relative;
          overflow: hidden;
          z-index: 10;
        }

        .ep-top-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 16px;
          padding: 0 22px 0 30px;
          flex-wrap: nowrap;
          position: relative;
          z-index: 2;
          margin-left: -100px;
          border-radius: 0 0 0 100px;
          background: #30305f;
        }

        .ep-follow-label {
          font-size: 16px;
          font-weight: 400;
          color: rgba(255,255,255,0.85);
          white-space: nowrap;
        }

        .ep-social-group {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .ep-social-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.16);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
          flex-shrink: 0;
          color: #ffffff;
          text-decoration: none;
        }

        .ep-social-icon:hover {
          opacity: 0.7;
          transform: translateY(-1px);
        }

        .ep-contact-group {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .ep-contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          color: rgba(255,255,255,0.92);
          font-size: 12px;
          text-decoration: none;
        }

        .ep-contact-icon {
          width: 24px;
          height: 24px;
          padding: 5px;
          box-sizing: border-box;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.16);
          flex-shrink: 0;
          opacity: 0.9;
        }

        .ep-divider {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 300;
          font-size: 18px;
        }

        .ep-login-btn {
          background-color: #4d68c4;
          display: flex;
          align-items: center;
          min-width: 300px;
          box-sizing: border-box;
          padding: 0 24px 0 20px;
          gap: 10px;
          z-index: 1;
          font-weight: 600;
          font-size: 18px;
          text-decoration: none;
          color: #ffffff;
          cursor: pointer;
          transition: background 0.2s;
          white-space: nowrap;
          border-radius: 0;
          flex-shrink: 0;
        }

        .ep-login-btn:hover {
          background-color: #5b76d2;
        }

        .ep-user-icon {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ---------- Main Nav Bar ---------- */
        .ep-main-nav {
          max-width: 1240px;
          margin: 0 auto;
          padding: 10px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .ep-logo-area {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .ep-logo-image {
          display: block;
          width: auto;
          height: 64px;
          max-width: 150px;
          object-fit: contain;
        }

        .ep-nav-links {
          display: flex;
          align-items: center;
          gap: 30px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .ep-nav-links a {
          text-decoration: none;
          color: #1e293b;
          font-weight: 600;
          font-size: 14.5px;
          transition: color 0.2s;
        }

        .ep-nav-links a:hover {
          color: #2fb6e0;
        }

        .ep-mobile-toggle {
          display: none;
          background: #262654;
          border: none;
          border-radius: 6px;
          width: 34px;
          height: 34px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #ffffff;
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 768px) {
          .ep-top-bar {
            flex-direction: column;
            align-items: stretch;
            overflow: visible;
          }

          .ep-login-btn {
            width: 100%;
            min-width: 0;
            min-height: 46px;
            justify-content: center;
            padding: 8px 16px;
            border-radius: 0;
          }

          .ep-top-right {
            margin-left: 0;
            border-radius: 0;
            padding: 10px 14px;
            gap: 10px 14px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .ep-follow-label {
            font-size: 11.5px;
          }

          .ep-social-icon {
            width: 20px;
            height: 20px;
          }

          .ep-contact-icon {
            width: 20px;
            height: 20px;
            padding: 4px;
          }

          .ep-social-group {
            gap: 12px;
          }

          .ep-contact-item span {
            display: none;
          }

          .ep-divider {
            display: none;
          }

          .ep-contact-group {
            gap: 8px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .ep-main-nav {
            position: relative;
            padding: 10px 16px;
            box-sizing: border-box;
          }

          .ep-logo-image {
            height: 50px;
            max-width: 130px;
          }

          .ep-mobile-toggle {
            display: flex;
          }

          .ep-nav-links {
            display: ${mobileMenuOpen ? "flex" : "none"};
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            box-sizing: border-box;
            background: #ffffff;
            padding: 18px 20px;
            box-shadow: 0 10px 15px rgba(0,0,0,0.08);
            border-bottom: 1px solid #e2e8f0;
            gap: 14px;
            text-align: center;
            z-index: 99;
          }
        }
      `}</style>

      <div className="ep-top-bar">
        <a href="/waitlist" className="ep-login-btn" data-link>
          <span className="ep-user-icon">
            <User size={24} strokeWidth={2.5} />
          </span>
          Login/Register
        </a>

        <div className="ep-top-right">
          {/* Follow Us Label & Social Icons */}
          <span className="ep-follow-label">
            <span className="ep-follow-full">Follow Us:</span>
            <span className="ep-follow-short">Follow/Contact Us</span>
          </span>

          <div className="ep-social-group">
            <a href="#" className="ep-social-icon">
              <FaFacebookF aria-hidden="true" />
            </a>
            <a href="#" className="ep-social-icon">
              <FaLinkedinIn aria-hidden="true" />
            </a>
            <a href="#" className="ep-social-icon">
              <FaInstagram aria-hidden="true" />
            </a>
            <a href="#" className="ep-social-icon">
              <FaXTwitter aria-hidden="true" />
            </a>
          </div>

          <span className="ep-divider">|</span>

          {/* Contact Group (Email & Phone) */}
          <div className="ep-contact-group">
            <a href="mailto:edunextsl.org.sl" className="ep-contact-item">
              <Mail className="ep-contact-icon" size={16} />
              <span>edunextsl.org.sl</span>
            </a>
            <span className="ep-divider">|</span>
            <a href="tel:+23276589691" className="ep-contact-item">
              <Phone className="ep-contact-icon" size={16} />
              <span>+232 76 589 691</span>
            </a>
          </div>
        </div>
      </div>

      <div className="ep-main-nav">
        <a href="/" className="ep-logo-area" data-link>
          <img
            className="ep-logo-image"
            src="/edunextsl.jpg"
            alt="EduNext SL"
          />
        </a>

        <ul className="ep-nav-links">
          <li>
            <a href="/" data-link>
              Home
            </a>
          </li>
          <li>
            <a href="/#guidelines" data-link>
              Guidelines
            </a>
          </li>
          <li>
            <a href="/#what-we-do" data-link>
              What We Do
            </a>
          </li>
          <li>
            <a href="/#contact" data-link>
              Contact Us
            </a>
          </li>
        </ul>

        <button
          className="ep-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <style>{`
        .ep-follow-short { display: none; }
        @media (max-width: 768px) {
          .ep-follow-full { display: none; }
          .ep-follow-short { display: inline; }
        }
      `}</style>
    </header>
  );
}
