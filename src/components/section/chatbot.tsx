"use client";

import { useEffect, useState, useRef } from "react";
import { Box, User, Minimize2, Maximize2 } from "lucide-react";

declare global {
  interface Window {
    WebChat: any;
  }
}

export const CopilotAgent = () => {
  const [isMinimized, setIsMinimized] = useState(true);
  const webchatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeWebChat = async () => {
      const styleOptions = {
        // Hide specific UI elements
        hideUploadButton: true, // Removes file upload button
        hideSendBox: false, // Hides the message input area
        hideSendBoxAttachmentButton: true, // Hides attachment/file upload button

        // Color and Theming
        backgroundColor: "transparent", // Background color of the chat interface
        bubbleBackground: "#FFFFFF", // Background color of message bubbles
        bubbleBorderRadius: 4, // Border radius of message bubbles
        bubbleTextColor: "#000000", // Text color inside message bubbles

        // Typography
        fontFamily: "Segoe UI, Arial, sans-serif", // Font for the entire chat interface
        fontSize: 12, // Base font size

        // User and Bot Message Styling
        userBubbleBackground: "#CCCCCC", // Background color of user's messages
        userBubbleTextColor: "#FFFFFF", // Text color of user's messages
        botBubbleBackground: "#E6E6E6", // Background color of bot's messages
        botBubbleTextColor: "#000000", // Text color of bot's messages

        // Input Area Styling
        sendBoxBackground: "#FFFFFF", // Background of the send box
        sendBoxTextColor: "#000000", // Text color in the send box

        // Avatar Styling
        botAvatarInitials: <Box />, // Initials shown in bot's avatar
        userAvatarInitials: <User />,
        showAvatarInGroup: true, // Show avatars in group conversations

        // Miscellaneous UI Options
        borderRadius: 4, // Global border radius for UI elements
        primaryFont: "Segoe UI", // Primary font (fallback)
        primaryColor: "#CCCCCC", // Primary accent color

        // Responsiveness
        rootHeight: "100%", // Height of the chat container
        rootWidth: "100%", // Width of the chat container

        // Advanced Visibility Controls
        hideErrorDialog: false, // Hide error messages
        hideDateSeparator: false, // Hide date separators between messages

        // Suggested Actions Styling
        suggestedActionBackgroundColor: "#F0F0F0", // Background of suggested actions
        suggestedActionBorderColor: "#CCCCCC", // Border color of suggested actions
        suggestedActionTextColor: "#CCCCCC", // Text color of suggested actions
      };

      const tokenEndpointURL = new URL(
        "https://defaultc44a6da6ab5646069149209c5a468e.e6.environment.api.powerplatform.com/powervirtualagents/botsbyschema/cr6dc_methodSales/directline/token?api-version=2022-03-01-preview"
      );

      const locale = document.documentElement.lang || "en";
      const apiVersion = tokenEndpointURL.searchParams.get("api-version");

      const [directLineURL, token] = await Promise.all([
        fetch(
          new URL(
            `/powervirtualagents/regionalchannelsettings?api-version=${apiVersion}`,
            tokenEndpointURL
          )
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to retrieve regional channel settings.");
            }
            return response.json();
          })
          .then(({ channelUrlsById: { directline } }) => directline),
        fetch(tokenEndpointURL)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to retrieve Direct Line token.");
            }
            return response.json();
          })
          .then(({ token }) => token),
      ]);

      const directLine = window.WebChat.createDirectLine({
        domain: new URL("v3/directline", directLineURL),
        token,
      });

      const subscription = directLine.connectionStatus$.subscribe({
        next(value: number) {
          if (value === 2) {
            directLine
              .postActivity({
                localTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                locale,
                name: "startConversation",
                type: "event",
              })
              .subscribe();
            subscription.unsubscribe();
          }
        },
      });

      window.WebChat.renderWebChat(
        { directLine, locale, styleOptions },
        webchatRef.current
      );
    };

    const script = document.createElement("script");
    script.src =
      "https://cdn.botframework.com/botframework-webchat/latest/webchat.js";
    script.async = true;
    script.onload = initializeWebChat;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 w-80 ${
        isMinimized ? "h-14" : "h-[32rem]"
      } bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out`}
    >
      <div className="bg-gray-900 text-white p-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Box size={20} />
          <h1 className="text-lg font-semibold">Method Man</h1>
        </div>
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="text-white hover:text-gray-300 transition-colors"
        >
          {isMinimized ? <Maximize2 size={20} /> : <Minimize2 size={20} />}
        </button>
      </div>
      <div
        ref={webchatRef}
        className={`w-full ${
          isMinimized ? "h-0" : "h-[calc(32rem-3.5rem)]"
        } transition-all duration-300 ease-in-out`}
      ></div>
    </div>
  );
};

export default CopilotAgent;
