import Header from "./components/Header";
import Hero from "./components/Hero";
import Players from "./components/Players";
import Matches from "./components/Matches";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Players />
        <Matches />
      </main>
      <Footer />
    </div>
  );
}
