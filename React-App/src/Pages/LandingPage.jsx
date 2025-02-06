import React from "react";
import Navbar from "../components/Navbar"; // Ensure correct import path

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex flex-col items-center justify-center bg-blue-50">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Carewave</h1>
        <p className="mt-4 text-gray-700 text-lg">
          Your healthcare and domestic worker connection platform.
        </p>
        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
