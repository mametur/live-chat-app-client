//<Outlet /> is used by React Router to render different pages inside this layout.
import { Outlet } from "react-router-dom";
import { memo } from "react";
import Navbar from "./Navbar";

const MainLayout = memo(() => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main content area */}
      <main className="flex-grow p-6">
        <Outlet /> {/* This will render different pages here */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">© 2025 My App</footer>
    </div>
  );
});

export default MainLayout;
