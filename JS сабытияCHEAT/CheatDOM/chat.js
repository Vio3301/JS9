
/////////////////////////DATA/////////////////////////////
var messages =[   // masiv
    {text: 'Hi', author: 'me',time:'19:00' },
    {text: 'Hello', author: 'you',time:'19:00' },
    {text: 'How are you?', author: 'me',time:'19:00' },
    {text: 'All good, but I started to hate Javascript :D', author: 'you',time:'19:00' },
    {text: ':)', author: 'me',time:'19:00' }
] 
////////////////////////////DATA///////////////////////////////////
/////////////////////////////LOGIC/////////////////////////////////
function updateMessageWindow(){
  messages.forEach(  m => { 
      console.log(m.text)

      var p = document.createElement('p');
      p.innerText = `${m.text}`;
      p.className = `${m.author}`;
      var div = document.querySelector('.messages');
      
      var br = document.createElement('br')
      var small = document.createElement('small')
      p.innerHTML = `${br}`;
      small.innerText = `${m.time}`
      p.innerHTML = `${small}`
      

      div.appendChild(p);
       
      
      
      


   } )  /// for 2 trebuie de uitat acasa collback
}
////////////////////////////////////////LOGIC/////////////////////////

//////////////////////////////INIT///////////////////////////////////
window.onload = updateMessageWindow
//////////////////////////////INIT////////////////////////////////////