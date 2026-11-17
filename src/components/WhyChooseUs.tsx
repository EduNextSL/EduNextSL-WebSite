import { ArrowRight, BookOpenCheck, GraduationCap, Rocket } from "lucide-react";

const reasons = [
  {
    title: "Smart study tools",
    text: "Access exam-focused resources, topic drills, and structured revision support built for real academic progress.",
    metric: "1.2K+",
    icon: BookOpenCheck,
  },
  {
    title: "Career-ready guidance",
    text: "Find scholarships, internship leads, and opportunities that connect learning with your next step.",
    metric: "350+",
    icon: GraduationCap,
  },
  {
    title: "Fast progress",
    text: "Follow clear learning paths and stay motivated with actionable insights that help you reach your goals faster.",
    metric: "4.9/5",
    icon: Rocket,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="ep-why-choose reveal"
      aria-labelledby="why-choose-title"
    >
      <style>{`
        .ep-why-choose {
          background: #f4f4f4;
          color: #0f172a;
          padding: 52px 26px 72px;
        }

        .ep-why-inner {
          width: min(1240px, 100%);
          margin: 0 auto;
        }

        .ep-why-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .ep-why-badge {
          display: inline-block;
          margin-bottom: 14px;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(47, 61, 102, 0.08);
          color: #2f3d66;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .ep-why-title {
          margin: 0;
          font-size: clamp(2.2rem, 3vw, 3.5rem);
          line-height: 1.08;
          letter-spacing: -0.05em;
          font-weight: 900;
          color: #101827;
        }

        .ep-why-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
          margin-top: 20px;
        }

        .ep-why-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 320px;
          padding: 26px 22px 22px;
          border-radius: 22px;
          background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(248,249,252,0.9));
          border: 1px solid rgba(28, 58, 91, 0.08);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
          overflow: hidden;
        }

        .ep-why-card::before {
          content: "";
          position: absolute;
          inset: 0 auto auto 0;
          width: 100%;
          height: 8px;
          background: linear-gradient(90deg, #2f3d66, #7b9acb);
        }

        .ep-why-icon-wrap {
          width: 62px;
          height: 62px;
          display: grid;
          place-items: center;
          border-radius: 18px;
          background: linear-gradient(135deg, #eaf0ff, #f6f0ff);
          color: #2f3d66;
          margin-bottom: 22px;
        }

        .ep-why-card-metric {
          margin: 12px 0 8px;
          color: #2f3d66;
          font-size: 2rem;
          line-height: 1;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .ep-why-card h3 {
          margin: 0 0 12px;
          font-size: clamp(1.35rem, 1.65vw, 1.8rem);
          line-height: 1.2;
          font-weight: 800;
          color: #101827;
        }

        .ep-why-card p {
          margin: 0;
          color: #475467;
          font-size: 1rem;
          line-height: 1.7;
        }

        .ep-why-link {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding-top: 18px;
          color: #2f3d66;
          font-weight: 800;
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .ep-why-grid {
            grid-template-columns: 1fr;
          }

          .ep-why-card {
            min-height: 260px;
          }
        }
      `}</style>

      <div className="ep-why-inner">
        <div className="ep-why-header">
          <span className="ep-why-badge">Why students choose us</span>
          <h2 className="ep-why-title" id="why-choose-title">
            Study smarter, grow faster, and move forward with confidence.
          </h2>
        </div>

        <div className="ep-why-grid">
          {reasons.map(({ title, text, metric, icon: Icon }) => (
            <article className="ep-why-card" key={title}>
              <div className="ep-why-icon-wrap">
                <Icon size={28} strokeWidth={2.2} />
              </div>
              <div className="ep-why-card-metric">{metric}</div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#" className="ep-why-link">
                Learn more <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
