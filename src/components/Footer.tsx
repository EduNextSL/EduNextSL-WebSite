import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="ep-site-footer">
      <style>{`
        .ep-site-footer {
          background: #20264d;
          color: #e8ebfa;
          padding: 48px 24px 20px;
          text-align: left;
        }

        .ep-site-footer-inner {
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        .ep-site-footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 36px;
        }

        .ep-site-footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          color: #fff;
          font-size: 19px;
          font-weight: 750;
        }

        .ep-site-footer-brand img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ep-site-footer-description {
          max-width: 390px;
          color: #c5cbe4;
          font-size: 15px;
          line-height: 1.7;
        }

        .ep-site-footer-title {
          margin: 0 0 16px;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
        }

        .ep-site-footer-links,
        .ep-site-footer-links {
          flex-direction: column;
          gap: 10px;
        }

        .ep-site-footer a {
          color: #c5cbe4;
          font-size: 14px;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .ep-site-footer a:hover {
          color: #fff;
        }

        .ep-site-footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          padding-top: 18px;
          color: #c5cbe4;
          font-size: 13px;
        }

        @media (max-width: 700px) {
          .ep-site-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px 24px;
          }

          .ep-site-footer-about {
            grid-column: 1 / -1;
          }

          .ep-site-footer-bottom {
            flex-direction: column;
          }
        }

        @media (max-width: 420px) {
          .ep-site-footer-grid {
            grid-template-columns: 1fr;
          }

          .ep-site-footer-about {
            grid-column: auto;
          }
        }
      `}</style>
      <div className="ep-site-footer-inner">
        <div className="ep-site-footer-grid">
          <section className="ep-site-footer-about">
            <div className="ep-site-footer-brand">
              <img src="/edunextsl.jpg" alt="" />
              <span>EduNext SL</span>
            </div>
            <p className="ep-site-footer-description">
              Helping students across Sierra Leone prepare for exams, find
              learning resources, and discover new opportunities.
            </p>
          </section>

          <section>
            <h2 className="ep-site-footer-title">Explore</h2>
            <ul className="ep-site-footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="/#guidelines">Study resources</a>
              </li>
              <li>
                <a href="/#contact">Contact us</a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="ep-site-footer-title">Legal</h2>
            <ul className="ep-site-footer-links">
              <li>
                <Link to="/terms">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <a href="mailto:edunextsl.org.sl">Contact EduNext SL</a>
              </li>
            </ul>
          </section>
        </div>
        <div className="ep-site-footer-bottom">
          <span>© {new Date().getFullYear()} EduNext SL. All rights reserved.</span>
          <span>Made for learners in Sierra Leone.</span>
        </div>
      </div>
    </footer>
  );
}
