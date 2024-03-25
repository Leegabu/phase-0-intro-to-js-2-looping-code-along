// Code your solutions in this file
const names =["Guadalupe","Ollie","Aki"]
function writeCards(names) {
    let thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      let name = names[i];
      let message = `Thank you, ${name}, for the wonderful surprise gift!`;
      thankYouMessages.push(message);
    }
    return thankYouMessages;

}
function countDown(){
    let i = 0;


while(i <= 10) {
    console.log(i)
    i++
}
}