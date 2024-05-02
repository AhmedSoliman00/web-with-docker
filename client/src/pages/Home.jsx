// Home.js

function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-5xl font-bold mb-4">Welcome to Cloud Project</h1>
        <p className="text-2xl mb-8">
          This project is built with React, Node.js, and Docker. It's a
          demonstration of my skills in web development and containerization.
        </p>
        <p className="text-2xl mb-8">
          The frontend is built with{" "}
          <img src="/react.png" alt="React Logo" className="inline h-8" /> React
          and styled using Tailwind CSS. The backend is powered by{" "}
          <img src="/node.png" alt="Node.js Logo" className="inline h-8" />{" "}
          Node.js, with{" "}
          <img src="/mysql.png" alt="MySQL Logo" className="inline h-8" /> MySQL
          used as the database management system.
          <img
            src="/docker.png"
            alt="Docker Logo"
            className="inline h-8"
          />{" "}
          Docker is used for containerization, making deployment and scaling
          easier.
        </p>
        <p className="text-2xl mb-8">
          This project showcases modern web development practices and
          technologies, including responsive design, RESTful APIs, and database
          integration.
        </p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
}

export default Home;
