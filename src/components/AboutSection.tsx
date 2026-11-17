import actualPortrait from "../assets/images/download.jpg";

export default function AboutSection() {
  return (
    <section className="ep-about-section reveal" aria-labelledby="about-title">
      <style>{`
        .ep-about-section {
          background: #ffffff;
          padding: 46px 24px 62px;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        .ep-about-shell {
          width: min(1220px, 100%);
          margin: 0 auto;
        }

        .ep-about-kicker {
          margin: 0;
          text-align: center;
          font-size: clamp(2.2rem, 4vw, 3.6rem);
          line-height: 1;
          font-weight: 900;
          letter-spacing: -0.03em;
          color: #30305f;
        }

        .ep-about-kicker::after {
          content: "";
          display: block;
          width: 144px;
          height: 6px;
          margin: 28px auto 70px;
          background: #4d68c4;
        }

        .ep-about-panel {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(420px, 1.08fr);
          align-items: center;
          gap: clamp(36px, 6vw, 86px);
        }

        .ep-about-photo-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          aspect-ratio: 1.1;
          margin: 0;
          border: 6px solid #232154;
          border-radius: 0 16px 16px 0;
          overflow: hidden;
          background: #e8e8e8;
          box-shadow: 0 20px 40px rgba(48, 48, 95, 0.12);
        }

        .ep-about-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
          transform: scale(1.02);
        }

        .ep-about-copy {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
          min-width: 0;
          padding: 0;
        }

        .ep-about-copy > * {
          width: 100%;
        }

        .ep-about-title {
          margin: 0;
          max-width: 620px;
          font-size: clamp(1.55rem, 2.2vw, 2.25rem);
          line-height: 1.18;
          letter-spacing: -0.02em;
          font-weight: 700;
          color: #24436a;
        }

        .ep-about-text {
          margin: 0;
          max-width: 620px;
          color: #24436a;
          font-size: clamp(1.05rem, 1.5vw, 1.38rem);
          line-height: 1.55;
          font-weight: 400;
        }

        .ep-about-block {
          margin: 0;
          max-width: 620px;
          color: #24436a;
          text-align: left;
        }

        .ep-about-block h3 {
          margin: 2px 0 10px;
          color: #30305f;
          font-size: clamp(1.65rem, 2.2vw, 2.35rem);
          font-weight: 800;
          line-height: 1.1;
        }

        .ep-about-block p {
          margin: 0;
          max-width: 620px;
          color: #24436a;
          font-size: clamp(1.05rem, 1.5vw, 1.38rem);
          line-height: 1.55;
          font-weight: 400;
        }

        .ep-about-button {
          margin-top: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 68px;
          border: none;
          border-radius: 12px;
          background: #232154;
          color: #ffffff;
          font-size: clamp(1.25rem, 1.8vw, 1.75rem);
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 12px 24px rgba(48, 48, 95, 0.2);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .ep-about-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 28px rgba(48, 48, 95, 0.26);
        }

        @media (max-width: 960px) {
          .ep-about-shell {
            padding-top: 0;
          }

          .ep-about-panel {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .ep-about-photo-wrap {
            width: 100%;
            border-radius: 16px;
            order: -1;
          }

          .ep-about-copy {
            order: 1;
          }

          .ep-about-photo {
            width: 100%;
          }

          .ep-about-copy {
            align-items: flex-start;
            text-align: left;
          }

          .ep-about-title,
          .ep-about-text,
          .ep-about-block {
            max-width: 100%;
          }

          .ep-about-kicker::after {
            margin-bottom: 42px;
          }

          .ep-about-button {
            width: 100%;
          }
        }
      `}</style>

      <div className="ep-about-shell">
        <h2 className="ep-about-kicker" id="about-title">
          About Us
        </h2>

        <div className="ep-about-panel">
          <div className="ep-about-copy">
            <div className="ep-about-block">
              <p>
                Our platform brings past questions, trusted study resources,
                scholarship guidance, and internship opportunities together in
                one accessible space. We support students across Sierra Leone,
                whether they are preparing for exams, applying to university, or
                building their first career plan.
              </p>
            </div>

            <div className="ep-about-block">
              <h3>Our Vision</h3>
              <p>
                To build a more informed, connected, and confident generation of
                students with the tools and opportunities they need to thrive.
              </p>
            </div>

            <div className="ep-about-block">
              <h3>Our Mission</h3>
              <p>
                To empower students across Sierra Leone with trusted learning
                resources, practical guidance, and access to opportunities that
                help them study smart and build a brighter future.
              </p>
            </div>

            <a href="#" className="ep-about-button">
              Read More About EduNext
            </a>
          </div>

          <div className="ep-about-photo-wrap">
            <img
              className="ep-about-photo"
              src={actualPortrait}
              alt="Student smiling while holding books"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
