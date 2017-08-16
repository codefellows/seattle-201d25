'use strict';

// create the first element...?

/*
Rob: what if we treated each blog post as an object, and built a constructor to construct them?
*/

function Post(title, author, date, body){
  this.title = title;
  this.author = author;
  this.date = date;
  this.body = body;

  this.renderToHTML = function(){
    // select the body
    var body = document.getElementsByTagName('body')[0];

    // create the article element and give it a class and attach to the body.
    var postArticle = document.createElement('article');
    // postArticle.setAttribute('class', 'post');
    // accomplishes the same as below
    postArticle.className = 'post';
    body.appendChild(postArticle);
    // var postArticle = createAndAppend('article', 'post', '', body);

    // create the title and append it to the article
    var h2 = document.createElement('h2');
    h2.innerText = this.title;
    postArticle.appendChild(h2);
    // createAndAppend('h2', '', this.title, postArticle);

    // create the author_date p-tag and append it to the article
    var authorDate = document.createElement('p');
    authorDate.className = 'author_date';
    authorDate.innerText = 'By ' + this.author + ' on ' + this.date;
    postArticle.appendChild(authorDate);
    // createAndAppend('p', 'author_date', 'By ' + this.author + ' on ' + this.date, postArticle);

    // create the body p-tag and append it to the article
    var postBody = document.createElement('p');
    postBody.className = 'post-body';
    postBody.innerText = this.body;
    postArticle.appendChild(postBody);
    // createAndAppend('p', 'post-body', this.body, postArticle);
  };

  function createAndAppend(toCreate, theClass, theContent, theParent){
    var theElement = document.createElement(toCreate);
    if (theClass && theClass !== ''){
      theElement.className = theClass;
    }
    if (theContent && theContent !== ''){
      theElement.innerText = theContent;
    }
    theParent.appendChild(theElement);
    return theElement;
  }

  // this.confirmPost = function(){
  //   var yesNo = confirm('You are about to write this: ' + this.body);
  //   if (yesNo === true) {
  //     this.renderToHTML();
  //   }
  // };
  //
  // this.confirmPost();
  // this.renderToHTML();
}

new Post('The first one', 'Me', 'August 16, 2017', 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that\'s what you see at a toy store. And you must think you\'re in a toy store, because you\'re here shopping for an infant named Jeb.');

new Post('Another post', 'Dave', 'August 17, 2017', 'Throw down all the stuff in the kitchen purr or unwrap toilet paper, but hiss at vacuum cleaner and fooled again thinking the dog likes me. Refuse to drink water except out of someone\'s glass sweet beast, or hiss and stare at nothing then run suddenly away climb leg shake treat bag, or flee in terror at cucumber discovered on floor. Need to chase tail rub face on everything scream for no reason at 4 am so cat dog hate mouse eat string barf pillow no baths hate everything. I am the best meowing chowing and wowing hiss and stare at nothing then run suddenly away or groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked. Chase imaginary bugs wake up human for food at 4am.');

// this next bit is about events

var submit = document.getElementById('submit');
// submit.addEventListener('mouseover', function(){
//   alert('hovered!');
// });
function doAThing(event){
  var theElement = event.target;
  console.log(theElement);
}
submit.addEventListener('mouseover', doAThing);

var userInput = [];
function logLetters(event){
  var thisField = event.target;
  userInput.push(event.key);
  thisField.value = userInput.join('').toUpperCase();
}
var author = document.getElementById('author');
//author.addEventListener('keypress', logLetters);

function harvestAndPost(event){
  event.preventDefault();
  var post = new Post();
  // "this" applies to the element where the event was triggered.
  post.title = this.elements['title'].value;
  post.author = this.elements['author'].value;
  post.date = this.elements['date'].value;
  post.body = this.elements['postBody'].value;
  post.renderToHTML();
  this.style = 'border: thin solid red;';
  // this.reset();
}
var form = document.getElementById('theForm');
form.addEventListener('submit', harvestAndPost);

/*
Mike: being a blog, I want each new post to be at the top of my page.
*/

/*
Kinley: want to get ID for where I want to put it.

Maybe a method for each post to render it onto the page.
*/

/*
Shayne: I want to automatically call the time that I'm posting at and put that next to my name.
*/

/*
Ariel: maybe we want to take in user input?
*/
