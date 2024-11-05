import { useEffect } from 'react';

interface WatsonAssistantChatOptions {
  integrationID: string;
  region: string;
  serviceInstanceID: string;
  onLoad: (instance: { render: () => Promise<void> }) => void;
}

declare global {
  interface Window {
    watsonAssistantChatOptions: WatsonAssistantChatOptions;
  }
}

const WatsonChat = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "eedef28f-76b9-47fe-ba3c-8be2e858296a",
      region: "au-syd",
      serviceInstanceID: "18b8ce04-0089-42bc-b80b-7e861741fe82",
      onLoad: async (instance) => {
        await instance.render();
      },
    };

    setTimeout(function () {
      const t = document.createElement('script');
      t.src =
        "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
        (window.watsonAssistantChatOptions.clientVersion || 'latest') +
        "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    }, 0);
  }, []);

  return (
    <div>
      {/* O chat será renderizado automaticamente */}
    </div>
  );
};

export default WatsonChat;
