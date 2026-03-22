import "./index.css";

function App() {
  const projects = [
    {
      title: "Cafe Mobile App",
      tech: "Android (Java/Kotlin), Retrofit, MongoDB",
      description:
        "A capstone mobile application for cafe operations and management, including user accounts, inventory features, and staff-related workflows.",
      github: "https://github.com/AndreiGania/PointsevenMobileApp",
      image: "/images/cafe.png",
    },
    {
      title: "Chat App",
      tech: "Node.js, Express, WebSockets",
      description:
        "A real-time chat application that allows users to send and receive messages instantly using WebSocket communication.",
      github: "https://github.com/AndreiGania/101478350_lab_test1_chat_app",
      image: "/images/chat.png",
    },
    {
      title: "Weather App",
      tech: "JavaScript, HTML, CSS, OpenWeatherMap API",
      description:
        "A weather application that fetches real-time weather data using the OpenWeatherMap API. Displays temperature, weather conditions, and location-based results dynamically.",
      github: "https://github.com/AndreiGania/YOUR-WEATHER-REPO",
      image: "/images/weather.png",
    },
    {
      title: "Gomoku Board Game App",
      tech: "Java",
      description:
        "A command-line implementation of the Gomoku game using a 9x9 grid with two-player gameplay. Includes turn-based logic, win condition detection, and board rendering in the console.",
      github: "https://github.com/AndreiGania/GomokuApp",
      image: "/images/gomoku.png",
    },
    {
      title: "Microservices DevOps Project",
      tech: "Spring Boot, Docker, Keycloak, PostgreSQL",
      description:
        "A multi-service backend system with API gateway, authentication, and containerized deployment using Docker Compose.",
      github: "https://github.com/AndreiGania/COMP3095-Assignment-1",
      image: "/images/microservices.png",
    },
  ];

  return (
    <div className="portfolio">
      <header className="topbar">

        <nav className="topnav">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="intro-center">
      <div className="intro-card centered">
        <h1>INTRODUCTION</h1>

        <p>
          Welcome to my online portfolio. I’m Andrei Jhoseph Gania, a Software
          Development student focused on building web, mobile, backend, and
          full-stack applications through academic and personal projects.
        </p>

        <p>
          This portfolio highlights my technical skills, academic background,
          capstone work, and project experience as I continue growing as a
          developer.
        </p>

        <div className="socials">
          <a
            href="https://github.com/AndreiGania"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>

      <main className="content-container">
        <section id="about" className="content-section">
          <h2>Bio</h2>
          <p>
            I am a Software Development student at George Brown College with
            experience building web, mobile, and backend applications. My work
            includes full-stack systems, mobile apps, API-based projects, and
            database-driven applications using technologies such as React,
            Node.js, Java, MongoDB, and Spring Boot.
          </p>
          <p>
            I enjoy developing practical solutions that solve real-world problems
            and improve user experience. Through academic and team-based projects,
            I have gained experience in software design, database integration,
            backend development, and modern development workflows. I am
            continuously learning and improving my skills in full-stack
            development, mobile applications, and software architecture.
          </p>
        </section>

        <section className="content-section">
          <h2>Resume</h2>
          <p>
            You can view my resume below, which outlines my technical skills,
            education, and project experience.
          </p>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            View Resume
          </a>
        </section>

        <section className="content-section">
          <h2>Cover Letter</h2>
          <p>
            I am writing to express my interest in a Junior Software Developer
            position. I am currently pursuing an Advanced Diploma in Computer
            Programming and Analysis at George Brown College, where I have
            developed strong skills in web, mobile, and backend development.
          </p>
          <p>
            Through my academic projects, I have built applications using
            technologies such as React, Node.js, GraphQL, Java, Android, and
            Spring Boot. My experience includes developing full-stack systems,
            working with databases like MongoDB and PostgreSQL, and implementing
            features such as authentication, API integration, and real-time
            communication.
          </p>
          <p>
            I am a motivated and detail-oriented individual who enjoys
            problem-solving and learning new technologies. I am eager to
            contribute my skills to a development team while continuing to grow as
            a software developer.
          </p>
          <p>
            Thank you for your time and consideration. I look forward to the
            opportunity to discuss how I can contribute to your team.
          </p>
          <p>Sincerely,</p>
          <p>Andrei Jhoseph Gania</p>
        </section>

        <section className="content-section">
          <h2>Career Goal / Philosophy</h2>
          <p>
            I aim to grow as a full-stack software developer by continuously improving my technical skills and building practical, 
            real-world applications. I value problem-solving, adaptability, and learning new technologies, and I strive to create solutions 
            that are both efficient and user-focused.
          </p>
        </section>

        <section className="content-section">
          <h2>Academic Credentials</h2>

          <p>
            <strong>Program:</strong> Computer Programming and Analysis
          </p>
          <p>
            <strong>College:</strong> George Brown College
          </p>

          <p>
            Recognized on the Dean’s List for achieving strong academic
            performance.
          </p>

          <div style={{ marginTop: "10px" }}>
            <a href="/deans-list.pdf" target="_blank" rel="noreferrer">
              View Dean’s List Letter
            </a>
          </div>

          <div style={{ marginTop: "10px" }}>
            <a href="/transcript.pdf" target="_blank" rel="noreferrer">
              View Academic Transcript
            </a>
          </div>
        </section>

        <section className="content-section">
          <h2>Skills</h2>
          <div className="skills">
            <span>Java</span>
            <span>JavaScript</span>
            <span>C#</span>
            <span>Python</span>
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>GraphQL</span>
            <span>Apollo Server</span>
            <span>Spring Boot</span>
            <span>Android Studio</span>
            <span>SwiftUI</span>
            <span>MongoDB</span>
            <span>MySQL</span>
            <span>PostgreSQL</span>
            <span>Room Database</span>
            <span>Docker</span>
            <span>Docker Compose</span>
            <span>Keycloak</span>
            <span>Git</span>
            <span>Postman</span>
            <span>Gradle</span>
            <span>Maven</span>
            <span>Agile</span>
            <span>Scrum</span>
          </div>
        </section>

        <section id="projects" className="content-section">
          <h2>Academic Work Samples</h2>
          <div className="projects">
            {projects.map((project, index) => (
              <div className="card" key={index}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <h3>{project.title}</h3>
                <p>
                  <strong>Tech:</strong> {project.tech}
                </p>
                <p>{project.description}</p>

                <div className="links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2>Capstone Project</h2>

          <p>
            <strong>Project:</strong> Point Seven Coffee Digital Experience
          </p>

          <h3>Project Summary</h3>
          <p>
            Point Seven Coffee Digital Experience is a capstone project focused on
            creating a unified digital ecosystem for Point Seven Coffee. The solution
            includes a customer-facing website and a staff-only Android application to
            improve customer engagement, strengthen brand presence, and support cafe
            operations across multiple locations.
          </p>

          <h3>Project Vision</h3>
          <p>
            The vision of this project is to build a centralized digital platform that
            reflects Point Seven Coffee’s brand identity while improving operational
            efficiency. The goal is to provide customers with a modern online experience
            and give staff and managers digital tools for scheduling, inventory, and
            communication.
          </p>

          <h3>Project / Business Requirements</h3>
          <ul>
            <li>
              Develop a customer-facing website with menu browsing, store locations,
              merchandise, event booking, careers, and contact features.
            </li>
            <li>
              Develop a staff-only Android application for shift scheduling, inventory
              tracking, and internal updates.
            </li>
            <li>
              Provide a backend and admin dashboard to support management, user access,
              and operations.
            </li>
          </ul>

          <h3>Project Plan</h3>
          <p>
            The project follows a phased plan including requirements gathering, UI/UX
            design, backend development, website development, Android app development,
            testing, integration, documentation, and final presentation. The planned
            project timeline runs from November 2025 to April 2026.
          </p>

          <h3>Requirements Analysis and Design</h3>
          <p>
            The system was analyzed as three main components: a customer-facing website,
            a staff Android app, and a backend/admin dashboard. High-level requirements
            focused on scalability, secure access, operational support, and consistent
            brand experience across platforms.
          </p>

          <h3>Wireframes / Mockups</h3>
          <p>
            Wireframes and mockups were created to design the layout and user flow of
            the application, including screens for login, dashboard, inventory, and
            scheduling features.
          </p>

          <div className="mockups">
            <img src="/images/wireframe1.png" alt="Wireframe 1" />
            <img src="/images/wireframe2.png" alt="Wireframe 2" />
            <img src="/images/wireframe3.png" alt="Wireframe 3" />
          </div>

          <h3>Status Reports</h3>
          <p>
            Project progress was tracked through weekly status updates, sprint progress
            reports, instructor check-ins, and milestone reviews. Major milestones
            included requirements approval, design approval, backend completion, alpha
            release, final deployment, and presentation.
          </p>

          <h3>System Implementation</h3>
          <p>
            The implementation includes a responsive customer website, a staff-only
            Android app, backend APIs, database support, and documentation. Core
            features include menu and promotions, store information, internal staff
            scheduling, inventory management, announcements, and administrative control.
          </p>

          <h3>Project Links</h3>
          <p>
            <a
              href="https://github.com/AndreiGania/PointsevenMobileApp"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repository
            </a>
          </p>
        </section>

        <section className="content-section">
          <h2>Professional Work Samples</h2>
          <p>
            My work samples highlight projects that demonstrate my ability to design
            and develop real-world applications using modern technologies.
          </p>

          <ul>
            <li>
              <strong>PointSeven Cafe Mobile App:</strong> A mobile application for
              managing cafe operations, including user authentication, inventory,
              and scheduling.
            </li>
            <li>
              <strong>Microservices DevOps Project:</strong> A distributed backend
              system using Spring Boot, Docker, and API gateway architecture.
            </li>
            <li>
              <strong>Real-Time Chat Application:</strong> A messaging application
              using WebSockets for instant communication.
            </li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Awards and Recognition</h2>
          <p>
            I have been recognized on the Dean’s List for achieving strong academic
            performance.
          </p>
          <a href="/deans-list.pdf" target="_blank" rel="noreferrer">
            View Dean’s List Letter
          </a>
        </section>

        <section id="contact" className="content-section">
          <h2>Contact</h2>
          <p>Email: andreijhosephgania@gmail.com</p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/AndreiGania"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/AndreiGania
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;