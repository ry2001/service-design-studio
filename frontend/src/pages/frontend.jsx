import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/button";
import Card from "../components/card";

const cardData = [
  {
    title: "Vite",
    description: "A fast build tool for modern web projects",
    link: "https://vitejs.dev/",
  },
  {
    title: "TailwindCSS",
    description: "A utility-first CSS framework for rapid UI development",
    link: "https://tailwindcss.com/",
  },
  {
    title: "What is props?",
    description: "Props are used to pass data from parent to child components.",
  },
];

export default function Frontend() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        🎨 Frontend Tutorial: Vite + React
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🚀 Setting Up Vite</h2>
        <p>Inside your project folder, initialize a Vite app:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          {`npm create vite@latest frontend
cd frontend
npm install
npm run dev`}
        </pre>
        <p className="mt-2">
          Choose <strong>React</strong> when prompted. This will scaffold the
          frontend inside the <code>frontend/</code> directory.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          📁 File Structure (Frontend)
        </h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          {`frontend/
├── public/            # Static files served as-is
│   └── some_items.png
└── src/
    ├── main.jsx
    ├── assets/        # Files imported in code
    │   └── some_items.png
    ├── pages/         # individual pages
    │   ├── App.jsx
    │   └── OtherPages.jsx
    ├── components/    # reusable components
    │   └── ReusableComponents.jsx
    └── styles/        # CSS files
        └── global.css
`}
        </pre>
        <p className="mt-2">
          <code>main.jsx</code> is the entry point, and <code>App.jsx</code> is
          your main component where you can set up all the routes for your app.
        </p>
        <p className="mt-2">
          My preference is to have a <code>pages/</code> folder for individual
          pages and a <code>components/</code> folder for reusable components.
          All files in <code>public/</code> are served as static files, that you
          will not use inside your code. For example, icons,{" "}
          <code>robots.txt</code>, etc. Other files you need to render in the
          page should be in the <code>assets/</code> folder.
        </p>

        <p className="mt-2">
          Here is an example of <code>App.jsx</code> file:
        </p>
        <pre>
          {`export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>                                                    # Define your routes here
          <Route path="/" element={<Home />} />                     # Home page will be "/"
          <Route path="/other_page" element={<OtherPage />} />      # Access this page at "/other_page"
          <Route path="/another_page" element={<AnotherPage />} />  # Access this page at "/another_page"
          ...
        </Routes>
      </div>
    </BrowserRouter>
  );
}`}
        </pre>
        <p className="mt-2">
          Each <code>Route</code> must have a <code>path</code> which will come
          after your URI. For example, going to{" "}
          <code>http://localhost:5173/other_page</code> will render the{" "}
          <code>OtherPage</code> component.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚛️ React Basics</h2>
        <h3 className="text-lg pt-3 pb-1">useState</h3>
        <p>
          If you will be working with some variable that can be changes, you
          should use <code>useState</code> hook to store and update values, such
          that when the page re-renders, the component still "remembers" the
          values.
        </p>
        <pre>
          {`import { useState } from 'react';

# useState will initialize [value, function to update value] with the initalValue you provided in the function
const [value, setValue] = useState(initialValue);
`}
        </pre>
        <h3 className="text-lg pt-3 pb-1">useEffect</h3>
        <p>
          If you want to run side effects, such as fetching data from an API,
          you should use <code>useEffect</code> hook. Here is an example of how
          to use these hooks:
        </p>
        <pre>
          {`import { useState } from 'react';
          
useEffect(() => {
  // Do something after render  # function to run after the component renders
}, [dependencies]);             # dependencies is an array of variables to watch for changes, if it changes, the function will run again
`}
        </pre>
        <h3 className="text-lg pt-3 pb-1">useNavigate</h3>
        <p>
          If you want to navigate to another page, you can use{" "}
          <code>useNavigate</code> hook from <code>react-router-dom</code>.
        </p>
        <h3 className="text-lg pt-3 pb-1">Combined Example</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          {`import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const [items, setItems] = useState([]);     # initialize a state to store items
  const navigate = useNavigate();              # useNavigate hook to navigate to another page

  useEffect(() => {                           # will run once when the component mounts
    fetch("http://localhost:5000/api/items")  # fetching data from your backend (http://localhost:5000/)
      .then(res => res.json())                # converting the response to JSON object
      .then(data => setItems(data));          # update the state with the fetched data
  }, []);

  return (
    <div>                                     # render all items you fetched from the backend
      <h1>Items</h1>
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <button onClick={() => navigate('/other_page')}>Go to Other Page</button>
    </div>
  );
}`}
        </pre>
        <ul className="list-disc list-inside space-y-1 pt-2">
          <li>
            <code>useState</code> is used to initialize a state variable{" "}
            <code>items</code> and a function <code>setItems</code> to update
            it. In the example above, we initialized an empty array for{" "}
            <code>items</code>.
          </li>
          <li>
            <code>useEffect</code> is used to perform side effects, such as
            calling an API. The empty array as the second argument means this
            effect runs only once when the component mounts.
          </li>
          <li>
            <code>fetch</code> function is used to call an API. By default, it
            makes a <code>GET</code> request. You can change it to other RESTful
            API methods (e.g., <code>POST</code>, <code>PUT</code>,{" "}
            <code>DELETE</code>).
          </li>
          <li>
            <code>useNavigate</code> is used to navigate to another page. When
            the button is clicked (the onClick event), it will navigate to the
            <code>/other_page</code> component.
          </li>
        </ul>

        <blockquote>
          Refer to <code>demo.jsx</code> file on how to call APIs through
          frontend.
        </blockquote>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          📦 Create Reusable Components
        </h2>
        <p>
          To avoid writing the same code (remember to be "DRY" - Don't Repeat
          Yourself). Create reusable components. For example, if you have a
          button that will be used in the same way, you should just create a
          component for it and keep reusing it. If you need to edit, you only
          needs to edit once.
        </p>
        <p>
          Here is an example of a reusable <code>Card</code> component that I
          created. It takes in a <code>title</code>, <code>description</code>{" "}
          and <code>link</code> props (properties). Refer to{" "}
          <code>Card.jsx</code> file to see the code.
        </p>
        <div className="grid grid-cols-2 gap-4 m-3">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎯 Key Concepts Covered</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            React hooks: <code>useState</code>, <code>useEffect</code>,{" "}
            <code>useNavigate</code>
          </li>
          <li>
            Fetching data from API using <code>fetch</code>
          </li>
          <li>Basic component</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📚 Resources</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <a href="https://www.w3schools.com/html/default.asp">
              HTML Tutorial
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/css/default.asp">CSS Tutorial</a>
          </li>
          <li>
            <a href="https://tailwindcss.com/docs/styling-with-utility-classes">
              Tailwind CSS Documentation
            </a>
          </li>
          <li>
            <a href="https://vite.dev/guide/">Vite Documentation</a>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <div className="flex justify-between">
          <Button onClick={() => navigate("/")}>Prev Page</Button>
          <Button onClick={() => navigate("/backend")}>Next Page</Button>
        </div>
      </section>
    </div>
  );
}
