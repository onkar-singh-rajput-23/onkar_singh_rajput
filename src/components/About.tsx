import "./UI/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="/assets/profile.png" alt="Profile" />
            <div className="stats-grid">
              <div className="stat-item">
                <h3>6+</h3>
                <p>Major Projects</p>
              </div>
              <div className="stat-item">
                <h3>3</h3>
                <p>Platforms</p>
              </div>
              <div className="stat-item">
                <h3>2</h3>
                <p>Internships</p>
              </div>
              <div className="stat-item">
                <h3>20+</h3>
                <p>Technologies</p>
              </div>
            </div>
          </div>
          <div className="about-text">
            <h3>Hi, I'm Onkar Singh Rajput - Full Stack & AI Developer</h3>
            <p>
              I'm a BTech graduate from IIT Jodhpur (2021-2025) specializing in
              Bioscience and Bioengineering, with expertise in iOS Development,
              Web Development, and Agentic AI. I'm currently working at Ixigo
              (since June 2025) and completed an internship at KbCloudtech,
              building iOS apps with SwiftUI, React-based web applications, and
              backend systems.
            </p>
            <p>
              My technical expertise spans iOS development with SwiftUI and
              UIKit (currently developing Rewards SDK at Ixigo), full-stack web
              development with React.js, Next.js, Django, and cutting-edge
              Agentic AI systems using LangChain, LangGraph, and Autogen. I've
              built diverse projects including iOS weather apps, MERN stack
              e-commerce platforms, voting systems, and revolutionary AI
              projects like a self-replicating agent network with 20+ parallel
              agents.
            </p>
            <p>
              Beyond coding, I've held leadership positions as Secretary of
              Kabaddi Club and Frame-X Film Society at IIT Jodhpur. I'm
              passionate about building innovative solutions across mobile, web,
              and AI domains, always eager to learn and take on new challenges.
            </p>

            <div className="about-values">
              <h4>Core Values</h4>
              <div className="values-grid">
                <div className="value-item">
                  <span className="value-icon">🎯</span>
                  <div>
                    <h5>Quality First</h5>
                    <p>Delivering excellence in every line of code</p>
                  </div>
                </div>
                <div className="value-item">
                  <span className="value-icon">🚀</span>
                  <div>
                    <h5>Innovation</h5>
                    <p>Embracing new technologies and methodologies</p>
                  </div>
                </div>
                <div className="value-item">
                  <span className="value-icon">🤝</span>
                  <div>
                    <h5>Collaboration</h5>
                    <p>Working together to achieve great results</p>
                  </div>
                </div>
                <div className="value-item">
                  <span className="value-icon">📚</span>
                  <div>
                    <h5>Continuous Learning</h5>
                    <p>Always growing and improving skills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
