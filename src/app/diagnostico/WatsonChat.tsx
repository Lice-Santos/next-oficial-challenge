import { useEffect } from 'react';
declare global {
    interface Window {
      watsonAssistantChatOptions: any;
    }
  }

const WatsonChat = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "eedef28f-76b9-47fe-ba3c-8be2e858296a", 
      region: "au-syd",
      serviceInstanceID: "18b8ce04-0089-42bc-b80b-7e861741fe82", 
      onLoad: async (instance:any) => {
        await instance.render();
      }
    };


    setTimeout(function () {
      const t = document.createElement('script');
      t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
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