const { body } = document;
const container = document.createElement('div');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
const shortcutParag = document.createElement('p');
const description = document.createElement('p');
const heading = document.createElement('h1');

container.className = 'container';
textarea.className = 'textarea';
heading.className = 'heading';
shortcutParag.className = 'shortcut';
description.className = 'description';
keyboard.className = 'keyboard';

heading.innerText = 'Virtual Keyboard';
description.innerText = 'This virtual keyboard is made for Windows OS';
shortcutParag.innerText = 'Language:English';

container.prepend(heading, textarea, keyboard, description, shortcutParag);
body.prepend(container);
// console.log(heading, shortcutParag, description);
