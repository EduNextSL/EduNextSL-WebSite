import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const sections = [
  {
    title: "1. About these terms",
    paragraphs: [
      "These Terms & Conditions apply to your access to and use of the EduNext SL website and its learning resources, information, and services. By using the website, you agree to these terms. If you do not agree, please do not use the website.",
    ],
  },
  {
    title: "2. Who may use the website",
    paragraphs: [
      "You may use EduNext SL for lawful learning and personal purposes. If you are under the age of 18, please use the website with the involvement of a parent, guardian, or responsible adult where appropriate.",
    ],
  },
  {
    title: "3. Acceptable use",
    paragraphs: [
      "You agree not to misuse the website, interfere with its operation, attempt to access accounts or systems without authorization, upload harmful material, or use the service in a way that violates applicable laws or another person's rights.",
      "Unless a resource says otherwise, you may use materials for your own educational purposes. Do not republish, sell, or distribute materials in a way that infringes the rights of EduNext SL or their respective owners.",
    ],
  },
  {
    title: "4. Educational information and third-party resources",
    paragraphs: [
      "We aim to keep our educational information useful and current, but we do not guarantee that every resource, listing, examination detail, scholarship, or opportunity is complete, accurate, or available. Verify important information with the relevant school, examination body, or provider before relying on it.",
      "Links to third-party websites are provided for convenience. EduNext SL does not control and is not responsible for third-party content, services, or privacy practices.",
    ],
  },
  {
    title: "5. Accounts and security",
    paragraphs: [
      "If account features are made available, you are responsible for providing accurate information and protecting access to your account. Notify us if you believe your account has been used without your permission. We may suspend access when reasonably necessary to protect users or the service.",
    ],
  },
  {
    title: "6. Intellectual property",
    paragraphs: [
      "The EduNext SL name, branding, website design, and original content belong to EduNext SL or its licensors. Third-party materials remain the property of their respective owners. These terms do not transfer ownership or grant rights beyond the limited educational use described above.",
    ],
  },
  {
    title: "7. Availability and liability",
    paragraphs: [
      "We may update, pause, or remove parts of the website as we maintain and improve the service. To the extent permitted by applicable law, the website is provided on an “as is” and “as available” basis, without guarantees that it will always be uninterrupted or error-free.",
      "Nothing in these terms excludes liability that cannot lawfully be excluded. To the extent permitted by law, EduNext SL is not liable for indirect loss arising from your use of, or inability to use, the website.",
    ],
  },
  {
    title: "8. Changes and contact",
    paragraphs: [
      "We may revise these terms when the website or applicable requirements change. Updated terms will be posted on this page. Continued use after an update means you accept the revised terms.",
      "For questions about these terms, contact us at edunextsl.org.sl.",
    ],
  },
];

export default function TermsAndConditions() {
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
        <h1 className="ep-terms-title">Terms &amp; Conditions</h1>
        <p className="ep-terms-updated">Last updated: November 17, 2026</p>
        <p className="ep-terms-intro">
          These terms explain the basic rules for using EduNext SL. Please read
          them together with any notices shown alongside a specific resource or
          service.
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
