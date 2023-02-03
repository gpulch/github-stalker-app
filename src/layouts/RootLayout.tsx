import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}