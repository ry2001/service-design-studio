# 60.004 Service Design Studio

This repository for Design and Artificial Intelligence (DAI) programme's Service Design Studio course. This is not an official course material, and it is meant to help students to understand some basics of web development.

## Things will be covered

1. Basic concepts with web development
2. Example on working with Vite and Flask

## Before you start

You can download this with a ZIP file (if you don't have Git installed), or `git clone` this repository.

You must install NodeJS and Python in order to run this repository.

### (Optional) Install Git

Follow instructions to install [Git](https://git-scm.com/downloads). This is an useful tool for your project management.

Verify your installation and clone this repository

```bash
# Verify the git installation
git -v

# Clone this repository
git clone https://github.com/ry2001/service-design-studio.git
```

### Install NodeJS

Follow instructions to install [NodeJS](https://nodejs.org/en/download). You can just download the prebuild version (scroll down, select your OS, and just download the installer).

After the installation, check if everything is installed properly.

```bash
# Verify Node.js installation
node -v

# Verify npm installation
npm -v
```

### Install Python

Follow the instructions to install [Python](https://www.python.org/downloads/).

```bash
# Verify the installation
python -V

pip -V  # for Windows and Linux
pip3 -V # for MacOS
```

(Optional) You are recommended to install [conda](https://www.anaconda.com/download/success) and create virtual environments while using Python.

```bash
# you may change sds to other environment name, as long as you are happy with it
# you can also change the Python version, this is just a placeholder
conda create -n sds python=3.11

# you will be prompted to install some packages, just type 'y' and hit 'enter'

# activate the envrionment you have created
conda activate sds
# deactivate the environment
conda deactivate
```

## Getting Started

1. Open 2 terminals (Terminal A and Terminal B)
2. For Terminal A, we will be starting the frontend

```bash
cd frontend
# you only need to run this once to install packages
npm i
npm run dev
```

3. (Optional) For Terminal B, we will be starting the backend. You don't need to run this if you are not in the `Demo` page.

```bash
conda activate sds
cd backend
# you only need to run this once to install packages
pip install -r requirements.txt
python app.py
```

## Interact with the pages

This web application has 5 pages (more coming up - hopefully):

1. `Introduction`
   - An introduction to web development
2. `Introduction to Git`
   - Introduction to Git and Github
3. `Frontend`
   - Introduction to frontend development
4. `Backend`
   - Introduction to backend development
5. `Demo`
   - Demonstration on how to build components. How to call APIs.

## Remarks

This is the first time I am creating a tutorial for a course, and its an impromptu decision. Therefore, the contents are not well-planned (even though I asked ChatGPT to help with the planning) and did not include some important concepts for web-development such as database, deployment, etc.

You are welcome to suggest contents you think is helpful in your studio project. However, it might not be implemented (Your voice was heard, but got ignored -- just kidding, it depends on my availablility).

(Update 11/6/2025) I have deployed the frontend for easy access. You can access the page through this [link](https://service-design-studio.vercel.app/). Do note that the backend is not deployed hence `demo` page will not be working. Lastly, the code is not production-ready.

## Other Resources

### Frontend

1. [Figma](https://www.figma.com/), you can find some useful resources [here](https://www.figma.com/resource-library/). Do note that Figma is for UX/UI design, not for development.

### Database

1. [mySQL](https://www.mysql.com/)
2. [PostgreSQL](https://www.postgresql.org/)
3. [MongoDB](https://www.mongodb.com/)

### Containers

Docker lets you package your app and its environment (OS, dependencies, configs) into a single container that runs the same everywhere. Kubernetes is a container orchestration system — it runs, scales, and manages many containers across many servers.

1. [Docker](https://www.docker.com/)
2. [Kubernetes](https://kubernetes.io/)

### Deployment

Some hosting platform you can consider to use.

1. [Vercel](https://vercel.com/)
2. [Render](https://render.com/)
3. [Netlify](https://www.netlify.com/)

### Lectures Slides

Lectures from other Universities, they covered more and better

1. [Stanford CS142](https://web.stanford.edu/class/cs142/lectures.html)

## TODO list

- [x] Frontend deployment for easy access
- [x] Introduction to Git
- [ ] Deploying the web application
- [ ] FastAPI - (Thanks @Interpause raising this up: [Issue #1](https://github.com/ry2001/service-design-studio/issues/1))
