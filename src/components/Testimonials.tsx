import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import studentPair from "../assets/images/download.jpg";
import zainab from "../assets/images/Zainab Central University.jpg";
import samuella from "../assets/images/Samuella UNIMAK university.jpg";

import graduatePortrait from "../assets/images/Rectangle.png";
import studentPortrait from "../assets/images/gril-image.png";

const testimonials = [
  {
    quote:
      "Before EduNext SL, I wasted so much time and money trying to print past papers, and the internet was always slow. Now, I just download the WASSCE papers once and study offline anywhere. This app is a lifesaver for students living in areas with poor network.",
    name: "Samuella Moiwo",
    role: "WASSCE Candidate",
    institution: "University of Makeni",
    institutionLogo: "/unimak.png",
    image: samuella,
    alt: "Two students carrying books and backpacks",
  },
  {
    quote:
      "Before EduNext SL, I wasted so much time and money trying to print past papers, and the internet was always slow. Now, I just download the WASSCE papers once and study offline anywhere. This app is a lifesaver for students living in areas with poor network.",
    name: "Zainab Bangalie",
    role: "WASSCE Candidate",
    institution: "Central University",
    institutionLogo: "/central.jpg",
    image: zainab,
    alt: "Two students carrying books and backpacks",
  },
  {
    quote:
      "EduNext helped me find the right resources for my next step. I can prepare at my own pace, keep my study materials close, and feel more confident about the opportunities ahead.",
    name: "Hawa M. Sesay",
    role: "University Applicant",
    institution: "EduNext SL Learning Hub",
    institutionLogo: "/edunextsl.jpg",
    image: graduatePortrait,
    alt: "Student wearing graduation attire and holding a notebook",
  },
  {
    quote:
      "Having past questions and guidance in one place changed the way I study. I spend less time searching and more time learning, even when my connection is limited.",
    name: "Mohamed A. Bangura",
    role: "Senior Secondary Student",
    institution: "EduNext SL Learning Hub",
    institutionLogo: "/edunextsl.jpg",
    image: studentPortrait,
    alt: "Student smiling while holding books",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex(
        (currentIndex) => (currentIndex + 1) % testimonials.length,
      );
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length);
  };

  return (
    <section
      className="ep-testimonials reveal"
      aria-labelledby="testimonial-title"
    >
      <style>{`
        .ep-testimonials {
          background: #f4f4f4;  
          padding: 64px 24px 76px;
          color: #0e0d10;
        }

        .ep-testimonials-inner {
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        .ep-testimonials-header {
          margin-bottom: 52px;
          text-align: center;
        }

        .ep-testimonials-kicker {
          margin: 0 0 24px;
          color: #101010;
          font-size: clamp(1rem, 1.6vw, 1.35rem);
          font-weight: 800;
        }

        .ep-testimonials-title {
          margin: 0;
          color: #050505;
          font-size: clamp(2.45rem, 5vw, 4.5rem);
          line-height: 0.98;
          letter-spacing: -0.055em;
          font-weight: 900;
        }

        .ep-testimonials-title span {
          color: #2f3d66;
        }

        .ep-testimonial-slide {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(360px, 0.98fr);
          min-height: 500px;
          align-items: stretch;
        }

        .ep-testimonial-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 24px 54px 24px 0;
        }

        .ep-testimonial-quote-mark {
          width: 48px;
          height: 48px;
          margin: 0 0 10px;
          color: #090909;
        }

        .ep-testimonial-quote {
          max-width: 540px;
          margin: 0;
          color: #171717;
          font-size: clamp(1rem, 1.35vw, 1.25rem);
          line-height: 1.38;
          font-weight: 500;
        }

        .ep-testimonial-author {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          width: min(100%, 340px);
          margin-top: 26px;
          margin-left: auto;
          margin-right: 0;
          color: #0a0a0a;
          font-size: 1em;
          line-height: 1.15;
          font-weight: 900;
        }

        .ep-testimonial-institution-logo {
          width: 104px;
          height: 104px;
          flex: 0 0 104px;
          display: block;
          padding: 8px;
          box-sizing: border-box;
          border: 0;
          border-radius: 14px;
          background: #d9d9d9;
          object-fit: contain;
        }

        .ep-testimonial-author-details {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .ep-testimonial-role {
          margin-top: 3px;
          color: #0a0a0a;
          font-size: 0.7rem;
          font-weight: 800;
        }

        .ep-testimonial-institution {
          color: #667085;
          font-size: 0.78rem;
          font-weight: 700;
        }

        .ep-testimonial-visual {
          width: 100%;
          height: clamp(400px, 40vw, 520px);
          min-height: 0;
          margin-left: auto;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: hidden;
          border-radius: 10px;
          aspect-ratio: 1.7;
          background: #222131;
        }

        .ep-testimonial-visual img {
          display: block;
          width: auto;
          height: 96%;
          max-width: 84%;
          object-fit: contain;
          object-position: center bottom;
          align-self: flex-end;
        }

        .ep-testimonial-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 28px;
          padding-right: calc(41.5% + 10px);
        }

        .ep-testimonial-arrows {
          display: flex;
          gap: 10px;
        }

        .ep-testimonial-arrow {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(15, 23, 42, 0.18);
          border-radius: 50%;
          background: #ffffff;
          color: #222131;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }

        .ep-testimonial-arrow:hover {
          background: #2f3d66;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .ep-testimonial-dots {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ep-testimonial-dot {
          width: 9px;
          height: 9px;
          padding: 0;
          border: 0;
          border-radius: 50%;
          background: #c4c5c9;
          cursor: pointer;
          transition: width 0.2s, background 0.2s;
        }

        .ep-testimonial-dot.is-active {
          width: 28px;
          border-radius: 10px;
          background: #2f3d66;
        }

        @media (max-width: 780px) {
          .ep-testimonials {
            padding: 48px 16px 56px;
          }

          .ep-testimonials-header {
            margin-bottom: 30px;
          }

          .ep-testimonial-slide {
            display: flex;
            flex-direction: column-reverse;
            min-height: 0;
          }

          .ep-testimonial-visual {
            height: 320px;
            min-height: 0;
            max-height: none;
            aspect-ratio: 1.5;
          }

          .ep-testimonial-copy {
            padding: 28px 4px 8px;
          }

          .ep-testimonial-author {
            width: 100%;
            max-width: 340px;
          }

          .ep-testimonial-controls {
            padding-right: 0;
            margin-top: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ep-testimonial-arrow,
          .ep-testimonial-dot {
            transition: none;
          }
        }
      `}</style>

      <div className="ep-testimonials-inner">
        <header className="ep-testimonials-header">
          <p className="ep-testimonials-kicker">Our Students Testimonials</p>
          <h2 className="ep-testimonials-title" id="testimonial-title">
            What Students <span>Say&apos;s About Us</span>
          </h2>
        </header>

        <div className="ep-testimonial-slide" key={activeIndex}>
          <div className="ep-testimonial-copy">
            <Quote
              className="ep-testimonial-quote-mark"
              aria-hidden="true"
              fill="currentColor"
            />
            <p className="ep-testimonial-quote">{activeTestimonial.quote}</p>
            <div className="ep-testimonial-author">
              <div className="ep-testimonial-author-details">
                <span>{activeTestimonial.name}</span>
                <span className="ep-testimonial-role">
                  ({activeTestimonial.role})
                </span>
                <span className="ep-testimonial-institution">
                  {activeTestimonial.institution}
                </span>
              </div>
              <img
                className="ep-testimonial-institution-logo"
                src={activeTestimonial.institutionLogo}
                alt={`${activeTestimonial.institution} logo`}
              />
            </div>
          </div>

          <div className="ep-testimonial-visual">
            <img src={activeTestimonial.image} alt={activeTestimonial.alt} />
          </div>
        </div>

        <div
          className="ep-testimonial-controls"
          aria-label="Testimonial controls"
        >
          <div className="ep-testimonial-arrows">
            <button
              className="ep-testimonial-arrow"
              type="button"
              onClick={showPrevious}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="ep-testimonial-arrow"
              type="button"
              onClick={showNext}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="ep-testimonial-dots">
            {testimonials.map((testimonial, index) => (
              <button
                className={`ep-testimonial-dot ${index === activeIndex ? "is-active" : ""}`}
                key={testimonial.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial from ${testimonial.name}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
