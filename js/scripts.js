/* eslint-env browser */
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
textarea.readOnly = true;
description.innerText = 'This virtual keyboard is made for Windows OS, you can alter the language layout with Ctrl + Alt';

container.prepend(heading, textarea, keyboard, description, shortcutParag);
body.prepend(container);

class Key {
  constructor(value, id) {
    this.value = value;
    this.id = id;
  }

  render() {
    const key = document.createElement('div');
    key.id = this.id;
    key.className = 'key';
    key.innerText = `${this.value}`;
    return key;
  }
}

const symbols = [
  { english: ['`', '~', '`'], russian: ['ё', 'Ё', 'Ё'], code: 'Backquote' },
  { english: ['1', '!', '1'], russian: ['1', '!', '1'], code: 'Digit1' },
  { english: ['2', '@', '2'], russian: ['2', '"', '2'], code: 'Digit2' },
  { english: ['3', '#', '3'], russian: ['3', '№', '3'], code: 'Digit3' },
  { english: ['4', '$', '4'], russian: ['4', ';', '4'], code: 'Digit4' },
  { english: ['5', '%', '5'], russian: ['5', '%', '5'], code: 'Digit5' },
  { english: ['6', '^', '6'], russian: ['6', ':', '6'], code: 'Digit6' },
  { english: ['7', '&', '7'], russian: ['7', '?', '7'], code: 'Digit7' },
  { english: ['8', '*', '8'], russian: ['8', '*', '8'], code: 'Digit8' },
  { english: ['9', '(', '9'], russian: ['9', '(', '9'], code: 'Digit9' },
  { english: ['0', ')', '0'], russian: ['0', ')', '0'], code: 'Digit0' },
  { english: ['-', '_', '-'], russian: ['-', '_', '-'], code: 'Minus' },
  { english: ['=', '+', '='], russian: ['=', '+', '='], code: 'Equal' },
  { english: ['Backspace', 'Backspace', 'Backspace'], russian: ['Backspace', 'Backspace', 'Backspace'], code: 'Backspace' },
  { english: ['Tab', 'Tab', 'Tab'], russian: ['Tab', 'Tab', 'Tab'], code: 'Tab' },
  { english: ['q', 'Q', 'Q'], russian: ['й', 'Й', 'Й'], code: 'KeyQ' },
  { english: ['w', 'W', 'W'], russian: ['ц', 'Ц', 'Ц'], code: 'KeyW' },
  { english: ['e', 'E', 'E'], russian: ['у', 'У', 'У'], code: 'KeyE' },
  { english: ['r', 'R', 'R'], russian: ['к', 'К', 'К'], code: 'KeyR' },
  { english: ['t', 'T', 'T'], russian: ['е', 'Е', 'Е'], code: 'KeyT' },
  { english: ['y', 'Y', 'Y'], russian: ['н', 'Н', 'Н'], code: 'KeyY' },
  { english: ['u', 'U', 'U'], russian: ['г', 'Г', 'Г'], code: 'KeyU' },
  { english: ['i', 'I', 'I'], russian: ['ш', 'Ш', 'Ш'], code: 'KeyI' },
  { english: ['o', 'O', 'O'], russian: ['щ', 'Щ', 'Щ'], code: 'KeyO' },
  { english: ['p', 'P', 'P'], russian: ['з', 'З', 'З'], code: 'KeyP' },
  { english: ['[', '{', '['], russian: ['х', 'Х', 'Х'], code: 'BracketLeft' },
  { english: [']', '}', ']'], russian: ['ъ', 'Ъ', 'Ъ'], code: 'BracketRight' },
  { english: ['Del', 'Del', 'Del'], russian: ['Del', 'Del', 'Del'], code: 'Delete' },
  { english: ['Caps', 'Caps', 'Caps'], russian: ['Caps', 'Caps', 'Caps'], code: 'CapsLock' },
  { english: ['a', 'A', 'A'], russian: ['ф', 'Ф', 'Ф'], code: 'KeyA' },
  { english: ['s', 'S', 'S'], russian: ['ы', 'ы', 'ы'], code: 'KeyS' },
  { english: ['d', 'D', 'D'], russian: ['в', 'В', 'В'], code: 'KeyD' },
  { english: ['f', 'F', 'F'], russian: ['а', 'А', 'А'], code: 'KeyF' },
  { english: ['g', 'G', 'G'], russian: ['п', 'П', 'П'], code: 'KeyG' },
  { english: ['h', 'H', 'H'], russian: ['р', 'Р', 'Р'], code: 'KeyH' },
  { english: ['j', 'J', 'J'], russian: ['о', 'О', 'О'], code: 'KeyJ' },
  { english: ['k', 'K', 'K'], russian: ['л', 'Л', 'Л'], code: 'KeyK' },
  { english: ['l', 'L', 'L'], russian: ['д', 'Д', 'Д'], code: 'KeyL' },
  { english: [';', ':', ';'], russian: ['ж', 'Ж', 'Ж'], code: 'Semicolon' },
  { english: ['\'', '"', '\''], russian: ['э', 'Э', 'Э'], code: 'Quote' },
  { english: ['\\', '|', '\\'], russian: ['\\', '/', '\\'], code: 'Backslash' },
  { english: ['Enter', 'Enter', 'Enter'], russian: ['Enter', 'Enter', 'Enter'], code: 'Enter' },
  { english: ['Shift', 'Shift', 'Shift'], russian: ['Shift', 'Shift', 'Shift'], code: 'ShiftLeft' },
  { english: ['z', 'Z', 'Z'], russian: ['я', 'Я', 'Я'], code: 'KeyZ' },
  { english: ['x', 'X', 'X'], russian: ['ч', 'Ч', 'Ч'], code: 'KeyX' },
  { english: ['c', 'C', 'C'], russian: ['с', 'С', 'С'], code: 'KeyC' },
  { english: ['v', 'V', 'V'], russian: ['м', 'М', 'М'], code: 'KeyV' },
  { english: ['b', 'B', 'B'], russian: ['и', 'И', 'И'], code: 'KeyB' },
  { english: ['n', 'N', 'N'], russian: ['т', 'Т', 'Т'], code: 'KeyN' },
  { english: ['m', 'M', 'M'], russian: ['ь', 'Ь', 'Ь'], code: 'KeyM' },
  { english: [',', '<', '<'], russian: ['б', 'Б', 'Б'], code: 'Comma' },
  { english: ['.', '>', '>'], russian: ['ю', 'Ю', 'Ю'], code: 'Period' },
  { english: ['?', '/', '/'], russian: ['.', ',', '.'], code: 'Slash' },
  { english: ['↑', '↑', '↑'], russian: ['↑', '↑', '↑'], code: 'ArrowUp' },
  { english: ['Shift', 'Shift', 'Shift'], russian: ['Shift', 'Shift', 'Shift'], code: 'ShiftRight' },
  { english: ['Ctrl', 'Ctrl', 'Ctrl'], russian: ['Ctrl', 'Ctrl', 'Ctrl'], code: 'ControlLeft' },
  { english: ['Win', 'Win', 'Win'], russian: ['Win', 'Win', 'Win'], code: 'MetaLeft' },
  { english: ['Alt', 'Alt', 'Alt'], russian: ['Alt', 'Alt', 'Alt'], code: 'AltLeft' },
  { english: [' ', ' ', ' '], russian: [' ', ' ', ' '], code: 'Space' },
  { english: ['Alt', 'Alt', 'Alt'], russian: ['Alt', 'Alt', 'Alt'], code: 'AltRight' },
  { english: ['←', '←', '←'], russian: ['←', '←', '←'], code: 'ArrowLeft' },
  { english: ['↓', '↓', '↓'], russian: ['↓', '↓', '↓'], code: 'ArrowDown' },
  { english: ['→', '→', '→'], russian: ['→', '→', '→'], code: 'ArrowRight' },
  { english: ['Ctrl', 'Ctrl', 'Ctrl'], russian: ['Ctrl', 'Ctrl', 'Ctrl'], code: 'ControlRight' },
];

