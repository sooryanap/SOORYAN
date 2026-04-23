import React from 'react';
import { profile } from '../data/profile';
import { skills } from '../data/skills';
import { projects } from '../data/projects';
import { timeline } from '../data/timeline';
import { certifications } from '../data/certifications';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>{profile.name}</h1>
        <p className="tagline">{profile.tagline}</p>
        <div className="metrics">
          <div className="metric">
            <h3>{profile.metrics.projectsCompleted}</h3>
            <p>Projects</p>
          </div>
          <div className="metric">
            <h3>{profile.metrics.toolsMastered}</h3>
            <p>Tools</p>
          </div>
          <div className="metric">
            <h3>{profile.metrics.certifications}</h3>
            <p>Certifications</p>
          </div>
          <div className="metric">
            <h3>{profile.metrics.yearsExperience}</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </header>

      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.categories.map((category) => (
            <div key={category.name} className="skill-category" style={{ borderLeft: `4px solid ${category.color}` }}>
              <h3>{category.name}</h3>
              <ul>
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <span>{skill.name}</span>
                    <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-metrics">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="metric-item">
                    <span className="metric-label">{metric.label}</span>
                    <span className="metric-value">{metric.value}</span>
                  </div>
                ))}
              </div>
              <div className="project-insights">
                <h4>Insights:</h4>
                <ul>
                  {project.insights.map((insight, idx) => (
                    <li key={idx}>{insight}</li>
                  ))}
                </ul>
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <h2>Experience & Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Education</h3>
            <div className="timeline-content">
              {timeline.education.map((edu) => (
                <div key={edu.id} className="edu-item">
                  <h4>{edu.title}</h4>
                  <p className="org">{edu.organization}</p>
                  <p className="date">{edu.date}</p>
                  <ul>
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="timeline-item">
            <h3>Experience</h3>
            <div className="timeline-content">
              {timeline.experience.map((exp) => (
                <div key={exp.id} className="exp-item">
                  <h4>{exp.title}</h4>
                  <p className="org">{exp.organization}</p>
                  <p className="date">{exp.date}</p>
                  <ul>
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="certifications-section">
        <h2>Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card" style={{ borderLeft: `4px solid ${cert.color}` }}>
              <h3>{cert.name}</h3>
              <p className="issuer">Issued by: {cert.issuer}</p>
              <p className="date">Date: {cert.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;