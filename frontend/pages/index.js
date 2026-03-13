import { useEffect, useState } from "react"

export default function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data.users)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching users:', err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">DevOps Engineering Platform</h1>
          <p className="hero-subtitle">
            Streamlining development and operations with modern containerized solutions
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="tech-stack">
            <div className="tech-item">🐳 Docker</div>
            <div className="tech-item">⚡ FastAPI</div>
            <div className="tech-item">⚛️ Next.js</div>
            <div className="tech-item">🔄 Jenkins</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-header">
          <h2>Powerful Features</h2>
          <p>Everything you need for modern DevOps practices</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Containerized Deployment</h3>
            <p>Seamless deployment with Docker containers ensuring consistency across environments</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>High Performance API</h3>
            <p>FastAPI backend providing lightning-fast REST APIs with automatic documentation</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>CI/CD Pipeline</h3>
            <p>Automated testing and deployment with Jenkins for reliable releases</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Scalable Architecture</h3>
            <p>Microservices design with Redis caching for optimal performance</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">☁️</div>
            <h3>Cloud Ready</h3>
            <p>AWS integration with S3 storage and RDS database support</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Monitoring & Logging</h3>
            <p>Comprehensive logging and monitoring for production deployments</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="section-header">
          <h2>Our Team</h2>
          <p>Meet the DevOps engineers behind this platform</p>
        </div>
        <div className="team-grid">
          {loading ? (
            <div className="loading">Loading team members...</div>
          ) : (
            users.map((user, index) => (
              <div key={index} className="team-card">
                <div className="avatar">
                  {user.charAt(0).toUpperCase()}
                </div>
                <h3>{user}</h3>
                <p className="role">
                  {user === 'siva' ? 'Lead DevOps Engineer' :
                   user === 'devops' ? 'Platform Architect' :
                   'Site Reliability Engineer'}
                </p>
                <div className="social-links">
                  <span>💼</span>
                  <span>📧</span>
                  <span>🔗</span>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Uptime</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50ms</div>
            <div className="stat-label">Response Time</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10k+</div>
            <div className="stat-label">Deployments</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <div className="about-text">
            <h2>About Our Platform</h2>
            <p>
              This DevOps platform demonstrates modern software development practices
              with containerization, automated testing, and continuous deployment.
              Built with industry-standard tools and best practices.
            </p>
            <p>
              Our solution provides a complete development environment that scales
              from local development to production deployment on cloud infrastructure.
            </p>
          </div>
          <div className="about-image">
            <div className="code-preview">
              <pre>
{`version: "3.9"
services:
  backend:
    build: ./backend
  frontend:
    build: ./frontend
  nginx:
    image: nginx:latest`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>DevOps Project</h3>
            <p>Modern containerized application platform</p>
          </div>
          <div className="footer-section">
            <h4>Technologies</h4>
            <ul>
              <li>Docker & Compose</li>
              <li>FastAPI</li>
              <li>Next.js</li>
              <li>Jenkins</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>Documentation</li>
              <li>API Reference</li>
              <li>GitHub</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>📧 devops@company.com</li>
              <li>📍 Remote First</li>
              <li>⏰ 24/7 Operations</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 DevOps Engineering Platform. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        .container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        /* Hero Section */
        .hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 100px 20px;
          display: flex;
          align-items: center;
          min-height: 80vh;
        }

        .hero-content {
          flex: 1;
          max-width: 600px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: #ff6b6b;
          color: white;
        }

        .btn-primary:hover {
          background: #ff5252;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background: white;
          color: #667eea;
        }

        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .tech-stack {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .tech-item {
          background: rgba(255, 255, 255, 0.1);
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Features Section */
        .features {
          padding: 80px 20px;
          background: #f8f9fa;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #2d3748;
        }

        .section-header p {
          font-size: 1.1rem;
          color: #718096;
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .feature-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .feature-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: #2d3748;
        }

        .feature-card p {
          color: #718096;
          line-height: 1.6;
        }

        /* Team Section */
        .team {
          padding: 80px 20px;
          background: white;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .team-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-5px);
        }

        .avatar {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;
          font-weight: bold;
          margin: 0 auto 1rem;
        }

        .team-card h3 {
          margin-bottom: 0.5rem;
          color: #2d3748;
        }

        .role {
          color: #718096;
          margin-bottom: 1rem;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          font-size: 1.5rem;
        }

        .loading {
          text-align: center;
          padding: 2rem;
          color: #718096;
        }

        /* Stats Section */
        .stats {
          padding: 60px 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1.1rem;
          opacity: 0.9;
        }

        /* About Section */
        .about {
          padding: 80px 20px;
          background: #f8f9fa;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
          align-items: center;
        }

        .about-text h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: #2d3748;
        }

        .about-text p {
          margin-bottom: 1.5rem;
          color: #718096;
          line-height: 1.7;
        }

        .code-preview {
          background: #2d3748;
          color: #e2e8f0;
          padding: 2rem;
          border-radius: 8px;
          font-family: 'Monaco', 'Menlo', monospace;
          overflow-x: auto;
        }

        .code-preview pre {
          margin: 0;
          white-space: pre-wrap;
        }

        /* Footer */
        .footer {
          background: #2d3748;
          color: white;
          padding: 60px 20px 20px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .footer-section h4 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section li {
          margin-bottom: 0.5rem;
          color: #cbd5e0;
        }

        .footer-bottom {
          border-top: 1px solid #4a5568;
          padding-top: 2rem;
          text-align: center;
          color: #cbd5e0;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            text-align: center;
            padding: 60px 20px;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .features-grid,
          .team-grid {
            grid-template-columns: 1fr;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}