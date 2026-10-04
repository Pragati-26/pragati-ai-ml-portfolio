import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const GITHUB = "https://github.com/Pragati-26";

const LINKEDIN =
  "https://www.linkedin.com/in/pragati-kesharwani-47b2a2320/";

const projects = [
  {
    title: "ReviveAI",
    tag: "AI Revenue Recovery",

    description:
      "An AI-driven revenue recovery system that predicts recovery outcomes and combines machine learning with a policy engine to automate payment-recovery decisions.",

    stack: [
      "Python",
      "XGBoost",
      "FastAPI",
      "Machine Learning",
      "Policy Engine"
    ],

    metric: "73.4% automation",

    github: "https://github.com/Pragati-26/ReviveAI",

    demo:
      "https://reviveai-1-k55n.onrender.com/",

    icon: "↗"
  },

  {
    title: "TransplantAI",
    tag: "Machine Learning / Healthcare",

    description:
      "An AI-powered donor-patient matching system using machine learning and medical compatibility factors, supported by a FastAPI backend and interactive dashboard.",

    stack: [
      "Python",
      "XGBoost",
      "FastAPI",
      "SQLAlchemy",
      "JWT"
    ],

    metric: "End-to-end ML application",

    github:
      "https://github.com/Pragati-26/Transplant-AI",


    icon: "✦"
  },

  {
    title: "MediBot",
    tag: "RAG / Generative AI",

    description:
      "A retrieval-augmented medical information chatbot using document processing, embeddings, FAISS retrieval and an instruction-tuned language model.",

    stack: [
      "LangChain",
      "FAISS",
      "Embeddings",
      "RAG",
      "Mistral"
    ],

    metric: "Top-3 retrieval",

    github: "https://github.com/Pragati-26/mediBot",

    demo:
      "https://medibot-ahnm.onrender.com",

    icon: "◎"
  },

  {
    title: "PPE Detection",
    tag: "Computer Vision",

    description:
      "A workplace safety application using a custom-trained YOLO model to detect PPE compliance from workplace images.",

    stack: [
      "Python",
      "YOLO",
      "Computer Vision",
      "Streamlit"
    ],

    metric: "Live deployed application",

    github:
      "https://github.com/Pragati-26/PPE_DETECTION",

    demo:
      "https://ppe-detection-bqjk.onrender.com/",

    icon: "⌁"
  }
];

const skills = [
  "Python",
  "SQL",
  "Machine Learning",
  "NLP",
  "Generative AI",
  "RAG",
  "Scikit-learn",
  "XGBoost",
  "LangChain",
  "FAISS",
  "FastAPI",
  "React",
  "Pandas",
  "NumPy",
  "Git",
  "YOLO"
];

function Arrow() {
  return (
    <span aria-hidden="true">
      ↗
    </span>
  );
}

