import React, { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-80 h-[600px] flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-semibold">Chatbot</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-grow">
            <iframe
              src="https://copilotstudio.microsoft.com/environments/Default-c44a6da6-ab56-4606-9149-209c5a468ee6/bots/cr6dc_dummyAgent/webchat?__version__=2"
              frameBorder={0}
              className="w-full h-full border-none"
              title="Chatbot"
            ></iframe>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-12 h-12 flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatbotWidget;
