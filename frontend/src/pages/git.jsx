import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/button.jsx";

export default function GitIntro() {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        🔧 Introduction to Git & GitHub
      </h1>

      {/* What is Git */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📘 What is Git?</h2>
        <p>
          Git is a <strong>version control system</strong> that tracks changes
          in your code over time. It allows developers to collaborate,
          experiment safely, and revert changes when needed.
        </p>
      </section>

      {/* Key Concepts */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🔑 Key Concepts</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Repository (repo)</strong>: A project folder tracked by Git.
          </li>
          <li>
            <strong>Commit</strong>: A snapshot of your code at a point in time.
          </li>
          <li>
            <strong>Branch</strong>: A parallel version of your code to try new
            ideas.
          </li>
          <li>
            <strong>Remote</strong>: A GitHub-hosted version of your local repo.
          </li>
          <li>
            <strong>Push</strong>: Send your commits to GitHub.
          </li>
          <li>
            <strong>Pull</strong>: Bring updates from GitHub to your machine.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2"> 🛠️ Basic Git Commands</h2>
        <p>Here are some basic Git commands that you will use frequently:</p>
        <pre>
          {`Basic Git Commands:

git init                      # Initialize a new Git repository
git remote add origin <url>   # Connect to a remote repository
git clone <url>               # Clone a remote repository to your local machine

# Checking Status
git status                    # Check the status of your repository
git log                       # View commit history
git diff                      # Show changes not staged for commit

# Branching Commands
git branch                    # List branches
git branch <branch-name>      # Create a new branch
git checkout <branch-name>    # Switch to a branch
git checkout -b <branch-name> # Create and switch to a new branch (a combined command of the above two)

# Staging and Committing Changes
git add <file>                # Stage a file (you can use '.' to stage all files)
git reset <file>              # Unstage a file while retaining the changes
git commit -m "message"       # Commit changes with a message (only staged files will be committed)

# Pushing and Pulling
git push                      # Push changes to remote
git fetch                     # Fetch all branches from remote
git pull                      # Fetch and merge from remote branch to current branch
git merge <branch-name>       # Merge a branch into the current branch
`}
        </pre>
        <p>
          <code>git fetch</code> will only fetch the changes from the remote
          repository, but will not merge them into your current branch.
          <br />
          <code>git pull</code> will "edit" your current branch with the changes
          from the remote repository.
          <br />
          Refer to this{" "}
          <a href="https://education.github.com/git-cheat-sheet-education.pdf">
            cheatsheet
          </a>{" "}
          for more commands.
        </p>
      </section>

      {/* Basic Git Workflow */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🛠️ Basic Git Workflow</h2>
        <pre>
          {`# Initialize a new Git repository
git init

# Stage all files in the current folder
git add .

# Save your changes with a message
git commit -m "Initial commit"

# Connect to a GitHub repository
git remote add origin https://github.com/your-username/your-repo.git

# Push your code to GitHub
git push -u origin main`}
        </pre>
        <p>
          While you are working with your teammates on the same branch, you{" "}
          <strong>MUST</strong> always remember to pull the latest changes
          before you start coding. Otherwise, you might end up with merge
          conflicts when you try to push your changes.
        </p>
        <p>
          Solving merge conflicts is annoying, so you should try to avoid them
          in the first place.
        </p>
      </section>

      {/* Using Git in a Web App Project */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2"> 🚫 .gitignore</h2>
        <p className="mt-2">
          Most of the time, you do not want to include some files in your
          repository. For example, some sensitive files like API keys, large
          files, installed dependencies (e.g. node_modules) and etc. To avoid
          you commit them to your repository, you can create a{" "}
          <code>.gitignore</code> file. As the name suggests, it tells git to
          ignore the files and folders listed in it.
          <br />
          Typical <code>.gitignore</code> contents:
        </p>
        <pre>
          {`# Frontend
node_modules/
dist/

# Backend
venv/          # Python virtual environment, which you might not have
__pycache__/
*.pyc

# Environment variables (for API keys, secrets, etc.)
.env`}
        </pre>
      </section>

      {/* GitHub Overview */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🌐 GitHub Overview</h2>
        <p>
          Github is the most popular platform to host your repositories, there
          are other platforms such as GitLab, Bitbucket, etc. When you go into
          the industry, they might have their own preference on which platform
          to use. The core concepts remains the same.
        </p>
        <blockquote>
          Since you are a student, you can have GitHub Pro account for free.
          Just verify your account with SUTD email.{" "}
          <a href="https://github.com/education/students">Click Here!</a>
        </blockquote>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Create a Repository</strong>: On GitHub, click "New
            repository".
          </li>
          <li>
            <strong>Clone a Repo</strong>: Get a local copy using{" "}
            <code>git clone</code>.
          </li>
          <li>
            <strong>Fork a Repo</strong>: Make your own copy of someone else's
            repo to work on.
          </li>
          <li>
            <strong>Push Changes</strong>: Send local commits to GitHub.
          </li>
          <li>
            <strong>Commit History</strong>: View changes over time and who made
            them.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          📝 Good Practices for Git
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Branching out for new features or bug fixes</strong>: Avoid
            making changes directly on the <code>main</code> branch. Create a
            new branch for a new feature, bug fixes then merge back to{" "}
            <code>main</code> when done.
          </li>
          <li>
            <strong>Pull before you start</strong>: Always pull the latest
            changes from the remote repository before you start coding.
          </li>
          <li>
            <strong>Create Pull Request (PR)</strong>: Creating a PR usually
            will ask someone to do a code review and approve your changes before
            merging them into the main branch.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          ⚠️ Common Beginner Mistakes
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Forgetting to commit</strong>: You made changes but didn’t
            run <code>git commit</code>.
          </li>
          <li>
            <strong>Editing code without staging</strong>: Remember to{" "}
            <code>git add</code> files before committing.
          </li>
          <li>
            <strong>Accidentally committing sensitive files</strong>: Use{" "}
            <code>.gitignore</code> to exclude things like{" "}
            <code>node_modules/</code> and <code>venv/</code>.
          </li>
          <li>
            <strong>Forgetting to push</strong>: Your commits are local unless
            you <code>git push</code> them to GitHub.
          </li>
          <li>
            <strong>Bad commit messages</strong>: Use clear messages like{" "}
            <code>"Add form validation"</code> instead of <code>"update"</code>.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <div className="flex justify-between">
          <Button onClick={() => navigate("/")}>Prev Page</Button>
          <Button onClick={() => navigate("/frontend")}>Next Page</Button>
        </div>
      </section>
    </div>
  );
}
