
import './App.css';
import Header from './Header'
import StickyHeader from './StickyHeader'
import React, { useEffect } from "react"

function App() {
  

  useEffect(() => {
    const contents = document.querySelectorAll(".content");
    intersection(contents);
  }, [])
  
  return (
    <>

    <Header />
    
    <StickyHeader />

    <div className="container">
        <div className="content">
            <h3 className="title h3">I'm a teacher turned programmer</h3>
            <div className="p-text">I'm a high school math and computer science teacher in southern California. In the past
                4 years I have taught Introductory Computer Science, AP Computer Science Principles (CS topics, Scratch,
                Python, and Processing), and AP Computer Science A (Java). I've been teaching for over 15 years and I'm
                ready for change. Throughout my life I've built projects to help myself and others. I would like to see
                what I can build in a career of programming.</div>
        </div>
        <div className="content">
            <h3 className="title h3">I built programs to help</h3>
            <p className="p-text">When getting an appointment for the COVID vaccine was difficult, I turned to automation to
                help. I built a Python bot to help me and others see when appointments became available. I also made a
                similar solution to help me find the best possible price for the new Macbook Air M1 (open-box prices)
                using the Best Buy API. I actually got the best possible price using my tool.</p>
            <hr className="hr" />
            <div className="center">
                <a href="https://github.com/batsu?tab=repositories" className="button fun" target="_tab">
                    Check it out</a>
            </div>
        </div>

        <div className="content">
            <h3 className="title h3">I built a program that does my gradebook</h3>
            <p className="p-text">My school uses an online student database for teachers to enter grades. We also have
                access to a LMS (Learning Management System) known as Canvas, by Instructure. All of my assignments are
                entered and graded in Canvas, however these grades don't populate in the student database. So, I created
                a program using Python and Chromedriver to automate grabbing the grades from Canvas and entering them
                into the online gradebook.</p>
        </div>

        <div className="content">
            <h3 className="title h3">I also built a program to do my attendance</h3>
            <p className="p-text">During the first full school year of the COVID-19 quarantine, my school utilized online
                curriculum through Edgenuity. Students had to login to the website daily in order to be marked 'present'
                for that day. There was a attendance log page that teachers had access to, but it was not an easy task
                to simply take attendance for any given period or className. So, much like my gradebook program, I leveraged
                Python and Chromedriver to automate the process. It was also very helpful as I created daily logs (in
                Excel files, using openpyxl library) for my entire student attendance.</p>
        </div>
        <div className="content">
            <h3 className="title h3">I made an application page for my school's STEM Academy</h3>
            <p className="p-text">I am currently a teacher who also fills a role as a Coordinator for my school's STEM
                Academy, which has 5 STEM pathways along with 5 CTE (Career and Technical Education) pathways. Before
                the COVID-19 pandemic, we utilized paper printed applications for families to apply to the program. This
                was an issue when we all went on lockdown. So, I looked into using Python, Flask, Bootstrap, and MongoDB
                to make an application page for my school.</p>
            <div className="center">
                <a href="https://chsstem.herokuapp.com" className="button fun" target="_tab">
                    Check it out</a>
            </div>
        </div>
        <div className="content">
            <h3 className="title h3">I enrolled in a Full Stack Developer Bootcamp</h3>
            <p className="p-text">In order to take programming seriously, I pushed myself to enroll in a rigorous coding
                bootcamp. After consideration and research, I signed up for NuCamp's Full Stack Developer Program. The
                program covers HTML, CSS, JavaScript, Bootstrap 4, React, React Native Android Development, and MongoDB.
                I've already completed the first 3 modules: Front-End Web UI Framework (Bootstrap), ReactJS
                Webdevelopment, and React Native Mobile Development. In April I will finish the final module, NodeJS and
                MongoDB backend development.</p>
            <div className="center">
                <a href="https://www.nucamp.co/bootcamp-overview/full-stack-web-mobile-development" className="button fun"
                    target="_tab">
                    Check it out</a>
            </div>
        </div>
        <div className="content">
            <h3 className="title h3">I'm learning more through coding challenges</h3>
            <p className="p-text">My first coding challenge experience began with project Euler. Since then, I've spent time
                on Hackerrank and Leetcode where I've solved over 90 problems in Python and JavaScript.</p>
        </div>
        <div className="content">
            <h3 className="title h3">I'm always trying to learn more</h3>
            <p className="p-text">Over the past 2 years, I've sought out more and more resources in order to become a better
                programmer. I have premium subscriptions to Codecademy, Scrimba, and Leetcode. I started subscribing to
                channels on YouTube that interest me such as Kevin Powell, Web Dev Simplified, and James Q Quick just to
                name a few.</p>
        </div>

        <div className="content">
            <h3 className="title h3">React Typing Game</h3>
            <p className="p-text">I built a typing game in react.</p>
            <div className="center">
                <a href="https://codesandbox.io/s/typinggame-kbj9t?file=/src/App.js" className="button fun" target="_tab">
                    Check it out</a>
            </div>
        </div>

        <div className="content">
            <h3 className="title h3">HTML/JavaScript/CSS Snake Game</h3>
            <p className="p-text">I built snake in JavaScript.</p>
            <div className="center">
                <a href="http://www.pchao.codes/snake" className="button fun" target="_tab">
                    Check it out</a>
            </div>
        </div>

        <div className="content">
            <h3 className="title h3">Django Website</h3>
            <p className="p-text">I built a website using Django.</p>
            <div className="center">
                <a href="https://pybatsu.pythonanywhere.com/" className="button fun" target="_tab">
                    Check it out</a>
            </div>
        </div>

    </div>
    </>
  );
}

export default App;

function intersection(contents) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    },
    {
      root: null,
      // Margin to when element should take action
      rootMargin: "0px",
      threshold: 0
    }
  );

  contents.forEach((content) => {
    observer.observe(content);
  });
}

