import { experiences, education } from "../data/portfolio";
import "./UI/Resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <p className="section-subtitle">
          My professional journey and educational background
        </p>

        <div className="resume-actions">
          <a href="/resume.pdf" download className="btn btn-primary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Resume
          </a>
        </div>

        <div className="resume-content">
          <div className="resume-section">
            <h3 className="resume-section-title">
              <span className="section-icon">💼</span>
              Work Experience
            </h3>
            <div className="timeline">
              {experiences.map((exp) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-period">{exp.period}</span>
                    <h4>{exp.title}</h4>
                    <h5>{exp.company}</h5>
                    <ul>
                      {exp.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">
              <span className="section-icon">🎓</span>
              Education
            </h3>
            <div className="timeline">
              {education.map((edu) => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-period">{edu.period}</span>
                    <h4>{edu.degree}</h4>
                    <h5>{edu.institution}</h5>
                    {edu.description && <p>{edu.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="certifications">
          <h3 className="resume-section-title">
            <span className="section-icon">🏆</span>
            Certifications & Achievements
          </h3>
          <div className="cert-grid">
            <div className="cert-item">
              <h4>Agentic AI Certification</h4>
              <p>Udemy • July 25, 2023</p>
            </div>
            <div className="cert-item">
              <h4>Responsive Web Design</h4>
              <p>freeCodeCamp • 2023</p>
            </div>
            <div className="cert-item">
              <h4>International Conference in Brain Science</h4>
              <p>Participation Certificate • January 23-26, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
