// // backend error handling

// function testBackendErrorHandling() {
//     // fake fetch function that simulates a backend error
    
//     const mockFetch = () => Promise.reject(new Error('Backend Error'));
  
//     // shows the chatbot's component's behavior
//     const chatbot = {
//       ingredients: "tomato, cheese",
//       messages: [], 
  
//       async handleSubmit() {
//         try {
//           // simulates fetch call
//           await mockFetch();
//         } catch (error) {
//           this.messages.push({ sender: 'bot', text: 'error connecting to backend.' });
//         }
//       }
//     };
  
//     // simulate user entering ingredients and submitting
//     chatbot.ingredients = "tomato, cheese";
  
//     chatbot.handleSubmit().then(() => {

//         // checks if error message was added to messages
//       const errorMessage = chatbot.messages.find(msg => msg.text === 'error connecting to backend.');
  
//       if (errorMessage) {
//         console.log("error message displayed correctly");
//       } else {
//         console.error("error message not displayed");
//       }
//     });
//   }
  
//   testBackendErrorHandling();
  
  


//   // edge cases: extra whitespace 

//   function testExtraWhitespace (){

//     // simulates chatbot component's behavior
//     const chatbot = {
//         ingredients: "",
//         messages: [],
//         handleSubmit(){

//             // simulates trimming whitespaces and adding a user message 
//             const trimmedIngredients = this.ingredients.split(',').map(i => i.trim()).join(', ');

//             this.messages.push({ sender: 'user', text: `leftover ingredients: ${trimmedIngredients}` });
//         }
//     }
//   }

//   // simulates user entering ingredients with extra whitespace and submitting
//   chatbot.ingredients = "  tomato,  cheese  ,   ";
//   chatbot.handleSubmit();

//   // checks if the message was added with trimmed content 
//   const userMessage = chatbot.messages.find(
//     msg => msg.text === 'leftover ingredients: tomato, cheese'); 

//     if (userMessage) {
//         console.log('extra whitespace trimmed correctly')
//     } else {
//         console.log('extra whitespace not trimmed');
//     }

//     testExtraWhitespace();

