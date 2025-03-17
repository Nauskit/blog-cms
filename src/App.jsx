import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Categorybar } from "./components/Categorybar";
import { BlogContent } from "./components/BlogContent";
import { Footer } from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Header />
      <Categorybar />
      <BlogContent />
      <Footer />
    </>
  );
}

export default App;
