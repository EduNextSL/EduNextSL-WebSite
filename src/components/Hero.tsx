import { Download, FileText } from "lucide-react";
import girlImage from "../assets/images/gril-image.png";

export default function Hero() {
  return (
    <section className="ep-hero reveal" aria-labelledby="hero-title">
      <style>{`
				.ep-hero {
					--hero-ink: #0e0d10;
					--hero-navy: #30305f;
					--hero-muted: #29294f;
					background: #f7f7f7;
					border-bottom: 3px solid var(--hero-navy);
					color: var(--hero-ink);
					overflow: hidden;
				}

				.ep-hero-inner {
					width: min(1240px, 100%);
					min-height: 500px;
					margin: 0 auto;
					padding: 56px 48px 44px;
					box-sizing: border-box;
					display: grid;
					grid-template-columns: minmax(0, 0.95fr) minmax(420px, 1.05fr);
					align-items: center;
					gap: 24px;
					text-align: left;
				}

				.ep-hero-copy {
					max-width: 520px;
					position: relative;
					z-index: 2;
				}

				.ep-hero-title {
					margin: 0 0 16px;
					font-family: 'Inter', sans-serif;
					font-size: clamp(2.0rem, 2.1vw, 2rem);
					line-height: 1.2;
					letter-spacing: -1px;
					font-weight: 800;
					color: var(--hero-ink);
				}

				.ep-hero-title em {
					color: var(--hero-navy);
					font-style: normal;
				}

				.ep-hero-description {
					max-width: 430px;
					margin: 0 0 26px;
					color: var(--hero-muted);
					font-size: 15px;
					line-height: 1.5;
					font-weight: 600;
				}

				.ep-hero-cta {
					display: inline-flex;
					align-items: center;
					justify-content: center;
					min-width: 260px;
					min-height: 58px;
					padding: 12px 28px;
					box-sizing: border-box;
					border-radius: 26px;
					background: var(--hero-navy);
					color: #ffffff;
					font-size: 24px;
					font-weight: 700;
					text-decoration: none;
					transition: background 0.2s, transform 0.2s;
				}

				.ep-hero-cta:hover {
					background: #24244b;
					transform: translateY(-2px);
				}

				.ep-hero-visual {
					height: 420px;
					min-height: 0;
					position: relative;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.ep-hero-oval {
					width: min(62%, 345px);
					height: 420px;
					border-radius: 50% 50% 45% 45%;
					position: relative;
				}

				.ep-hero-oval::before {
					content: "";
					position: absolute;
					inset: 0;
					border-radius: inherit;
					background: #273653;
				}

				.ep-hero-student {
					position: absolute;
					bottom: -1px;
					left: 50%;
					width: auto;
					height: 100%;
					max-width: none;
					transform: translateX(-50%);
					z-index: 1;
					object-fit: contain;
					filter: saturate(0.9) contrast(1.05);
				}

				.ep-hero-stat {
					position: absolute;
					display: flex;
					align-items: center;
					gap: 10px;
					min-width: 210px;
					padding: 7px 10px 7px 16px;
					border: 3px solid #81858a;
					border-radius: 24px;
					background: #e8e9e9;
					color: var(--hero-navy);
					box-sizing: border-box;
					line-height: 1.05;
					z-index: 2;
					animation: ep-stat-bounce 2.6s ease-in-out infinite;
				}

				@keyframes ep-stat-bounce {
					0%, 100% {
						transform: translateY(0);
					}
					50% {
						transform: translateY(-9px);
					}
				}

				.ep-hero-stat-download {
					top: 92px;
					right: 0;
				}

				.ep-hero-stat-questions {
					bottom: 64px;
					left: 2px;
					animation-delay: 1.3s;
				}

				@media (prefers-reduced-motion: reduce) {
					.ep-hero-stat {
						animation: none;
					}
				}

				.ep-hero-stat strong {
					display: block;
					font-size: 30px;
					font-weight: 800;
				}

				.ep-hero-stat span {
					display: block;
					font-size: 16px;
					font-weight: 700;
				}

				.ep-hero-stat-icon {
					width: 40px;
					height: 40px;
					flex: 0 0 40px;
					border-radius: 50%;
					display: grid;
					place-items: center;
					background: var(--hero-navy);
					color: #ffffff;
				}

				@media (max-width: 900px) {
					.ep-hero-inner {
						min-height: 430px;
						padding: 30px 14px 36px;
						display: block;
						position: relative;
					}

					.ep-hero-copy {
						max-width: 390px;
						text-align: left;
					}

					.ep-hero-title {
						font-size: clamp(1rem, 3vw, 1.8rem);
						letter-spacing: -0.5px;
					}

					.ep-hero-description {
						margin-right: 8px;
						font-size: 14px;
					}

					.ep-hero-cta {
						width: 260px;
						min-width: 0;
						font-size: 21px;
					}

					.ep-hero-visual {
						width: 100%;
						height: 430px;
						min-height: 0;
						position: relative;
						top: auto;
						right: auto;
						z-index: 1;
						pointer-events: none;
					}

					.ep-hero-oval {
						width: min(68%, 300px);
						height: 390px;
					}

					.ep-hero-student {
						height: 100%;
						width: auto;
					}

					.ep-hero-stat {
						min-width: 175px;
						padding: 6px 8px 6px 12px;
					}

					.ep-hero-stat-download {
						top: 74px;
						right: 0;
					}

					.ep-hero-stat-questions {
						bottom: 34px;
						left: 0;
					}

					.ep-hero-stat strong {
						font-size: 24px;
					}

					.ep-hero-stat span {
						font-size: 13px;
					}

					.ep-hero-stat-icon {
						width: 34px;
						height: 34px;
						flex-basis: 34px;
					}
				}
			`}</style>

      <div className="ep-hero-inner">
        <div className="ep-hero-copy">
          <h1 className="ep-hero-title" id="hero-title">
            Your gateway to <em>growth</em>, wherever you <em>go</em>.
          </h1>
          <p className="ep-hero-description">
            EduNext SL is a responsive platform designed to work seamlessly on
            any device. Prepare for exams on your laptop, track scholarship
            applications on your tablet, and browse urgent internships on your
            phone all with a single account.
          </p>
          <a className="ep-hero-cta" href="#guidelines">
            Get Started
          </a>
        </div>

        <div
          className="ep-hero-visual"
          aria-label="EduNext platform highlights"
        >
          <div className="ep-hero-oval">
            <img
              className="ep-hero-student"
              src={girlImage}
              alt="Student holding books"
            />
          </div>

          <div className="ep-hero-stat ep-hero-stat-download">
            <div>
              <strong>+ 1.0K</strong>
              <span>Downloads</span>
            </div>
            <div className="ep-hero-stat-icon">
              <Download size={21} aria-hidden="true" />
            </div>
          </div>

          <div className="ep-hero-stat ep-hero-stat-questions">
            <div>
              <strong>+ 1.1K</strong>
              <span>Past Questions</span>
            </div>
            <div className="ep-hero-stat-icon">
              <FileText size={21} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
