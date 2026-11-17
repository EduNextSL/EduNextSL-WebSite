import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const sections = [
  {
    title: "1. Information we handle",
    paragraphs: [
      "When you browse EduNext SL, our hosting provider may receive basic technical information such as your IP address, browser type, and requests needed to deliver and protect the website.",
      "If you contact us, we will use the details and message you provide to respond. If you choose to use a feature that requests information, we will explain what is needed and why at the point of collection.",
    ],
  },
  {
    title: "2. How we use information",
    paragraphs: [
      "We use information to operate, secure, maintain, and improve EduNext SL; respond to questions; and provide features you request. We do not sell personal information.",
    ],
  },
  {
    title: "3. Cookies and similar technologies",
    paragraphs: [
      "The website may use technologies that are necessary for its operation, security, or user preferences. Your browser can provide controls for cookies and site data. Blocking them may affect some features.",
    ],
  },
  {
    title: "4. Service providers and external links",
    paragraphs: [
      "Our hosting and infrastructure providers may process technical information on our behalf to deliver the website. We may also link to third-party services, such as schools, scholarship providers, or other learning resources. Those services have their own privacy policies and practices.",
      "If social sign-in or another third-party feature is introduced, the relevant provider may share information with us as described when you authorize that feature. You can review and revoke permissions through the provider.",
    ],
  },
  {
    title: "5. Retention and security",
    paragraphs: [
      "We keep information only for as long as reasonably needed for the purposes described in this policy, to meet applicable requirements, or to resolve issues. We use reasonable measures to protect information, but no internet transmission or storage method can be guaranteed completely secure.",
    ],
  },
  {
    title: "6. Children and young people",
    paragraphs: [
      "EduNext SL is intended to support students, including young people. We do not knowingly ask children to provide personal information that is not needed to use a feature. A parent or guardian who believes a child has provided personal information may contact us to request its review or deletion.",
    ],
  },
  {
    title: "7. Your choices and requests",
    paragraphs: [
      "Depending on where you live and the information involved, you may be able to request access to, correction of, or deletion of information we hold about you. Contact us with your request. We may need to verify your identity before acting.",
    ],
  },
  {
    title: "8. Changes and contact",
    paragraphs: [
      "We may update this policy as the website or our practices change. The latest version will be posted here with its revision date. For privacy questions or requests, contact us at edunextsl.org.sl.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="ep-terms-page">
      <style>{`
        .ep-terms-page {
          display: flex;
          min-height: 100vh;
          flex-direction: column;
          background: #f7f8fc;
          color: #39435c;
        }

        .ep-terms-content {
          width: min(900px, calc(100% - 40px));
          margin: 0 auto;
          padding: 64px 0 80px;
          flex: 1;
          text-align: left;
        }

        .ep-terms-eyebrow {
          margin-bottom: 12px;
          color: #4d68c4;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .ep-terms-title {
          margin: 0 0 14px;
          color: #20264d;
          font-size: clamp(34px, 5vw, 48px);
          line-height: 1.15;
          letter-spacing: -0.03em;
        }

        .ep-terms-updated {
          margin-bottom: 34px;
          color: #6a7287;
          font-size: 14px;
        }

        .ep-terms-intro,
        .ep-terms-section {
          border: 1px solid #e6e9f1;
          border-radius: 14px;
          background: #fff;
          padding: 24px;
          box-shadow: 0 8px 24px rgba(32, 38, 77, 0.04);
        }

        .ep-terms-intro {
          margin-bottom: 16px;
        }

        .ep-terms-section {
          margin-top: 14px;
        }

        .ep-terms-section h2 {
          margin: 0 0 12px;
          color: #20264d;
          font-size: 19px;
        }

        .ep-terms-section p,
        .ep-terms-intro {
          font-size: 15px;
          line-height: 1.75;
        }

        .ep-terms-section p + p {
          margin-top: 12px;
        }

        .ep-terms-back {
          display: inline-block;
          margin-top: 28px;
          color: #405bb5;
          font-size: 15px;
          font-weight: 650;
          text-decoration: none;
        }

        .ep-terms-back:hover {
          text-decoration: underline;
        }

        @media (max-width: 600px) {
          .ep-terms-content {
            padding: 44px 0 56px;
          }

          .ep-terms-intro,
          .ep-terms-section {
            padding: 20px;
          }
        }
      `}</style>
      <Header />
      <main className="ep-terms-content">
        <p className="ep-terms-eyebrow">EduNext SL · Legal</p>
        <h1 className="ep-terms-title">Privacy Policy</h1>
        <p className="ep-terms-updated">Last updated: November 17, 2026</p>
        <p className="ep-terms-intro">
          This policy describes how EduNext SL handles information when you
          visit our website or contact us. It applies to the website and its
          current features.
        </p>
        {sections.map(({ title, paragraphs }) => (
          <section className="ep-terms-section" key={title}>
            <h2>{title}</h2>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
        <Link className="ep-terms-back" to="/">
          ← Back to EduNext SL
        </Link>
      </main>
      <Footer />
    </div>
  );
}
