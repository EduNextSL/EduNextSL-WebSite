const expectations = [
  {
    title: "Master Your Exam with Real Past Questions",
    body: "Dive into our extensive library of past exam questions. Our collection, organized by subject and topic, allows you to practice under real conditions, identify common question patterns, and build the confidence you need to succeed on exam day.",
  },
  {
    title: "Personalized Tips from Your AI Study Partner",
    body: "Get smart, data-driven study tips tailored just for you. Our AI assistant analyzes your performance on practice questions to identify your strengths and weaknesses. It then provides personalized advice, recommends specific topics to review, and suggests effective study strategies to help you learn smarter, not just harder.",
  },
  {
    title: "Unlock Scholarships & Internships",
    body: "Go beyond exams. Discover verified scholarship listings, career mentorship, and internship opportunities across Sierra Leone tailored to your computer science or academic profile, all in one centralized hub.",
  },
];

export default function WhatToExpect() {
  return (
    <section
      className="ep-what-to-expect reveal"
      aria-labelledby="expect-title"
    >
      <style>{`
        .ep-what-to-expect {
          background: #33415f;
          color: #ffffff;
          padding: 36px 26px;
        }

        .ep-expect-title {
          margin: 0 0 34px;
          text-align: center;
          font-size: clamp(2rem, 3.5vw, 3rem);
          line-height: 1.1;
          font-weight: 800;
        }

        .ep-expect-grid {
          width: min(1200px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
        }

        .ep-expect-card {
          position: relative;
          min-height: 246px;
          padding: 40px 24px 24px;
          box-sizing: border-box;
          border-radius: 7px;
          background: #ffffff;
          color: #0e0d10;
          text-align: center;
        }

        .ep-expect-number {
          position: absolute;
          top: -3px;
          left: -15px;
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border: 5px solid #33415f;
          border-radius: 50%;
          background: #33415f;
          color: #ffff;
          font-size: 28px;
          font-weight: 800;
        }

        .ep-expect-card-title {
          display: block;
          min-height: 40px;
          color: #30305f;
          font-size: 16px;
          line-height: 1.15;
          font-weight: 800;
        }

        .ep-expect-card-body {
          margin: 30px auto 0;
          max-width: 310px;
          font-size: 13px;
          line-height: 1.18;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .ep-what-to-expect {
            padding: 32px 18px;
          }

          .ep-expect-title {
            margin-bottom: 28px;
          }

          .ep-expect-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .ep-expect-card {
            min-height: 220px;
          }
        }
      `}</style>

      <h2 className="ep-expect-title" id="expect-title">
        What to expect
      </h2>

      <div className="ep-expect-grid">
        {expectations.map(({ title, body }, index) => (
          <article className="ep-expect-card" key={title}>
            <span className="ep-expect-number">{index + 1}</span>
            <strong className="ep-expect-card-title">{title}</strong>
            <p className="ep-expect-card-body">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
