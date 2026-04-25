import React from 'react';
import { profile } from '../data/profile';
import { skills } from '../data/skills';
import { timeline } from '../data/timeline';
import { projects } from '../data/projects';
import { certifications } from '../data/certifications';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <h2 className="section-title">Professional Resume</h2>

        <div className="resume-content">
          {/* Left Column */}
          <div className="resume-column left-column">
            {/* Profile */}
            <div className="profile-card">
              <div className="profile-header">
                <h1>{profile.name}</h1>
                <p className="professional-title">{profile.title}</p>
              </div>
              <div className="contact-info">
                <p><strong>Location:</strong> {profile.location}</p>
                <p><strong>Phone:</strong> {profile.phone}</p>
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>LinkedIn:</strong> <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">{profile.linkedin}</a></p>
                <p><strong>GitHub:</strong> <a href={profile.github} target="_blank" rel="noopener noreferrer">{profile.github}</a></p>
              </div>
            </div>

            {/* Summary */}
            <div className="summary-card">
              <h3>Professional Summary</h3>
              <p>Graduate Engineer specialized in Artificial Intelligence & Data Science with an overall CGPA of 8.30 and a Master's in Data Analytics. Programming foundations in Python, Java, and SQL. Experienced in MEAN stack development, data analysis, and machine learning projects. Skilled in problem solving, teamwork, and delivering scalable technical solutions. Seeking to contribute to innovative engineering teams in leading organizations.</p>
            </div>

            {/* Skills */}
            <div className="skills-card">
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                {skills.categories.map((category) => (
                  <div key={category.name} className="skill-category">
                    <h4>{category.name}</h4>
                    <div className="skill-list">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="skill-item">
                          <span className="skill-name">{skill.name}</span>
                          <div className="skill-progress">
                            <div className="skill-progress-bar" style={{ width: `${skill.level}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="resume-column right-column">
            {/* Experience */}
            <div className="experience-card">
              <h3>Professional Experience</h3>
              {timeline.experience.map((exp) => (
                <div key={exp.id} className="experience-item">
                  <div className="experience-header">
                    <h4>{exp.title}</h4>
                    <span className="experience-date">{exp.date}</span>
                  </div>
                  <p className="experience-org">{exp.organization}</p>
                  <ul className="experience-highlights">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Placeholder for future experience */}
              {!timeline.experience.length && (
                <p className="placeholder-text">Add your professional experience here as you gain it. This section is structured for easy updates.</p>
              )}
            </div>

            {/* Education */}
            <div className="education-card">
              <h3>Education</h3>
              {timeline.education.map((edu) => (
                <div key={edu.id} className="education-item">
                  <div className="education-header">
                    <h4>{edu.title}</h4>
                    <span className="education-date">{edu.date}</span>
                  </div>
                  <p className="education-org">{edu.organization}</p>
                  <ul className="education-highlights">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="projects-card">
              <h3>Key Projects</h3>
              {projects.map((project, index) => (
                <div key={project.id} className={`project-item ${index === 0 ? 'featured-project' : ''}`}>
                  <h4>{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  {index === 0 && (
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
                        View GitHub Repository
                      </a>
                    </div>
                  )}
                  <div className="project-metrics">
                    {project.metrics.map((metric) => (
                      <span key={metric.label} className="metric-badge">
                        {metric.label}: {metric.value}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="certifications-card">
              <h3>Certifications</h3>
              <div className="certifications-grid">
                {certifications.map((cert) => (
                  <div key={cert.id} className="cert-item" style={{ borderLeft: `4px solid ${cert.color}` }}>
                    <h4>{cert.name}</h4>
                    <p><strong>Issued by:</strong> {cert.issuer}</p>
                    <p><strong>Date:</strong> {cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;