import Footer from "./components/footer";
import Header from "./components/header";
import About from "./components/section/about";
import Service from "./components/section/service";
import Contact from "./components/section/contact";
import ChatbotWidget from "./components/section/chatbot";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Service />
        <About />
        <Contact />
        <ChatbotWidget />
      </main>
      <Footer />
    </div>
  );
};

export default App;
