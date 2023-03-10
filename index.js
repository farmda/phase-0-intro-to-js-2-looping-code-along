const names = ["Guadalupe", "Ollie", "Aki"];
const messages = writeCards(names);

function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}

function writeCards(names) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return messages;
}

writeCards(names.length);
countDown(names.length);
console.log(messages);