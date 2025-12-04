export default function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">MyPortfolio</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-400 to-purple-500 text-white">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Karl William Lee</h1>
        <p className="text-xl mb-6">Frontend Developer | React JS | Tailwind CSS</p>
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-blue-500 font-semibold rounded hover:bg-gray-100 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-center text-gray-700">
          I'm a passionate frontend developer with experience building responsive, user-friendly web applications using React JS and Tailwind CSS. I enjoy creating projects that combine functionality with modern design.
        </p>
      </section>

      {/* Projects Section */}
     <section id="projects" className="max-w-6xl mx-auto py-20 px-4">
  <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
  <div className="grid md:grid-cols-3 gap-8">
    <div className="p-6 bg-white shadow rounded hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">Todo App</h3>
      <p className="mb-4 text-gray-600">A simple React + Tailwind CSS todo app with localStorage.</p>
      <div className="flex flex-col gap-2">
        <a href="https://task-tracker-tailwind.netlify.app/" target="_blank" className="text-blue-500 font-medium hover:underline">
          Live Demo
        </a>
        <a href="https://github.com/Carlody36/todo-list-js" target="_blank" className="text-blue-500 font-medium hover:underline">
          GitHub Repo
        </a>
      </div>
    </div>
    <div className="p-6 bg-white shadow rounded hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">School Website</h3>
      <p className="mb-4 text-gray-600">My personal portfolio website built with React and Tailwind CSS.</p>
      <div className="flex flex-col gap-2">
        <a href="https://iccwebsiteclone.netlify.app/" target="_blank" className="text-blue-500 font-medium hover:underline">
          Live Demo
        </a>
        <a href="https://github.com/Carlody36/my-school-site" target="_blank" className="text-blue-500 font-medium hover:underline">
          GitHub Repo
        </a>
      </div>
    </div>
    <div className="p-6 bg-white shadow rounded hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">E-commerce UI</h3>
      <p className="mb-4 text-gray-600">Responsive e-commerce UI design with Tailwind CSS.</p>
      <a href="#" className="text-blue-500 font-medium hover:underline">View Project</a>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <div className="text-center space-y-4 text-gray-700">
          <p>Email: <a href="mailto:karlwilliamlee@gmail.com" className="text-blue-500 hover:underline">karlwilliamlee@gmail.com</a></p>
          <p>Phone: <a href="tel:09555318846" className="text-blue-500 hover:underline">0955 531 8846</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        &copy; {new Date().getFullYear()} Karl William Lee. All rights reserved.
      </footer>
    </div>
  );
}