function App() {
  return (
    <div className="site-shell">

      {/* NAVBAR */}

      <nav className="nav container">

        <a
          className="brand"
          href="#home"
        >
          PK<span>.</span>
        </a>

        <div className="nav-links">

          <a href="#about">
            About
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

        <a
          className="nav-cta"
          href={GITHUB}
          target="_blank"
          rel="noreferrer"
        >
          GitHub <Arrow />
        </a>

      </nav>


      <main>

        {/* HERO */}

        <section
          id="home"
          className="hero container"
        >

          <div className="hero-copy">

            <div className="eyebrow">

              <span className="status-dot" />

              Open to AI/ML opportunities

            </div>


            <h1>

              Building practical

              <span>
                {" "}
                AI systems
              </span>

              {" "}
              that solve real problems.

            </h1>


            <p className="hero-text">

              I'm Pragati Kesharwani, a B.Tech AI & ML
              student graduating in 2027, focused on
              machine learning, Generative AI, NLP and
              production-oriented AI applications.

            </p>


            <div className="hero-actions">

              <a
                className="button primary"
                href="#projects"
              >
                Explore my work <Arrow />
              </a>


              <a
                className="button secondary"
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

            </div>


            <div className="quick-facts">

              <span>
                B.Tech AI & ML
              </span>

              <span>•</span>

              <span>
                2027 Graduate
              </span>

              <span>•</span>

              <span>
                AI/ML Engineer
              </span>

            </div>

          </div>


          {/* CODE CARD */}

          <div className="hero-card">

            <div className="grid-glow" />

            <div className="code-window">

              <div className="window-top">

                <span />
                <span />
                <span />

                <small>
                  pragati_ai.py
                </small>

              </div>


              <pre>
{`class Pragati:

    role = "AI/ML Engineer"

    graduation = 2027

    focus = [
        "Machine Learning",
        "Generative AI",
        "NLP & RAG",
        "AI Applications"
    ]

    def build(self):
        return "impact"`}
              </pre>


              <div className="terminal-line">

                <b>✓</b>

                ready_to_build()

              </div>

            </div>

          </div>

        </section>


        {/* ABOUT */}

        <section
          id="about"
          className="section container"
        >

          <div className="section-label">
            01 / ABOUT
          </div>


          <div className="about-grid">

            <div>

              <h2>

                Curious about AI.

                <br />

                <span>
                  Serious about building.
                </span>

              </h2>

            </div>


            <div className="about-copy">

              <p>

                I enjoy turning machine-learning
                concepts into usable applications —
                from predictive models and computer
                vision to RAG systems and AI assistants.

              </p>


              <p>

                My goal is to grow as an AI/ML Engineer
                by working on real-world problems,
                writing reliable software, and
                continuously improving my understanding
                of modern AI systems.

              </p>

            </div>

          </div>

        </section>


        {/* PROJECTS */}

        <section
          id="projects"
          className="section container"
        >

          <div className="section-heading">

            <div>

              <div className="section-label">
                02 / FEATURED WORK
              </div>

              <h2>
                Projects that show how I build.
              </h2>

            </div>


            <a
              className="text-link"
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub <Arrow />
            </a>

          </div>


          <div className="projects-grid">

            {projects.map(
              (project) => (

                <article
                  className="project-card"
                  key={project.title}
                >

                  <div className="project-top">

                    <div className="project-icon">
                      {project.icon}
                    </div>

                    <span className="project-tag">
                      {project.tag}
                    </span>

                  </div>


                  <h3>
                    {project.title}
                  </h3>


                  <p>
                    {project.description}
                  </p>


                  <div className="metric">
                    {project.metric}
                  </div>


                  <div className="stack">

                    {project.stack.map(
                      (item) => (

                        <span key={item}>
                          {item}
                        </span>

                      )
                    )}

                  </div>


                  <div className="project-actions">

                    {project.github &&
                      project.github !==
                        "YOUR_REVIVEAI_GITHUB_URL" &&
                      project.github !==
                        "YOUR_MEDIBOT_GITHUB_URL" && (

                        <a
                          className="project-link"
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub <Arrow />
                        </a>

                      )}


                    {project.demo && (

                      <a
                        className="project-link demo-link"
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo <Arrow />
                      </a>

                    )}

                  </div>

                </article>

              )
            )}

          </div>

        </section>


        {/* SKILLS */}

        <section
          id="skills"
          className="section container"
        >

          <div className="section-label">
            03 / TOOLKIT
          </div>


          <div className="skills-grid">

            <div>

              <h2>

                Tools I use to

                <br />

                <span>
                  turn ideas into systems.
                </span>

              </h2>


              <p className="muted">

                A growing toolkit across machine
                learning, Generative AI, backend
                development and modern web applications.

              </p>

            </div>


            <div className="skill-cloud">

              {skills.map(
                (skill) => (

                  <span key={skill}>
                    {skill}
                  </span>

                )
              )}

            </div>

          </div>

        </section>


        {/* CURRENT DIRECTION */}

        <section className="section journey container">

          <div className="section-label">
            04 / CURRENT DIRECTION
          </div>


          <div className="journey-card">

            <div>

              <span className="mini-label">
                2026 → 2027
              </span>


              <h2>
                Preparing for my next AI/ML opportunity.
              </h2>

            </div>


            <p>

              I'm looking for internship and entry-level
              opportunities where I can contribute to
              ML/AI products, learn from experienced
              engineers, and turn data into useful
              decisions.

            </p>

          </div>

        </section>


        {/* CONTACT */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="container contact-inner">

            <div className="section-label">
              05 / CONTACT
            </div>


            <h2>

              Let's build something

              <br />

              <span>
                useful with AI.
              </span>

            </h2>


            <p>

              Interested in an AI/ML internship,
              project collaboration, or simply connecting?

            </p>


            <div className="contact-actions">

              <a
                className="button primary"
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <Arrow />
              </a>


              <a
                className="button secondary"
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow />
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* FOOTER */}

      <footer className="footer container">

        <span>
          © 2026 Pragati Kesharwani
        </span>

        <span>
          B.Tech AI & ML · 2027
        </span>

        <a href="#home">
          Back to top ↑
        </a>

      </footer>

    </div>
  );
}


createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <App />

  </React.StrictMode>

);