let capsOn = false;
let shiftOn = false;
let control = false;

let largeKeys = null;
let caps = null;
const shift = [];
let lang;
let cursorPosit;
let controlLeft;
let controlRight;
if (localStorage.getItem('language')) {
  lang = localStorage.getItem('language');
} else {
  localStorage.setItem('language', 'english');
  lang = localStorage.getItem('language');
}
const langEvent = new Event('lang-change');
function fillKeyboard(caseIndex, language) {
  symbols.forEach((el) => {
    const key = new Key(el[`${language}`][caseIndex], el.code).render();
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
      case ' ':
        key.classList.add('key_space');
        break;
      default:
    }
    keyboard.append(key);
  });
}

function getCapsAndShift() {
  largeKeys = keyboard.querySelectorAll('.key_large');

  largeKeys.forEach((el) => {
    if (el.textContent === 'Caps') {
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
function handleAnimEndForCaps() {
  keyboard.innerHTML = '';
  if (capsOn) {
    fillKeyboard(0, lang);
    capsOn = false;
  } else {
    fillKeyboard(2, lang);
    capsOn = true;
  }
  getCapsAndShift();
  /* eslint-disable no-use-before-define */
  registerCapsListeners();
  registerShiftListeners();
}
function registerCapsListeners() {
  caps.addEventListener('click', addHighlightClass);
  caps.addEventListener('animationend', handleAnimEndForCaps);
}

function registerShiftListeners() {
  shift.forEach((el) => {
    el.addEventListener('click', addHighlightClass);
    el.addEventListener('animationend', handleAnimEndForShift);
  });
}
function handleAnimEndForShift() {
  keyboard.innerHTML = '';
  fillKeyboard(1, lang);
  shiftOn = true;
  getCapsAndShift();
  registerCapsListeners();
  registerShiftListeners();
}
function switchCtrl(switchStatus) {
  controlLeft = document.getElementById('ControlLeft');
  controlRight = document.getElementById('ControlRight');
  if (switchStatus !== 0) {
    control = true;
    controlLeft.classList.add('key_highlighted');
    controlRight.classList.add('key_highlighted');
  } else {
    control = false;
    controlLeft.classList.remove('key_highlighted');
    controlRight.classList.remove('key_highlighted');
  }
}
function handleCLick(event) {
  if (event.target.className !== 'keyboard') {
    cursorPosit = textarea.selectionStart;
    event.target.classList.add('key_pressed');

    switch (event.target.innerText) {
      case 'Backspace':
        if (textarea.selectionStart !== 0) {
          textarea.value = textarea.value.slice(0, textarea.selectionStart - 1)
          + textarea.value.slice(textarea.selectionStart);
          textarea.selectionStart = cursorPosit - 1;
        }
        switchCtrl(0);
        break;
      case 'Tab':
        textarea.value = `${textarea.value.slice(0, textarea.selectionStart)}    ${textarea.value.slice(textarea.selectionStart)}`;
        textarea.selectionStart = cursorPosit + 4;
        switchCtrl(0);
        break;
      case 'Del':
        if (textarea.selectionStart < textarea.value.length) {
          textarea.value = textarea.value.slice(0, textarea.selectionStart)
          + textarea.value.slice(textarea.selectionStart + 1);
          textarea.selectionStart = cursorPosit;
        }
        switchCtrl(0);
        break;
      case 'Caps':
        switchCtrl(0);
        break;
      case 'Enter':
        textarea.value = `${textarea.value.slice(0, cursorPosit)}\n${textarea.value.slice(cursorPosit)}`;
        textarea.selectionStart = cursorPosit + 1;
        switchCtrl(0);
        break;
      case 'Shift':
        switchCtrl(0);
        break;
      case 'Ctrl':
        switchCtrl(1);
        break;
      case 'Alt':
        if (control) {
          if (localStorage.getItem('language') === 'english') {
            localStorage.setItem('language', 'russian');
          } else {
            localStorage.setItem('language', 'english');
          }
          lang = localStorage.getItem('language');
          switchCtrl(0);
          document.dispatchEvent(langEvent);
        }
        break;
      case '':
        textarea.value = `${textarea.value.slice(0, textarea.selectionStart)} ${textarea.value.slice(textarea.selectionStart)}`;
        textarea.selectionStart = cursorPosit + 1;
        switchCtrl(0);
        break;
      default:
        textarea.value = textarea.value.slice(0, textarea.selectionStart) + event.target.innerText
        + textarea.value.slice(textarea.selectionStart);
        switchCtrl(0);
        if (shiftOn) {
          shiftOn = false;
          keyboard.innerHTML = '';
          fillKeyboard(0, lang);
          textarea.selectionStart = cursorPosit + 1;
          getCapsAndShift();
          registerShiftListeners();
          registerCapsListeners();
        }
        textarea.selectionStart = cursorPosit + 1;
        break;
    }
  }
}

function handleKeyDown(event) {
  let symbol;
  document.getElementById(event.code).classList.add('key_pressed');
  cursorPosit = textarea.selectionStart;
  switch (event.key) {
    case 'Backspace':
      if (textarea.selectionStart !== 0) {
        textarea.value = textarea.value.slice(0, textarea.selectionStart - 1)
        + textarea.value.slice(textarea.selectionStart);
        textarea.selectionStart = cursorPosit - 1;
      }
      switchCtrl(0);
      break;
    case 'Tab':
      textarea.value = `${textarea.value.slice(0, textarea.selectionStart)}    ${textarea.value.slice(textarea.selectionStart)}`;
      textarea.selectionStart = cursorPosit + 4;
      switchCtrl(0);
      break;
    case 'Delete':
      if (textarea.selectionStart < textarea.value.length) {
        textarea.value = textarea.value.slice(0, textarea.selectionStart)
        + textarea.value.slice(textarea.selectionStart + 1);
        textarea.selectionStart = cursorPosit;
      }
      switchCtrl(0);
      break;
    case 'CapsLock':
      switchCtrl(0);
      break;
    case 'Enter':
      textarea.value = `${textarea.value.slice(0, cursorPosit)}\n${textarea.value.slice(cursorPosit)}`;
      textarea.selectionStart = cursorPosit + 1;
      switchCtrl(0);
      break;
    case 'Shift':
      shiftOn = true;
      switchCtrl(0);
      break;
    case 'Control':
      switchCtrl(1);
      break;
    case 'Alt':
      if (control) {
        if (localStorage.getItem('language') === 'english') {
          localStorage.setItem('language', 'russian');
        } else {
          localStorage.setItem('language', 'english');
        }
        lang = localStorage.getItem('language');
        switchCtrl(0);
        document.dispatchEvent(langEvent);
      }
      break;
    case '':
      textarea.value = `${textarea.value.slice(0, textarea.selectionStart)} ${textarea.value.slice(textarea.selectionStart)}`;
      textarea.selectionStart = cursorPosit + 1;
      break;
    case 'ArrowUp':
      textarea.value = `${textarea.value.slice(0, textarea.selectionStart)}↑${textarea.value.slice(textarea.selectionStart)}`;
      textarea.selectionStart = cursorPosit + 1;
      switchCtrl(0);
      break;
    case 'ArrowDown':
      textarea.value = `${textarea.value.slice(0, textarea.selectionStart)}↓${textarea.value.slice(textarea.selectionStart)}`;
      textarea.selectionStart = cursorPosit + 1;
      switchCtrl(0);
      break;
    case 'ArrowLeft':
      textarea.value = `${textarea.value.slice(0, textarea.selectionStart)}←${textarea.value.slice(textarea.selectionStart)}`;
      textarea.selectionStart = cursorPosit + 1;
      switchCtrl(0);
      break;
    case 'ArrowRight':
      textarea.value = `${textarea.value.slice(0, textarea.selectionStart)}→${textarea.value.slice(textarea.selectionStart)}`;
      textarea.selectionStart = cursorPosit + 1;
      switchCtrl(0);
      break;
    default:
      symbol = symbols.filter((el) => el.code === event.code)[0][`${lang}`];
      if (shiftOn) {
        textarea.value = textarea.value.slice(0, textarea.selectionStart) + symbol[1]
      + textarea.value.slice(textarea.selectionStart);
        shiftOn = false;
        keyboard.innerHTML = '';
        fillKeyboard(0, lang);
        textarea.selectionStart = cursorPosit + 1;
        getCapsAndShift();
        registerShiftListeners();
        registerCapsListeners();
      } else if (capsOn) {
        textarea.value = textarea.value.slice(0, textarea.selectionStart) + symbol[2]
      + textarea.value.slice(textarea.selectionStart);
      } else {
        textarea.value = textarea.value.slice(0, textarea.selectionStart) + symbol[0]
      + textarea.value.slice(textarea.selectionStart);
        textarea.selectionStart = cursorPosit + 1;
      }
      switchCtrl(0);
      break;
  }
}

fillKeyboard(0, lang);
shortcutParag.innerText = `Language:${lang}`;
getCapsAndShift();
keyboard.addEventListener('click', handleCLick);
keyboard.addEventListener('animationend', (e) => {
  e.target.classList.remove('key_pressed');
});
registerCapsListeners();
registerShiftListeners();
document.addEventListener('lang-change', () => {
  shortcutParag.innerText = `Language : ${lang}`;
  keyboard.innerHTML = '';
  fillKeyboard(0, lang);
  getCapsAndShift();
  registerShiftListeners();
  registerCapsListeners();
});
body.addEventListener('keydown', handleKeyDown);
