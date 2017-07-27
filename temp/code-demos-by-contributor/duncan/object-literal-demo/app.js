console.log('you have javascript');

var todoNoteOne = {};
todoNoteOne.name = 'slug';
todoNoteOne.date = new Date();
todoNoteOne.text = 'Today i want to make real pizza not just frozen pizza';

var todoNoteTwo = {
  name: 'slug',
  date: new Date(),
  text: 'some super aweseome idea that no 1 knows yet'
};

var groceryNoteOne = {};
todoNoteOne.name = 'slug';
todoNoteOne.date = new Date();
todoNoteOne.text = 'milk';

var groceryNoteTwo = {
  name: 'slug',
  date: new Date(),
  text: 'soylent'
};

var todoList = [todoNoteOne, todoNoteTwo];
var gorceryList = [groceryNoteOne, groceryNoteTwo];

var myLists = {
  gorceryList: gorceryList,
  todoList: todoList
};
