import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Build Projects with AI & Collaborators</h1>
        <p className="text-lg md:text-2xl max-w-2xl mb-8">Empower your development process with real-time AI suggestions and team collaboration.</p>
        <div className="space-x-4">
          <button onClick={() => navigate('/login')} className="bg-white text-indigo-700 px-6 py-3 rounded-md font-semibold">Login</button>
          <button onClick={() => navigate('/register')} className="bg-indigo-900 px-6 py-3 rounded-md font-semibold">Register</button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">What You Can Do</h2>
        <div className="grid md:grid-cols-3 gap-8 px-8">
          <div>
            <i className="ri-code-line text-4xl text-indigo-600 mb-2"></i>
            <h3 className="text-xl font-semibold">AI-Powered Coding</h3>
            <p>Get real-time code generation and error handling from Gemini AI.</p>
          </div>
          <div>
            <i className="ri-group-line text-4xl text-indigo-600 mb-2"></i>
            <h3 className="text-xl font-semibold">Team Collaboration</h3>
            <p>Invite collaborators and build projects together live in your workspace.</p>
          </div>
          <div>
            <i className="ri-terminal-line text-4xl text-indigo-600 mb-2"></i>
            <h3 className="text-xl font-semibold">Run Code in Browser</h3>
            <p>Use WebContainer to run Node.js and Python apps directly in your browser.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 px-8">
          <div>
            <span className="text-2xl font-bold text-indigo-600">1.</span>
            <h3 className="font-semibold text-xl">Create a Project</h3>
            <p>Start a new workspace in one click.</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-indigo-600">2.</span>
            <h3 className="font-semibold text-xl">Add Collaborators</h3>
            <p>Invite your team to work together.</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-indigo-600">3.</span>
            <h3 className="font-semibold text-xl">Talk to AI</h3>
            <p>Send prompts and receive structured code with explanations.</p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-indigo-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Start building with AI today</h2>
        <p className="mb-6">Join now and boost your coding speed and quality</p>
        <div className="space-x-4">
          <button onClick={() => navigate('/login')} className="bg-white text-indigo-700 px-6 py-3 rounded-md font-semibold">Login</button>
          <button onClick={() => navigate('/register')} className="bg-indigo-900 px-6 py-3 rounded-md font-semibold">Register</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Hardee. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
