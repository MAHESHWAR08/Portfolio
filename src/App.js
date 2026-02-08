import React, { useState } from 'react';
import './App.css';
import logo from './Photo.png'

const App = () => {
  const [activeTab, setActiveTab] = useState('hello');
  const [expanded, setExpanded] = useState({
    'personal-info': true,
    'education': false,
    'tech-stack': true,
    'contacts': true,
    'tech-lang': false,
    'tech-front': false,
    'tech-back': false,
    'tech-db': false,
    'tech-tools': false
  });

  const toggleFolder = (key) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const closeTab = (e) => {
    e.stopPropagation();
    setActiveTab(null);
  };

  return (
    <div className="portfolio-container">
      {/* --- Top Navbar --- */}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => setActiveTab('hello')} style={{ cursor: 'pointer' }}>_maheshwar</div>
        <div className="nav-links">
          <button onClick={() => setActiveTab('hello')} className={activeTab === 'hello' ? 'active' : ''}>
            _hello
            {activeTab === 'hello' && <span onClick={closeTab} className="close-icon">×</span>}
          </button>
          <button onClick={() => setActiveTab('about')} className={activeTab === 'about' ? 'active' : ''}>
            _about-me
            {activeTab === 'about' && <span onClick={closeTab} className="close-icon">×</span>}
          </button>
          <button onClick={() => setActiveTab('projects')} className={activeTab === 'projects' ? 'active' : ''}>
            _projects
            {activeTab === 'projects' && <span onClick={closeTab} className="close-icon">×</span>}
          </button>
          {!['hello', 'about', 'projects'].includes(activeTab) && activeTab && (
            <button className="active">_{activeTab} <span onClick={closeTab} className="close-icon">×</span></button>
          )}
        </div>
        <div className={`nav-contact ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => setActiveTab('contact')} style={{ cursor: 'pointer' }}>
          _contact-me
        </div>
      </nav>

      <main className="main-content">
        {/* --- Sidebar --- */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <p 
              className="sidebar-title" 
              onClick={() => toggleFolder('personal-info')} 
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <span style={{ marginRight: '10px', fontSize: '12px' }}>{expanded['personal-info'] ? '▼' : '▶'}</span> personal-info
            </p>
            {expanded['personal-info'] && (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className={`file-item ${activeTab === 'career-goal' ? 'active' : ''}`} onClick={() => setActiveTab('career-goal')}>
                  <span style={{ marginRight: '10px', fontSize: '12px' }}>{expanded['career-goal'] ? '▼' : '▶'}</span> career-goal
                </li>
                <li className={`file-item ${activeTab === 'internship' ? 'active' : ''}`} onClick={() => setActiveTab('internship')}>
                  <span style={{ marginRight: '10px', fontSize: '12px' }}>{expanded['internship'] ? '▼' : '▶'}</span> internship
                </li>
                <li>
                  <div 
                    className={`file-item ${activeTab === 'education' ? 'active' : ''}`} 
                    onClick={() => { toggleFolder('education'); setActiveTab('education'); }}
                  >
                    <span style={{ marginRight: '10px', fontSize: '12px' }}>{expanded['education'] ? '▼' : '▶'}</span> education
                  </div>
                  {expanded['education'] && (
                    <ul style={{ listStyle: 'square', paddingLeft: '70px', margin: 0 }}>
                      <li className="file-item" onClick={() => setActiveTab('education')}>
                        <span className="file-icon" style={{ marginRight: '10px' }}></span> graduation
                      </li>
                      <li className="file-item" onClick={() => setActiveTab('education')}>
                        <span className="file-icon" style={{ marginRight: '10px' }}></span> diploma
                      </li>
                      <li className="file-item" onClick={() => setActiveTab('education')}>
                        <span className="file-icon" style={{ marginRight: '10px' }}></span> school
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </div>
          <div className="sidebar-section">
            <p 
              className="sidebar-title" 
              onClick={() => toggleFolder('tech-stack')} 
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <span style={{ marginRight: '10px', fontSize: '12px' }}>{expanded['tech-stack'] ? '▼' : '▶'}</span> tech-stack
            </p>
            {expanded['tech-stack'] && (
              <div style={{ paddingLeft: '0px' }}>
                {/* Programming Languages */}
                <div onClick={() => toggleFolder('tech-lang')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                   <span style={{ marginRight: '10px', fontSize: '12px', color: '#607b96' }}>{expanded['tech-lang'] ? '▼' : '▶'}</span> <span style={{color: '#607b96'}}>Programming Languages</span>
                </div>
                {expanded['tech-lang'] && (
                    <div style={{ paddingLeft: '20px' }}>
                        <p className="sidebar-item">Java</p>
                        <p className="sidebar-item">C++</p>
                    </div>
                )}

                {/* Frontend */}
                <div onClick={() => toggleFolder('tech-front')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                   <span style={{ marginRight: '10px', fontSize: '12px', color: '#607b96' }}>{expanded['tech-front'] ? '▼' : '▶'}</span> <span style={{color: '#607b96'}}>Frontend</span>
                </div>
                {expanded['tech-front'] && (
                    <div style={{ paddingLeft: '20px' }}>
                        <p className="sidebar-item">React.js</p>
                        <p className="sidebar-item">HTML</p>
                        <p className="sidebar-item">CSS</p>
                    </div>
                )}

                {/* Backend */}
                <div onClick={() => toggleFolder('tech-back')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                   <span style={{ marginRight: '10px', fontSize: '12px', color: '#607b96' }}>{expanded['tech-back'] ? '▼' : '▶'}</span> <span style={{color: '#607b96'}}>Backend</span>
                </div>
                {expanded['tech-back'] && (
                    <div style={{ paddingLeft: '20px' }}>
                        <p className="sidebar-item">JAVA+Spring Boot</p>
                        <p className="sidebar-item">REST APIs</p>
                    </div>
                )}

                {/* Databases */}
                <div onClick={() => toggleFolder('tech-db')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                   <span style={{ marginRight: '10px', fontSize: '12px', color: '#607b96' }}>{expanded['tech-db'] ? '▼' : '▶'}</span> <span style={{color: '#607b96'}}>Databases</span>
                </div>
                {expanded['tech-db'] && (
                    <div style={{ paddingLeft: '20px' }}>
                        <p className="sidebar-item">mysql</p>
                        <p className="sidebar-item">MongoDB</p>
                    </div>
                )}

                {/* Tools */}
                <div onClick={() => toggleFolder('tech-tools')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                   <span style={{ marginRight: '10px', fontSize: '12px', color: '#607b96' }}>{expanded['tech-tools'] ? '▼' : '▶'}</span> <span style={{color: '#607b96'}}>Dev Tools</span>
                </div>
                {expanded['tech-tools'] && (
                    <div style={{ paddingLeft: '20px' }}>
                        <p className="sidebar-item">Git</p>
                        <p className="sidebar-item">VS Code</p>
                    </div>
                )}
              </div>
            )}
          </div>
        </aside>

        {/* --- Editor Area --- */}
        <section className="editor-window">
          {activeTab === 'hello' && (
            <div className="hero-section">
              <div className="hero-text">
                <p className="hero-sub">Hi all. I am</p>
                <h1 className="hero-title">Maheshwar kumar singh</h1>
                <h2 className="hero-role">{'>'} Software Engineer</h2>
                <div className="hero-code">
                                 </div>
              </div>
              <div className="hero-image-container">
                <img src= {logo} alt="Profile" className="profile-photo" />
              </div>
            </div>
          )}
                  {/*  ABout Section */}
          {activeTab === 'about' && (
            <div className="code-display about-section">
              <pre>
                <code>
                  <span className="line-number"></span> {'/**'}<br/>
                  <span className="line-number"></span>A motivated and detail-oriented Computer Science graduate with a strong foundation<br/>
                  in programming languages, Basic data structures.<br/>
                 Proficient in languages such as C++, Java
                 with hands-on experience Databases like mysql and mongoDB.<br/>
                Capable of working in team environments and passionate about solving realworld problems through technology.<br/>
                Eager to contribute to innovative projects and continuously grow in a dynamic tech environment.<br/>
                  <span className="line-number"></span> **/
                </code>
              </pre>
              <div style={{ marginTop: '20px' }}>
                <a 
                  href="https://maheshwarsingh.tiiny.site" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#a4fc47',
                    color: '#000205',
                    padding: '10px 20px',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}
                >
                  Download Resume
                </a>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="education-section">
              <h2 style={{ color: '#e5e9f0', marginBottom: '20px' }}>_projects</h2>
              <div className="education-list">
                <div className="education-box">
                  <h3 style={{ color: '#4d5bce', marginBottom: '10px' }}>Project Name 1</h3>
                  <p style={{ marginBottom: '5px' }}><strong style={{ color: '#e5e9f0' }}>Tech Stack:</strong> [Tech Stack Used]</p>
                  <p style={{ marginBottom: '5px' }}>Brief description of what this project does.</p>
                  <p target="_blank" rel="noreferrer" style={{ color: '#fea55f', textDecoration: 'none', fontSize: '14px' }}>🔗 View Project</p>
                </div>
                <div className="education-box">
                  <h3 style={{ color: '#43d9ad', marginBottom: '10px' }}>Project Name 2</h3>
                  <p style={{ marginBottom: '5px' }}><strong style={{ color: '#e5e9f0' }}>Tech Stack:</strong> [Tech Stack Used]</p>
                  <p style={{ marginBottom: '5px' }}>Brief description of what this project does.</p>
                  <a href="https://github.com/MAHESHWAR08/WeatherApp" target="_blank" rel="noreferrer" style={{ color: '#fea55f', textDecoration: 'none', fontSize: '14px' }}>🔗 View Project</a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'career-goal' && (
            <div className="career-goal-section">
              <h2 style={{ color: '#e5e9f0', marginBottom: '20px' }}>_career-goal</h2>
              <p>To secure a challenging entry-level role in software development
                where I can apply my knowledge of Java, React, and problem-solving skills
                to build real-world applications while continuously learning and growing in a dynamic tech environment.</p>
            </div>
          )}

          {activeTab === 'internship' && (
            <div className="education-section">
              <h2 style={{ color: '#e5e9f0', marginBottom: '20px' }}>_internships</h2>
              <div className="education-list">
                <div className="education-box">
                  <h3 style={{ color: '#4d5bce', marginBottom: '10px' }}>Security Intern</h3>
                  <p style={{ marginBottom: '5px' }}><strong style={{ color: '#e5e9f0' }}>Company:</strong> ABIR Networks®</p>
                  <p style={{ marginBottom: '5px' }}><strong style={{ color: '#e5e9f0' }}>Duration:</strong> 01/2025 - 04/2025</p>
                  <p style={{ marginBottom: '5px' }}><strong style={{ color: '#e5e9f0' }}>-</strong> Worked with operating systems including kalilinux, Windows, Windows Server for cybersecurity operations.</p>
<p style={{ marginBottom: '5px' }}><strong style={{ color: '#e5e9f0' }}>-</strong> Executed vulnerability assessment and penetration testing utilizing tools such as Burp Suite Pro and Metasploit.</p>
<p style={{ marginBottom: '5px' }}><strong style={{ color: '#e5e9f0' }}>-</strong> Conducted web application security assessments by intercepting web requests with Burp Suite Professional.</p>
<p style={{ marginBottom: '5px' }}><strong style={{ color: '#e5e9f0' }}>-</strong> Gained hands-on experience in vulnerability assessment, and web application penetration testing.</p>
<p style={{ marginBottom: '5px' }}><strong style={{ color: '#e5e9f0' }}>-</strong> Applied knowledge of OWASP Top 10 vulnerabilities in security analysis.</p>


                </div>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="education-section">
              <h2 style={{ color: '#e5e9f0', marginBottom: '20px' }}>_education</h2>
              <div className="education-list">
                <div className="education-box">
                  <h3 style={{ color: '#4d5bce', marginBottom: '10px' }}>Bachelor of Technology</h3>
                  <p style={{ marginBottom: '5px' }}><strong style={{ color: '#e5e9f0' }}>Course Name:</strong> B.Tech</p>
                  <p style={{ marginBottom: '5px' }}><strong style={{ color: '#e5e9f0' }}>College:</strong> Oriental Institute of Science & Technology</p>
                  <p style={{ marginBottom: '5px' }}><strong style={{ color: '#e5e9f0' }}>Field:</strong> Computer Science & Engineering</p>
                  <p><strong style={{ color: '#e5e9f0' }}>Grade:</strong> 7.27 CGPA</p>
                </div>
                <div className="education-box">
                  <h3 style={{ color: '#43d9ad', marginBottom: '10px' }}>Higher Secondary OR Equivalent</h3>
                  <p style={{ marginBottom: '5px' }}><strong style={{ color: '#e5e9f0' }}>Course Name:</strong> Diploma in Engineering</p>
                  <p style={{ marginBottom: '5px' }}><strong style={{ color: '#e5e9f0' }}>School:</strong> Govt. Polytechnic Barauni</p>
                  <p style={{ marginBottom: '5px' }}><strong style={{ color: '#e5e9f0' }}>Field:</strong> Computer Science & Engineering</p>
                  <p><strong style={{ color: '#e5e9f0' }}>Grade:</strong> 74%</p>
                </div>
                <div className="education-box">
                  <h3 style={{ color: '#e99287', marginBottom: '10px' }}>Secondary School</h3>
                  <p style={{ marginBottom: '5px' }}><strong style={{ color: '#e5e9f0' }}>Course Name:</strong> Class X</p>
                  <p style={{ marginBottom: '5px' }}><strong style={{ color: '#e5e9f0' }}>School:</strong> Zila School Saharsa</p>
                  <p style={{ marginBottom: '5px' }}><strong style={{ color: '#e5e9f0' }}>Field:</strong> General</p>
                  <p><strong style={{ color: '#e5e9f0' }}>Grade:</strong> 81%</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="contact-section">
              <h2 style={{ color: '#e5e9f0', marginBottom: '20px' }}>_contact-me</h2>
              <div className="contact-details">
                <p style={{ marginBottom: '15px' }}>Feel free to reach out via the following contacts:</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '10px' }}>📧 Email: <a href="mailto:mk.2004.7008@gmail.com" style={{ color: '#fea55f', textDecoration: 'none' }}>mk.2004.7008@gmail.com</a></li>
                  <li style={{ marginBottom: '10px' }}>📞 Phone: <a href="tel:+919570307008" style={{ color: '#fea55f', textDecoration: 'none' }}>9570307008</a></li>
                  <li style={{ marginBottom: '10px' }}>💬 WhatsApp: <a href="https://wa.me/9570307008" target="_blank" rel="noreferrer" style={{ color: '#fea55f', textDecoration: 'none' }}>Connect on WhatsApp</a></li>
                  <li style={{ marginBottom: '10px' }}>📍 Location: <a href="https://www.google.com/maps/place/Mra mens PG,Bengaluru-560068" target="_blank" rel="noreferrer" style={{ color: '#fea55f', textDecoration: 'none' }}>Bengaluru, India</a></li>
                </ul>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="footer">
        <div className="footer-social">
          <span>Find me in:</span>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="footer-github">maheshwar singh</div>
      </footer>
    </div>
  );
};

export default App;