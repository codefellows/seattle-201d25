var goodByeIntervalID;

function sayHello(){
  console.log('hello');
}

function sayGoodbye(){
  console.log('goodbye');
}

function startSayingGoodbye(){
  stopSayingGoodbye();
  goodByeIntervalID = setInterval(sayGoodbye, 500);
}

function stopSayingGoodbye(){
  clearInterval(goodByeIntervalID);
}
