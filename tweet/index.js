window.onload = function(){





const inp =document.getElementById("tweet-text");
const tweet =document.getElementById("tweettext");
let feedtweet = document.getElementById("feedtweet1");
let btn = document.getElementById("tweetbtn");


document.addEventListener('click',btn.onclick);

btn.onclick = function createTweet(e){


    e.preventDefault();

  let newtweet = feedtweet.cloneNode(true);
  newtweet.className ="newtweet";
  document.getElementById("newtweety").appendChild(newtweet);
  tweet.innerHTML = inp.value;

  
  
} 

function save(){
  var newdata= document.getElementById('newtweet');
  if(localStorage.getItem('data') == null){
    localStorage.setItem('data','[]')

  }
  var olddata = JSON.parse(localStorage.getItem('data'));
  olddata.push(newdata);

  localStorage.setItem('data',JSON.stringify(old-data));
}



var btnre = document.getElementsByClassName('retwwetbtn');

btnre.onclick = function retweet(){
  let newtweet = feedtweet.cloneNode(true);
  newtweet.className ="newtweet";
  document.getElementById("newtweety").appendChild(newtweet);
  tweet.innerHTML = inp.value;
}


var btnlove = document.getElementById('love');

function lovefun(){
         if (love.style.color =="red") {
             love.style.color = "navy"
         }
         else{
             love.style.color = "red"
         }
}

}





  









