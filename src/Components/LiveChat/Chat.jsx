import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const Chat = () => {
  const theme = {
    background: "#f5f8fb",
    fontFamily: " sans-serif",
    headerBgColor: "#00C8AA",
    headerFontColor: "#fff",
    headerFontSize: "16px",
    botBubbleColor: "#00C8AA",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <ChatBot
          recognitionEnable={true}
          steps={[
            {
              id: "1",
              message: "Assalamualaykum",
              trigger: "2",
            },
            {
              id: "2",
              user: true,
              trigger: "3",
            },
            {
              id: "3",
              message: "Hi {previousValue}, nice to meet you!",
              end: true,
            },
          ]}
          floating={true}
        />
      </ThemeProvider>
    </div>
  );
};

export default Chat;
