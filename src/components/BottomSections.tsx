import {
  ArrowRight,
  Check,
  ChevronDown,
  Globe,
  Mail,
  MapPin,
  Phone,
  Send,
  UserRound,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import girlImage from "../assets/images/gril-image.png";

const faqs = [
  {
    question: "What is EduNext SL?",
    answer:
      "EduNext SL is a digital learning platform for students in Sierra Leone, giving access to past questions, study resources, scholarships, and internship discovery in one place.",
  },
  {
    question: "How do I find past papers, scholarships, or internships?",
    answer:
      "Use the search and discovery tools on the platform to browse by subject, category, and level. You can filter results to quickly find the right resource for your course or interest.",
  },
  {
    question: "Which exams and opportunities are covered by the platform?",
    answer:
      "The platform supports national exam preparation, university admissions, scholarship searches, career guidance, and internship matching across a wide range of academic pathways.",
  },
  {
    question:
      "Can I study and access resources without an internet connection?",
    answer:
      "Some downloadable resources are available for offline use once they are saved. For live updates, scholarship alerts, and fresh study materials, internet access is recommended.",
  },
];

const partners = [
  "UNDP",
  "NSC",
  "AIMS",
  "WASSCE",
  "SLB",
  "MEST",
  "UNICEF",
  "NIA",
];

export default function BottomSections() {
  return (
    <>
      <section className="ep-about-section" aria-labelledby="about-title">
        <style>{`
          .ep-about-section {
            background: #f4f4f4;
            color: #0e0d10;
            padding: 52px 20px 30px;
          }

          .ep-about-inner {
            width: min(1220px, 100%);
            margin: 0 auto;
            display: grid;
            grid-template-columns: minmax(310px, 0.95fr) minmax(0, 1.2fr);
            align-items: center;
            gap: 42px;
          }

          .ep-about-portrait-wrap {
            display: flex;
            justify-content: center;
          }

          .ep-about-portrait {
            width: min(100%, 390px);
            aspect-ratio: 1;
            object-fit: cover;
            border-radius: 50%;
            background: #d9d9d9;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          }

          .ep-about-copy {
            max-width: 620px;
          }

          .ep-about-kicker {
            margin: 0 0 12px;
            color: #30305f;
            font-weight: 800;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            font-size: 13px;
          }

          .ep-about-title {
            margin: 0;
            color: #0f142a;
            font-size: clamp(2.15rem, 3vw, 3rem);
            line-height: 1.05;
            font-weight: 800;
          }

          .ep-about-body {
            margin: 24px 0 0;
            max-width: 560px;
            color: #2d2f3b;
            font-size: 17px;
            line-height: 1.7;
            font-weight: 500;
          }

          .ep-about-body strong {
            color: #0a0d15;
            font-weight: 800;
          }

          .ep-about-button {
            margin-top: 26px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            min-height: 52px;
            padding: 0 26px;
            border-radius: 999px;
            background: #2d3d5d;
            color: white;
            font-size: 17px;
            font-weight: 700;
            text-decoration: none;
            box-shadow: 0 8px 18px rgba(33, 45, 78, 0.18);
          }

          .ep-about-button:hover {
            background: #243351;
          }

          @media (max-width: 900px) {
            .ep-about-inner {
              grid-template-columns: 1fr;
              gap: 24px;
            }

            .ep-about-copy {
              text-align: center;
              margin: 0 auto;
            }

            .ep-about-body {
              margin-left: auto;
              margin-right: auto;
            }
          }
        `}</style>

        <div className="ep-about-inner">
          <div className="ep-about-portrait-wrap">
            <img
              className="ep-about-portrait"
              src={girlImage}
              alt="Student smiling while holding books"
            />
          </div>

          <div className="ep-about-copy">
            <p className="ep-about-kicker">About us &amp; our mission</p>
            <h2 className="ep-about-title" id="about-title">
              Welcome to your ultimate student success platform
            </h2>
            <p className="ep-about-body">
              EduNext SL is a comprehensive ecosystem where you can access past
              questions, discover verified scholarships, and find educational
              support tailored to your academic goals. We&apos;re building a
              smarter, more connected path to learning and opportunity.
            </p>
            <p className="ep-about-body">
              <strong>Our mission</strong> is to help students prepare, grow,
              and connect with the resources and opportunities they need to
              succeed.
            </p>
            <a href="#" className="ep-about-button">
              Get Started <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="ep-testimonials" aria-labelledby="testimonial-title">
        <style>{`
          .ep-testimonials {
            background: #f4f4f4;
            color: #0e0d10;
            padding: 28px 20px 48px;
          }

          .ep-testimonials-inner {
            width: min(1220px, 100%);
            margin: 0 auto;
          }

          .ep-testimonials-header {
            margin-bottom: 28px;
            text-align: center;
          }

          .ep-testimonials-kicker {
            margin: 0;
            color: #30305f;
            font-size: 14px;
            letter-spacing: 0.08em;
            font-weight: 800;
            text-transform: uppercase;
          }

          .ep-testimonials-title {
            margin: 0;
            font-size: clamp(2rem, 4vw, 4rem);
            line-height: 0.95;
            color: #101827;
            font-weight: 800;
          }

          .ep-testimonials-grid {
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;
            gap: 30px;
            align-items: stretch;
          }

          .ep-quote-card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 350px;
            padding: 28px 28px 22px;
            border-radius: 18px;
            background: #ffffff;
            box-shadow: 0 8px 20px rgba(10, 18, 30, 0.04);
          }

          .ep-quote-mark {
            font-size: 54px;
            line-height: 1;
            color: #2f3d5f;
            font-weight: 900;
            margin: 0;
          }

          .ep-quote-text {
            margin: 16px 0;
            color: #202637;
            font-size: 16px;
            line-height: 1.7;
            font-weight: 500;
          }

          .ep-quote-author {
            margin-top: 16px;
            font-weight: 800;
            color: #0f172a;
            font-size: 17px;
          }

          .ep-quote-role {
            color: #5e6778;
            font-size: 13px;
            margin-top: 6px;
          }

          .ep-testimonial-visual {
            min-height: 350px;
            border-radius: 18px;
            background: linear-gradient(135deg, #262f52 0%, #273c62 100%);
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .ep-testimonial-visual img {
            width: min(84%, 420px);
            height: auto;
            display: block;
            object-fit: cover;
            border-radius: 0 0 60% 60%;
            transform: translateY(10px);
          }

          @media (max-width: 900px) {
            .ep-testimonials-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        <div className="ep-testimonials-inner">
          <div className="ep-testimonials-header">
            <p className="ep-testimonials-kicker">Our students testimonials</p>
            <h2 className="ep-testimonials-title" id="testimonial-title">
              Students <span style={{ color: "#2d3d5d" }}>Say&apos;s</span>{" "}
              About
            </h2>
          </div>

          <div className="ep-testimonials-grid">
            <article className="ep-quote-card">
              <div>
                <p className="ep-quote-mark">“</p>
                <p className="ep-quote-text">
                  Before ExamPrep Hub, I wasted so much time and money trying to
                  print past questions. The internet was always slow, and I had
                  to spend hours searching for the right resource. This app made
                  my learning easier and more organized.
                </p>
              </div>

              <div>
                <div className="ep-quote-author">Fatima K. Koroma</div>
                <div className="ep-quote-role">WASCCE candidate</div>
              </div>
            </article>

            <div className="ep-testimonial-visual">
              <img src={girlImage} alt="Student holding notes" />
            </div>
          </div>
        </div>
      </section>

      <section className="ep-faq-section" aria-labelledby="faq-title">
        <style>{`
          .ep-faq-section {
            background: #f4f4f4;
            padding: 18px 20px 26px;
          }

          .ep-faq-inner {
            width: min(1220px, 100%);
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1.2fr;
            gap: 40px;
            align-items: start;
          }

          .ep-faq-heading {
            font-size: clamp(2.4rem, 4vw, 4rem);
            line-height: 0.95;
            margin: 0;
            color: #0b1221;
            font-weight: 800;
          }

          .ep-faq-intro {
            margin-top: 18px;
            max-width: 430px;
            color: #31374a;
            line-height: 1.7;
            font-size: 16px;
            font-weight: 500;
          }

          .ep-faq-list {
            display: grid;
            gap: 18px;
          }

          .ep-faq-item {
            background: #ffffff;
            border-radius: 14px;
            box-shadow: 0 8px 18px rgba(10, 18, 30, 0.04);
            padding: 18px 22px;
            border: 1px solid rgba(37, 52, 90, 0.08);
          }

          .ep-faq-item-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            width: 100%;
            background: transparent;
            border: none;
            padding: 0;
            text-align: left;
            cursor: pointer;
            color: #0c1423;
            font: inherit;
          }

          .ep-faq-question {
            font-size: clamp(1.2rem, 2vw, 2rem);
            line-height: 1.15;
            font-weight: 800;
            color: #0f172a;
          }

          .ep-faq-icon {
            width: 34px;
            height: 34px;
            min-width: 34px;
            border-radius: 50%;
            background: #2d3d5d;
            color: white;
            display: grid;
            place-items: center;
          }

          .ep-faq-answer {
            margin-top: 12px;
            color: #4d586c;
            line-height: 1.7;
            font-size: 15px;
            font-weight: 500;
          }

          @media (max-width: 900px) {
            .ep-faq-inner {
              grid-template-columns: 1fr;
            }

            .ep-faq-block {
              text-align: center;
            }

            .ep-faq-intro {
              margin-left: auto;
              margin-right: auto;
            }
          }
        `}</style>

        <div className="ep-faq-inner">
          <div className="ep-faq-block">
            <h2 className="ep-faq-heading" id="faq-title">
              Frequently asked questions
            </h2>
            <p className="ep-faq-intro">
              Discover practical answers to your study questions and gain
              clarity on how EduNext SL helps you move forward with confidence.
            </p>
          </div>

          <div className="ep-faq-list">
            {faqs.map(({ question, answer }) => (
              <div className="ep-faq-item" key={question}>
                <button className="ep-faq-item-header" type="button">
                  <span className="ep-faq-question">{question}</span>
                  <span className="ep-faq-icon">
                    <ChevronDown size={16} />
                  </span>
                </button>
                <div className="ep-faq-answer">{answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ep-partners-section" aria-labelledby="partners-title">
        <style>{`
          .ep-partners-section {
            background: #f4f4f4;
            padding: 38px 20px 22px;
          }

          .ep-partners-inner {
            width: min(1220px, 100%);
            margin: 0 auto;
            display: grid;
            grid-template-columns: 0.95fr 1.2fr;
            align-items: center;
            gap: 18px;
          }

          .ep-partners-logo-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(60px, 1fr));
            gap: 18px;
            align-items: center;
          }

          .ep-partner-logo {
            aspect-ratio: 1;
            display: grid;
            place-items: center;
            border-radius: 50%;
            border: 1px solid rgba(22, 25, 43, 0.15);
            background: rgba(255, 255, 255, 0.7);
            color: #2d3d5d;
            font-weight: 800;
            font-size: 13px;
            text-align: center;
            padding: 10px;
          }

          .ep-partners-copy {
            text-align: center;
          }

          .ep-partners-title {
            margin: 0;
            color: #0f142a;
            font-size: clamp(2.15rem, 3vw, 3rem);
            line-height: 1.08;
            font-weight: 800;
          }

          .ep-partners-title strong {
            display: block;
            color: #2d3d5d;
          }

          @media (max-width: 900px) {
            .ep-partners-inner {
              grid-template-columns: 1fr;
            }

            .ep-partners-logo-grid {
              grid-template-columns: repeat(4, minmax(50px, 1fr));
            }
          }
        `}</style>

        <div className="ep-partners-inner">
          <div className="ep-partners-logo-grid" aria-label="Partner logos">
            {partners.map((partner) => (
              <div className="ep-partner-logo" key={partner}>
                {partner}
              </div>
            ))}
          </div>

          <div className="ep-partners-copy">
            <h2 className="ep-partners-title" id="partners-title">
              Our Trusted Partners
              <strong>We Have More Than 120+ Global Partner</strong>
            </h2>
          </div>
        </div>
      </section>

      <section className="ep-newsletter" aria-label="Newsletter signup">
        <style>{`
          .ep-newsletter {
            background: #f4f4f4;
            padding: 16px 20px 36px;
          }

          .ep-newsletter-inner {
            width: min(1220px, 100%);
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
          }

          .ep-newsletter-card {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
            min-height: 72px;
            border-radius: 16px;
            background: #253a5e;
            color: #ffffff;
            padding: 18px 20px;
            box-sizing: border-box;
          }

          .ep-newsletter-brand {
            font-size: 15px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            display: inline-flex;
            align-items: center;
            gap: 10px;
          }

          .ep-newsletter-email {
            flex: 1;
            min-width: 0;
            display: flex;
            align-items: center;
            gap: 10px;
            background: rgba(255,255,255,0.08);
            border-radius: 10px;
            padding: 10px 12px;
            border: 1px solid rgba(255,255,255,0.18);
          }

          .ep-newsletter-email input {
            width: 100%;
            border: none;
            background: transparent;
            color: #ffffff;
            font-size: 15px;
            outline: none;
          }

          .ep-newsletter-email input::placeholder {
            color: rgba(255,255,255,0.7);
          }

          .ep-newsletter-button {
            border: none;
            background: #ffffff;
            color: #1b2948;
            border-radius: 10px;
            min-width: 130px;
            min-height: 42px;
            font-weight: 800;
            cursor: pointer;
          }

          @media (max-width: 900px) {
            .ep-newsletter-inner {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        <div className="ep-newsletter-inner">
          <div className="ep-newsletter-card">
            <div className="ep-newsletter-brand">
              <Send size={18} /> Subscribe Now
            </div>
            <div className="ep-newsletter-email">
              <Mail size={16} />
              <input
                type="email"
                aria-label="newsletter email"
                placeholder="Your Email"
              />
            </div>
            <button className="ep-newsletter-button" type="button">
              Get Started
            </button>
          </div>

          <div className="ep-newsletter-card">
            <div className="ep-newsletter-brand">
              <Globe size={18} /> For Latest Updates
            </div>
            <div className="ep-newsletter-email">
              <Mail size={16} />
              <input
                type="email"
                aria-label="latest updates email"
                placeholder="Your Email"
              />
            </div>
            <button className="ep-newsletter-button" type="button">
              Join Now
            </button>
          </div>
        </div>
      </section>

      <footer className="ep-footer" aria-label="Site footer">
        <style>{`
          .ep-footer {
            background: #f4f4f4;
            color: #0e0d10;
            padding: 20px 20px 18px;
            border-top: 1px solid rgba(33, 42, 66, 0.1);
          }

          .ep-footer-inner {
            width: min(1220px, 100%);
            margin: 0 auto;
          }

          .ep-footer-top {
            display: grid;
            grid-template-columns: 1.15fr 0.7fr 0.7fr 1fr;
            gap: 30px;
            padding-bottom: 28px;
          }

          .ep-footer-brand {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            margin-bottom: 18px;
          }

          .ep-footer-logo {
            width: 46px;
            height: 46px;
            border-radius: 50%;
            background: #2d3d5d;
            color: white;
            display: grid;
            place-items: center;
            font-weight: 800;
          }

          .ep-footer-logo-text {
            font-weight: 800;
            color: #141b2d;
            font-size: 14px;
            line-height: 1.2;
          }

          .ep-footer-info {
            color: #3b465a;
            font-size: 15px;
            line-height: 1.7;
            margin: 0 0 20px;
          }

          .ep-footer-socials {
            display: flex;
            gap: 10px;
          }

          .ep-footer-social {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            background: #eef2ff;
            color: #26395f;
          }

          .ep-footer-title {
            margin: 0 0 18px;
            color: #0f172a;
            font-size: 18px;
            font-weight: 800;
          }

          .ep-footer-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 9px;
          }

          .ep-footer-list a,
          .ep-footer-list li {
            color: #3f4b60;
            font-size: 15px;
            text-decoration: none;
          }

          .ep-footer-bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            border-top: 1px solid rgba(20, 27, 45, 0.1);
            padding-top: 18px;
            color: #404b60;
            font-size: 14px;
          }

          .ep-footer-bottom-links {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
          }

          @media (max-width: 900px) {
            .ep-footer-top {
              grid-template-columns: 1fr 1fr;
            }

            .ep-footer-bottom {
              flex-direction: column;
              align-items: flex-start;
            }
          }

          @media (max-width: 600px) {
            .ep-footer-top {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        <div className="ep-footer-inner">
          <div className="ep-footer-top">
            <div>
              <div className="ep-footer-brand">
                <div className="ep-footer-logo">E</div>
                <div className="ep-footer-logo-text">
                  EduNext
                  <br />
                  SL
                </div>
              </div>

              <p className="ep-footer-info">
                We help students prepare for exams, discover scholarships, and
                access practical resources that support success.
              </p>

              <div className="ep-footer-socials">
                <span className="ep-footer-social">
                  <FaFacebookF size={14} />
                </span>
                <span className="ep-footer-social">
                  <FaXTwitter size={14} />
                </span>
                <span className="ep-footer-social">
                  <FaInstagram size={14} />
                </span>
                <span className="ep-footer-social">
                  <FaLinkedinIn size={14} />
                </span>
              </div>
            </div>

            <div>
              <h3 className="ep-footer-title">Get in touch!</h3>
              <ul className="ep-footer-list">
                <li>
                  <MapPin size={14} style={{ marginRight: 8 }} /> 1 Charles
                  Street, Waterloo
                </li>
                <li>
                  <Mail size={14} style={{ marginRight: 8 }} /> edunext.org.sl
                </li>
                <li>
                  <Phone size={14} style={{ marginRight: 8 }} /> +232 76 588 691
                </li>
              </ul>
            </div>

            <div>
              <h3 className="ep-footer-title">Legal</h3>
              <ul className="ep-footer-list">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>About Us</li>
                <li>Disclaimer</li>
              </ul>
            </div>

            <div>
              <h3 className="ep-footer-title">About Company</h3>
              <ul className="ep-footer-list">
                <li>Support Center</li>
                <li>Blog / Updates</li>
                <li>Scholarships</li>
                <li>Past Questions</li>
              </ul>
            </div>
          </div>

          <div className="ep-footer-bottom">
            <div className="ep-footer-bottom-links">
              <span>Privacy Policy</span>
              <span>Terms &amp; Condition</span>
            </div>
            <div>Copyright © 2025 EduNext SL. All Rights Reserved</div>
          </div>
        </div>
      </footer>
    </>
  );
}
