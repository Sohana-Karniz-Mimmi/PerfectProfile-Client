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
          steps={[
            {
              id: "1",
              message: "Hi! How can I assist you with your CV or resume?",
              trigger: "2",
            },
            {
              id: "2",
              options: [
                { value: 1, label: "I need help writing my CV", trigger: "3" },
                { value: 2, label: "I need to update my resume", trigger: "4" },
                {
                  value: 3,
                  label: "How can I format my resume?",
                  trigger: "5",
                },
                { value: 4, label: "Contact support team", trigger: "6" },
              ],
            },
            {
              id: "3",
              message:
                "Here are some tips for writing a CV: \n1. Keep it concise and focused. \n2. Use bullet points. \n3. Highlight key achievements. \nWould you like more details or examples?",
              trigger: "7",
            },
            {
              id: "4",
              message:
                "Updating a resume is easy! Focus on these steps:\n1. Add recent experience. \n2. Update your skills section.\nWould you like further assistance?",
              trigger: "7",
            },
            {
              id: "5",
              message:
                "Resume formatting tips:\n1. Choose a simple layout. \n2. Use consistent fonts.\n3. Organize sections clearly.\nWould you like a sample template?",
              trigger: "7",
            },
            {
              id: "6",
              message:
                "Please provide your email or phone number, and our support team will reach out to you shortly.",
              trigger: "8",
            },
            {
              id: "7",
              options: [
                { value: 1, label: "Yes, please!", trigger: "9" },
                { value: 2, label: "No, thank you", trigger: "10" },
              ],
            },
            {
              id: "8",
              user: true,
              trigger: "11", // Trigger the thank you message
            },
            {
              id: "11",
              message:
                "Thank you for providing your information! Our support team will contact you soon.",
              end: true,
            },
            {
              id: "9",
              message:
                "Great! Here's a link to a CV/Resume template you can use: [Resume Template Link]. Would you like to ask something else?",
              trigger: "2",
            },
            {
              id: "10",
              message:
                "You're all set! Let me know if you need more help. Goodbye!",
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
