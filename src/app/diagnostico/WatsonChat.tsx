import { useEffect } from 'react';
declare global {
    interface Window {
      watsonAssistantChatOptions: any;
    }
  }

const WatsonChat = () => {
  useEffect(() => {
    // Configuração do Watson Assistant Chat
    window.watsonAssistantChatOptions = {
      integrationID: "eedef28f-76b9-47fe-ba3c-8be2e858296a", // Substitua pelo seu ID de integração
      region: "au-syd", // Substitua pela sua região
      serviceInstanceID: "18b8ce04-0089-42bc-b80b-7e861741fe82", // Substitua pelo ID da sua instância
      // openChatByDefault: true,
      onLoad: async (instance:any) => {
        await instance.render();
      }
    };

    // Adiciona o script do Watson Assistant ao head da página
    setTimeout(function () {
      const t = document.createElement('script');
      t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    }, 0);
  }, []); // [] garante que o efeito seja executado apenas uma vez

  return (
    <div>
      {/* O chat será renderizado automaticamente */}
    </div>
  );
};

export default WatsonChat;