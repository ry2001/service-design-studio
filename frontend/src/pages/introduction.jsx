import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button.jsx";

export default function Introduction() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        🧠 Introduction: Building a Web App with Vite + Flask
      </h1>

      <blockquote>
        <p className="pb-2">
          I felt that this might be helpful for you to learn how to build a
          super simple web application. I would like to screen record the whole
          process, but unfortunately, this is too random and I do not have any
          plan on what to include. Thus, I will not do it otherwise I will have
          to spend extra time (that I don't have) to edit the video.
        </p>
        <p className="pb-2">
          Note that I built this example as a side-project, not an official
          courseware. So it is not a production-ready application, not
          everything is in best practices, and I will not cover some important
          stuffs, such as database, deployment, etc. You can suggest what to
          add, I will try my best and squeeze some time to add them in if
          possible.
        </p>
        <p className="pb-2">
          Here, I will try to explain what are the basic/bare-minimum concepts
          you will need to know. You are encouraged (actually, is MUST) to read
          more, because I will explain some ideas in my own words (or just
          ChatGPT it), which might not be accurate.
        </p>
        <p className="pb-2">
          Lastly, you are <strong className="text-red-500">NOT ALLOWED</strong>{" "}
          to complain about the UI design, unless you are willing to do it. :)
        </p>
        <p className="text-right pt-1">- Your TA</p>
      </blockquote>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📚 Prerequisites</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Basic understanding of <strong>HTML</strong> and{" "}
            <strong>CSS</strong>
          </li>
          <li>
            Familiarity with basic <strong>JavaScript</strong>
          </li>
          <li>
            Familiarity with basic <strong>Python</strong> (which you must
            already know)
          </li>
          <li>
            Basic understanding of <strong>RESTful APIs</strong>, refer to
            Chapter 3.6 in your weekly readings (Week 2)
          </li>
          <li>
            Basic understanding of <strong>Git</strong>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎯 Overview</h2>
        <p>
          This example demonstrates how to build a web application using
          <strong> Vite (frontend)</strong> and <strong>Flask (backend)</strong>
          . It includes:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Frontend with Vite and React <a href="/frontend">here</a>
          </li>
          <li>
            Backend API with Flask <a href="/backend">here</a>
          </li>
          <li>
            Communication between frontend and backend through APIs{" "}
            <a href="/backend">here</a> (the last section)
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📁 Folder Structure</h2>
        <p>
          This is how I would structure the project folder. I prefer to separate
          the client-side (frontend) and server-side (backend) in differnt
          folders. You can have your own preference on the folder structure.
        </p>
        <pre>
          {`your-project-folder/
├── frontend/              # Frontend folder (client-side)
│   ├── public/            # static files
│   │   └── some_images.png
│   └── src/
│       ├── main.jsx
│       ├── assets/        # static files
│       │   └── some_images.png
│       ├── pages/         # individual pages
│       │   ├── App.jsx
│       │   └── OtherPages.jsx
│       ├── components/    # reusable components
│       │   └── ReusableComponents.jsx
│       └── styles/        # CSS files
│           └── global.css
├── backend/               # Backend folder (server-side)
    └── app.py
`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          🎨 Frontend (Vite + React)
        </h2>
        <p>
          In this example, I will be using Vite, a React framework to build. You
          can also check out to some other frameworks such as{" "}
          <a href="https://angular.dev/">Angular</a>,{" "}
          <a href="https://nextjs.org/">NextJS</a>.
        </p>
        <p>
          For styling, you can use plain CSS, but I would be using an additional
          package, <a href="https://tailwindcss.com/">TailwindCSS</a>. This is
          an inline CSS package.
        </p>
        <pre>
          {`# This is an example of inline CSS
<div className="bg-blue-500 p-5"> 
  <h1 className="text-3xl font-bold">
    Hello, World!
  </h1>
</div>`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚙️ Backend (Flask)</h2>
        <p className="mb-2">
          The Flask backend handles HTTP requests and responds with JSON data.
          We use
          <code>flask</code> and
          <code>flask-cors</code> to allow cross-origin access.
          <br />
          Please refer to the Github repository for code examples.
        </p>
        <pre>
          {`from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__) # Create Flask app
CORS(app)             # Allow cross-origin access to your Flask app
`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          🔗 How Frontend and Backend Communicate
        </h2>
        <p>In the bare minimum, this is how the communication works:</p>
        <ol className="list-decimal list-inside space-y-1 pl-5">
          <li>Frontend makes requests to backend</li>
          <li>Backend processes the request</li>
          <li>Backend returns a response to frontend</li>
        </ol>
        <blockquote>
          <p>
            Let's use an example to help you understand. You are asking ChatGPT
            a question. In the website, you will type the question in the input
            box and click the "Send" button. Once the button is clicked, the
            frontend will send a request to the backend (here, the Large
            Language Model). The backend will process your request and returns a
            response (the answer to your question) to the frontend. Lastly, the
            frontend will render the response.
          </p>
          <p>
            P.S. This is a oversimplified explanation on how they communicate.
          </p>
        </blockquote>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✨ Remarks</h2>
        <p>
          If you have no idea the function should be implemented on the frontend
          or backend, think about what are the things you need to render. You
          should process as least as possible on the frontend.
        </p>
      </section>

      <section className="mb-6">
        <div className="flex flex-row-reverse">
          <Button children={"Next Page"} onClick={() => navigate("/git")} />
        </div>
      </section>
    </div>
  );
}
