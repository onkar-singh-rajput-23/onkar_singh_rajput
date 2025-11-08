import { useState } from "react";
import { skills } from "../data/portfolio";
import "./UI/Skills.css";

type SkillCategory =
  | "all"
  | "frontend"
  | "backend"
  | "AI and Machine Learning"
  | "tools"
  | "soft";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");
  const [showAll, setShowAll] = useState(false);

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  // Show only important skills initially for ALL categories
  const INITIAL_SKILLS_COUNT = {
    all: 12,
    frontend: 6,
    backend: 6,
    "AI and Machine Learning": 6,
    tools: 4,
    soft: 4,
  };

  const limitForCategory = INITIAL_SKILLS_COUNT[activeCategory] || 10;

  const displayedSkills = !showAll
    ? filteredSkills.slice(0, limitForCategory)
    : filteredSkills;

  const hasMoreSkills = filteredSkills.length > limitForCategory;

  const categories = [
    { id: "all" as SkillCategory, label: "All Skills" },
    { id: "frontend" as SkillCategory, label: "Frontend" },
    { id: "backend" as SkillCategory, label: "Backend" },
    {
      id: "AI and Machine Learning" as SkillCategory,
      label: "AI and Machine Learning",
    },
    { id: "tools" as SkillCategory, label: "Tools & DevOps" },
    { id: "soft" as SkillCategory, label: "Soft Skills" },
  ];

  const handleCategoryChange = (category: SkillCategory) => {
    setActiveCategory(category);
    setShowAll(false); // Reset show all when changing category
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          Technologies and tools I work with to bring ideas to life
        </p>

        <div className="skills-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {displayedSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {hasMoreSkills && (
          <div className="show-more-container">
            <button
              className="btn btn-primary show-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll
                ? "Show Less"
                : `Show More (${
                    filteredSkills.length - limitForCategory
                  } more)`}
            </button>
          </div>
        )}

        <div className="skills-summary">
          <div className="summary-card">
            <div className="summary-icon">💻</div>
            <h3>Frontend Development</h3>
            <p>
              Creating responsive, interactive, and performant user interfaces
            </p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">⚙️</div>
            <h3>Backend Development</h3>
            <p>Building scalable server-side applications and APIs</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🤖</div>
            <h3>AI & Machine Learning</h3>
            <p>
              Building intelligent systems with LangChain, Autogen & ML
              libraries
            </p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🛠️</div>
            <h3>DevOps & Tools</h3>
            <p>Implementing CI/CD pipelines and cloud infrastructure</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
