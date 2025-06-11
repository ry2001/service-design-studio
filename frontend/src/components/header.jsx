import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const showMenuNav =
    "fixed p-15 top-0 right-0 bg-blue-900 text-blue-100 h-screen flex flex-col items-center justify-center";

  return (
    <header className="flex flex-col items-left p-4 bg-blue-900 w-full">
      <h1 className="pl-10 text-3xl text-blue-100">
        60.004 Service Design Studio 2025
      </h1>

      <nav className="flex flex-col space-x-4 mt-2">
        <div>
          {isOpen ? (
            <div className={showMenuNav}>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/" className="!text-blue-100">
                    Introduction
                  </a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/frontend" className="!text-blue-100 ">
                    Frontend
                  </a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/backend" className="!text-blue-100 ">
                    Backend
                  </a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/demo" className="!text-blue-100 ">
                    Demo
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
          <div
            className={
              "top-0 right-0 px-8 py-6" + (isOpen ? " fixed" : " absolute")
            }
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="h-8 w-8 text-blue-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className="h-8 w-8 text-blue-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
