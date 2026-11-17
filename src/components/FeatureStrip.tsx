import { CircleHelp, Headphones, Users } from "lucide-react";

const features = [
  { label: "Community Support", icon: Users },
  { label: "Life Time Support", icon: Headphones },
  { label: "1.2K Past Questions", icon: CircleHelp },
];

export default function FeatureStrip() {
  return (
    <section className="ep-feature-strip reveal" aria-label="EduNext benefits">
      <style>{`
        .ep-feature-strip {
          border-top: 1px solid #30305f;
          border-bottom: 1px solid #30305f;
          background: #ffffff;
          color: #0e0d10;
        }

        .ep-feature-strip-inner {
          width: min(1240px, 100%);
          min-height: 98px;
          margin: 0 auto;
          padding: 14px 44px;
          box-sizing: border-box;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: center;
          gap: 32px;

        }

        .ep-feature-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
          min-width: 0;
        }

        .ep-feature-label {
          font-size: 20px;
          line-height: 1.2;
          font-weight: 800;
          white-space: nowrap;
        }

        .ep-feature-icon {
          width: 46px;
          height: 46px;
          padding: 7px;
          box-sizing: border-box;
          flex: 0 0 46px;
          border: 4px solid #33405f;
          border-radius: 50%;
          color: #33405f;
        }

        @media (max-width: 768px) {
          .ep-feature-strip-inner {
            min-height: auto;
            padding: 18px 20px;
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .ep-feature-item {
            justify-content: space-between;
            gap: 18px;
          }

          .ep-feature-label {
            font-size: 17px;
          }

          .ep-feature-icon {
            width: 42px;
            height: 42px;
            flex-basis: 42px;
          }
        }
      `}</style>

      <div className="ep-feature-strip-inner">
        {features.map(({ label, icon: Icon }) => (
          <div className="ep-feature-item" key={label}>
            <span className="ep-feature-label">{label}</span>
            <Icon className="ep-feature-icon" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
