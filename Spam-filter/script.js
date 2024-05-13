const messageInput = document.getElementById('message-input');
const result = document.getElementById('result');
const checkMessageButton = document.getElementById('check-message-btn');


// const  isSpam=(msg)=>{
//     return  false;
// }

// implicite return
// const isSpam = (msg) => msg.match(helpRegex); // return an array
// const isSpam = (msg) => helpRegex.test(msg); // return true or false

// .some() method to check if testing a msg on any of a denyList regular expressions returns true.
const isSpam = (msg) => denyList.some((regex) => regex.test(msg))

// use the alternate sequence | to match either please help or assist me.
const helpRegex = /please help|assist me/i;
// the + quantifier can be used - this matches one or more consecutive occurrence.
// capture group using ()
// mark the capture group as optional with the ? quantifier
//  turn it into a non-capturing group.  add ?: after the opening parenthesis of a group
const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;
const denyList = [helpRegex, dollarRegex];

checkMessageButton.addEventListener("click", () => {
    if (messageInput.value === "") {
      alert("Please enter a message.");
      return;
    }
  
    // ternary operator to check the truthiness of calling isSpam() and display appropriate msg on the page
    result.textContent = isSpam(messageInput.value)
      ? "Oh no! This looks like a spam message."
      : "This message does not seem to contain any spam.";
    messageInput.value = "";
});