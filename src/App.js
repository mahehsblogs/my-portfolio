// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>My Portfolio</h1>
          <nav>
            <ul>
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">My Projects</a></li>
              <li><a href="#contact">Contact Me</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section id="about">
            <h2>About Me</h2>
            <p>Hi there! I'm Mahesh Kumar, a web developer based in Banglore. I specialize in building responsive, dynamic websites and RestAPI using the latest web technologies. I have experience with Java core, Play Framework,PostgreSQL and have completed projects for a variety of clients.</p>
          </section>
          <section id="projects">
            <h2>My Projects</h2>
            <ul>
              <li>
                <h3>Digitalization Of Manufacturing Plant</h3>
                <p>Developed Rest API for manufacturing Plant digitalization projects
Worked collaboratively with Business analyst, UI, and Data Engineer team to develop Rest API for Manufacturing Automation web application
Design and implement various use cases such as contract management, Approval workflows, PO Triggers, and Quality Assurance
Worked with data engineers, front-end developers, QA professionals, and the Dev-ops team to complete project deliverables
Tech stack: JAVA, Play Framework, PostgreSQL, Postman</p>
                <a href="#">View project</a>
              </li>
              <li>
                <h3>Sudoku Solver</h3>
                <p>Feature: A Sudoku starts with some cells containing numbers (clues), and the goal is to solve the remaining cells.Sudoku Solver Practice Project.
Technical Stack: HTML, CSS, JavaScript.
Role: Full Stack Developer.</p>
                <a href="https://mahehsblogs.github.io/Sudoku-Solver/">View project</a>
              </li>
            </ul>
          </section>
          <section id="contact">
            <h2>Contact Me</h2>
            <p>Have a question or want to work together? Feel free to contact me using the form below:</p>
            <form>
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" />
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" />
              <label for="message">Message:</label>
              <textarea id="message" name="message"></textarea>
              <button type="submit">Send</button>
            </form>
          </section>
        </main>
        <footer>
          <p>Copyright © 2023 Mahesh Kumar</p>
        </footer>
      </div>
    );
  }
}
export default App;


