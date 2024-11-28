import ChatbotWidget from "./components/section/chatbot";

const App = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <h1 className="text-4xl font-bold mb-8">Welcome to Method IT</h1>
      <p className="text-xl mb-4">How can we assist you today?</p>
      <ChatbotWidget />
    </main>
  );
};

export default App;
