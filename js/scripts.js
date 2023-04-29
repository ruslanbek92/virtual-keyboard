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
description.innerText = 'This virtual keyboard is made for Windows OS, you can alter the language layout with Ctrl + Alt';
shortcutParag.innerText = 'Language:English';

container.prepend(heading, textarea, keyboard, description, shortcutParag);
body.prepend(container);
// console.log(heading, shortcutParag, description);

class Key {
  constructor(value) {
    this.value = value;
  }

  render() {
    const key = document.createElement('div');
    key.className = 'key';
    key.innerText = `${this.value}`;
    return key;
  }
}

const symbols = [
  { english: ['`', '~', '`'], russian: ['ё', 'Ё'] },
  { english: ['1', '!', '1'], russian: ['1', '!'] },
  { english: ['2', '@', '2'], russian: ['2', '"'] },
  { english: ['3', '#', '3'], russian: ['3', '№'] },
  { english: ['4', '$', '4'], russian: ['4', ';'] },
  { english: ['5', '%', '5'], russian: ['5', '%'] },
  { english: ['6', '^', '6'], russian: ['6', ':'] },
  { english: ['7', '&', '7'], russian: ['7', '?'] },
  { english: ['8', '*', '8'], russian: ['8', '*'] },
  { english: ['9', '(', '9'], russian: ['9', '('] },
  { english: ['0', ')', '0'], russian: ['0', ')'] },
  { english: ['-', '_', '-'], russian: ['-', '_'] },
  { english: ['=', '+', '='], russian: ['=', '+'] },
  { english: ['Backspace', 'Backspace', 'Backspace'], russian: ['Backspace', 'Backspace'] },
  { english: ['Tab', 'Tab', 'Tab'], russian: ['Tab', 'Tab'] },
  { english: ['q', 'Q', 'Q'], russian: ['й', 'Й'] },
  { english: ['w', 'W', 'W'], russian: ['ц', 'Ц'] },
  { english: ['e', 'E', 'E'], russian: ['у', 'У'] },
  { english: ['r', 'R', 'R'], russian: ['к', 'К'] },
  { english: ['t', 'T', 'T'], russian: ['е', 'Е'] },
  { english: ['y', 'Y', 'Y'], russian: ['н', 'Н'] },
  { english: ['u', 'U', 'U'], russian: ['г', 'Г'] },
  { english: ['i', 'I', 'I'], russian: ['ш', 'Ш'] },
  { english: ['o', 'O', 'O'], russian: ['щ', 'Щ'] },
  { english: ['p', 'P', 'P'], russian: ['з', 'З'] },
  { english: ['[', '{', '['], russian: ['х', 'Х'] },
  { english: [']', '}', ']'], russian: ['ъ', 'Ъ'] },
  { english: ['Del', 'Del', 'Del'], russian: ['Del', 'Del'] },
  { english: ['Caps', 'Caps', 'Caps'], russian: ['Caps', 'Caps'] },
  { english: ['a', 'A', 'A'], russian: ['ф', 'Ф'] },
  { english: ['s', 'S', 'S'], russian: ['ы', 'ы'] },
  { english: ['d', 'D', 'D'], russian: ['в', 'В'] },
  { english: ['f', 'F', 'F'], russian: ['а', 'А'] },
  { english: ['g', 'G', 'G'], russian: ['п', 'П'] },
  { english: ['h', 'H', 'H'], russian: ['р', 'Р'] },
  { english: ['j', 'J', 'J'], russian: ['о', 'О'] },
  { english: ['k', 'K', 'K'], russian: ['л', 'Л'] },
  { english: ['l', 'L', 'L'], russian: ['д', 'Д'] },
  { english: [';', ':', ';'], russian: ['ж', 'Ж'] },
  { english: ['\'', '"', '\''], russian: ['э', 'Э'] },
  { english: ['\\', '|', '\\'], russian: ['\\', '/'] },
  { english: ['Enter', 'Enter', 'Enter'], russian: ['Enter', 'Enter'] },
  { english: ['Shift', 'Shift', 'Shift'], russian: ['Shift', 'Shift'] },
  { english: ['z', 'Z', 'Z'], russian: ['я', 'Я'] },
  { english: ['x', 'X', 'X'], russian: ['ч', 'Ч'] },
  { english: ['c', 'C', 'C'], russian: ['с', 'С'] },
  { english: ['v', 'V', 'V'], russian: ['м', 'М'] },
  { english: ['b', 'B', 'B'], russian: ['и', 'И'] },
  { english: ['n', 'N', 'N'], russian: ['т', 'Т'] },
  { english: ['m', 'M', 'M'], russian: ['ь', 'Ь'] },
  { english: [',', '<', '<'], russian: ['б', 'Б'] },
  { english: ['.', '>', '>'], russian: ['ю', 'Ю'] },
  { english: ['?', '/', '/'], russian: ['.', ','] },
  { english: ['↑', '↑', '↑'], russian: ['↑', '↑'] },
  { english: ['Shift', 'Shift', 'Shift'], russian: ['Shift', 'Shift'] },
  { english: ['Ctrl', 'Ctrl', 'Ctrl'], russian: ['Ctrl', 'Ctrl'] },
  { english: ['Win', 'Win', 'Win'], russian: ['Win', 'Win'] },
  { english: ['Alt', 'Alt', 'Alt'], russian: ['Alt', 'Alt'] },
  { english: ['', '', ''], russian: ['', ''] },
  { english: ['Alt', 'Alt', 'Alt'], russian: ['Alt', 'Alt'] },
  { english: ['←', '←', '←'], russian: ['←', '←'] },
  { english: ['↓', '↓', '↓'], russian: ['↓', '↓'] },
  { english: ['→', '→', '→'], russian: ['→', '→'] },
  { english: ['Ctrl', 'Ctrl', 'Ctrl'], russian: ['Ctrl', 'Ctrl'] },
];

