import Hero from "./Hero";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Hero />
      <Contact />
    </div>
  );
}