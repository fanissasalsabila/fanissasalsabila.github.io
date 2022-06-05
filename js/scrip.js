const txtElement = ['Freelancer','Web Developer','Grapic Designer'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){
  
  if(count == txtElement.lenght){
    count = 0;
  }
  
 currentTxt = txtIndex[count];
 
 words = currentTxt.slice(0, ++txtIndex);
 document.querySelector('.efek-ngetik').textContent = words;

setTimeout(ngetik, 500);
  
  if(words.lenght == currentTxt. leght){
    count++;
    txtIndex = 0;
  }
})();
