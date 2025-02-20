//<Outlet /> is used by React Router to render different pages inside this layout.
import { Outlet } from "react-router-dom";
import { memo } from "react";

const MainLayout = memo(() => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">My App</h1>
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
