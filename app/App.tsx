import { Routes, Route, Link } from "react-router-dom";
import { LandingPage } from "./landing/landing";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="*"
        element={
          <main className="pt-16 p-4 container mx-auto text-center">
            <h1 className="text-3xl font-bold mb-2">404</h1>
            <p className="mb-4">The requested page could not be found.</p>
            <Link className="text-blue-600 underline" to="/">Go home</Link>
          </main>
        }
      />
    </Routes>
  );
}