let capsOn = false;
let shiftOn = false;

let largeKeys = null;
let caps = null;
let shift = [];


function fillKeyboard(caseIndex) {
  symbols.forEach((el) => {
    const key = new Key(el.english[caseIndex]).render();
    switch (el.english[caseIndex]) {
      case 'Backspace':
      case 'Caps':
      case 'Shift':
      case 'Enter':
        key.classList.add('key_large');
        break;
      case 'Tab':
      case 'Del':
      case 'Ctrl':
      case 'Win':
      case 'Alt':
        key.classList.add('key_medium');
        break;
      case '':
        key.classList.add('key_space');
        break;
      default:
    }
    keyboard.append(key);
  });
}

function getCapsAndShift(){
  largeKeys = keyboard.querySelectorAll('.key_large');

largeKeys.forEach((el) => {
  if(el.textContent === 'Caps'){
    caps = el;
  } else if (el.textContent === 'Shift') {
    shift.push(el);
  }
});
}
function addHighlightClass(e) { 
  e.stopPropagation();
  e.target.classList.add('key_pressed');
}
function registerCapsListeners() {
  caps.addEventListener('click', addHighlightClass);
 
 caps.addEventListener('animationend', handleAnimEndForCaps);
}

function registerShiftListeners (){
 shift.forEach((el) => {
  el.addEventListener('click', addHighlightClass );
  el.addEventListener('animationend', handleAnimEndForShift);
  
});
}
function handleCLick(event) {
   cursorPosit = textarea.selectionStart;
  event.target.classList.add('key_pressed');

  switch (event.target.innerText) {
    case 'Backspace':
      if (textarea.selectionStart !== 0) {
        textarea.value = textarea.value.slice(0, textarea.selectionStart - 1)
        + textarea.value.slice(textarea.selectionStart);
        textarea.selectionStart = cursorPosit - 1;
      }
      break;
    case 'Tab':
      textarea.value = textarea.value.slice(0,textarea.selectionStart) + '    ' 
      + textarea.value.slice(textarea.selectionStart);
      textarea.selectionStart = cursorPosit + 4;
      break;
    case 'Del':
      if (textarea.selectionStart < textarea.value.length) {
        textarea.value = textarea.value.slice(0, textarea.selectionStart)
        + textarea.value.slice(textarea.selectionStart + 1);
        textarea.selectionStart = cursorPosit;
      }
      break;
    case 'Caps':
      break;
    case 'Enter':
      textarea.value = textarea.value.slice(0, cursorPosit) + '\n' + textarea.value.slice(cursorPosit);
      textarea.selectionStart = cursorPosit + 1;
      break;
    case 'Shift':
      break;
    case '':
      textarea.value = textarea.value.slice(0, textarea.selectionStart) + ' ' + textarea.value.slice(textarea.selectionStart);
      textarea.selectionStart = cursorPosit + 1;
      break;
    default:
      textarea.value = textarea.value.slice(0, textarea.selectionStart) + event.target.innerText
      + textarea.value.slice(textarea.selectionStart);
      if (shiftOn) {
        shiftOn = false;
        keyboard.innerHTML = '';
        fillKeyboard(0);
        textarea.selectionStart = cursorPosit + 1;
        console.log(cursorPosit);
        console.log(textarea.selectionStart);
        getCapsAndShift();
        registerShiftListeners();
        registerCapsListeners();
      }
      textarea.selectionStart = cursorPosit + 1;
      break;
  }
}

function handleAnimEndForCaps() {
      keyboard.innerHTML = '';
      if (capsOn) { 
        fillKeyboard(0); 
        capsOn = false; 
      } else { 
        fillKeyboard(2); 
        capsOn = true; 
      };
      getCapsAndShift();
      registerCapsListeners();
      registerShiftListeners();
}

function handleAnimEndForShift() {
  keyboard.innerHTML = '';
  fillKeyboard(1);
  shiftOn = true;
  getCapsAndShift();
  registerCapsListeners();
  registerShiftListeners();
}
fillKeyboard(0);
getCapsAndShift();

keyboard.addEventListener('click', handleCLick);
keyboard.addEventListener('animationend', (e) => { e.target.classList.remove('key_pressed') });
registerCapsListeners();
registerShiftListeners();
