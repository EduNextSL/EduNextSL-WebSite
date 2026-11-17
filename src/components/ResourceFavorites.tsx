import {
  BriefcaseBusiness,
  FlaskConical,
  GraduationCap,
  Stethoscope,
} from "lucide-react";

const resources = [
  { title: "Integrated Science", meta: "1.0k downloads", icon: FlaskConical },
  { title: "Scholarship Guide", meta: "New Launch", icon: GraduationCap },
  { title: "Internships", meta: "Direct Placements", icon: BriefcaseBusiness },
  { title: "Medical Resources", meta: "Explore Now", icon: Stethoscope },
];

export default function ResourceFavorites() {
  return (
    <section
      className="ep-resource-favorites reveal"
      aria-labelledby="resource-title"
    >
      <style>{`
        .ep-resource-favorites {
          background: #f7f7f7;
          color: #0e0d10;
          overflow: hidden;
          padding-bottom: 68px;
        }

        .ep-resource-heading {
          padding: 38px 20px 36px;
          text-align: center;
        }

        .ep-resource-eyebrow {
          margin: 0 0 26px;
          color: #30305f;
          font-size: 20px;
          font-weight: 800;
        }

        .ep-resource-title {
          margin: 0;
          color: #050505;
          font-size: clamp(2rem, 3.3vw, 3rem);
          line-height: 1.1;
          font-weight: 800;
        }

        .ep-resource-rail {
          width: 100%;
          overflow: hidden;
          padding: 16px 0;
          background: #33415f;
        }

        .ep-resource-track {
          display: flex;
          width: max-content;
          gap: 36px;
          animation: ep-resource-marquee 28s linear infinite;
        }

        .ep-resource-track:hover {
          animation-play-state: paused;
        }

        @keyframes ep-resource-marquee {
          from {
            transform: translateX(-90px);
          }
          to {
            transform: translateX(calc(-50% - 18px));
          }
        }

        .ep-resource-card {
          width: 270px;
          min-height: 86px;
          padding: 14px 12px 14px 14px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          border-radius: 7px;
          background: #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);
        }

        .ep-resource-card-copy {
          min-width: 0;
        }

        .ep-resource-card-title {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 19px;
          line-height: 1.1;
          font-weight: 800;
        }

        .ep-resource-card-meta {
          display: block;
          margin-top: 6px;
          color: #68708b;
          font-size: 11px;
        }

        .ep-resource-card-icon {
          width: 48px;
          height: 48px;
          padding: 8px;
          box-sizing: border-box;
          flex: 0 0 48px;
          border-radius: 7px;
          background: #d9d9d9;
          color: #33415f;
        }

        @media (max-width: 768px) {
          .ep-resource-heading {
            padding: 30px 16px 26px;
          }

          .ep-resource-eyebrow {
            margin-bottom: 16px;
            font-size: 17px;
          }

          .ep-resource-title {
            font-size: 2rem;
          }

          .ep-resource-rail {
            padding: 14px 20px;
            overflow-x: auto;
            scrollbar-width: thin;
          }

          .ep-resource-track {
            gap: 16px;
            animation: none;
          }

          .ep-resource-card {
            width: 245px;
          }
        }
      `}</style>

      <div className="ep-resource-heading">
        <p className="ep-resource-eyebrow">Student Favorites</p>
        <h2 className="ep-resource-title" id="resource-title">
          Top Resources &amp; Past Questions
        </h2>
      </div>

      <div className="ep-resource-rail">
        <div className="ep-resource-track">
          {[...resources, ...resources].map(
            ({ title, meta, icon: Icon }, index) => (
              <article className="ep-resource-card" key={`${title}-${index}`}>
                <div className="ep-resource-card-copy">
                  <strong className="ep-resource-card-title">{title}</strong>
                  <span className="ep-resource-card-meta">{meta}</span>
                </div>
                <Icon className="ep-resource-card-icon" aria-hidden="true" />
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
