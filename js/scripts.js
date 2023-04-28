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
  { english: ['`', '~'], russian: ['ё', 'Ё'] },
  { english: ['1', '!'], russian: ['1', '!'] },
  { english: ['2', '@'], russian: ['2', '"'] },
  { english: ['3', '#'], russian: ['3', '№'] },
  { english: ['4', '$'], russian: ['4', ';'] },
  { english: ['5', '%'], russian: ['5', '%'] },
  { english: ['6', '^'], russian: ['6', ':'] },
  { english: ['7', '&'], russian: ['7', '?'] },
  { english: ['8', '*'], russian: ['8', '*'] },
  { english: ['9', '('], russian: ['9', '('] },
  { english: ['0', ')'], russian: ['0', ')'] },
  { english: ['-', '_'], russian: ['-', '_'] },
  { english: ['=', '+'], russian: ['=', '+'] },
  { english: ['Backspace', 'Backspace'], russian: ['Backspace', 'Backspace'] },
  { english: ['Tab', 'Tab'], russian: ['Tab', 'Tab'] },
  { english: ['q', 'Q'], russian: ['й', 'Й'] },
  { english: ['w', 'w'], russian: ['ц', 'Ц'] },
  { english: ['e', 'E'], russian: ['у', 'У'] },
  { english: ['r', 'R'], russian: ['к', 'К'] },
  { english: ['t', 'T'], russian: ['е', 'Е'] },
  { english: ['y', 'Y'], russian: ['н', 'Н'] },
  { english: ['u', 'U'], russian: ['г', 'Г'] },
  { english: ['i', 'I'], russian: ['ш', 'Ш'] },
  { english: ['o', 'O'], russian: ['щ', 'Щ'] },
  { english: ['p', 'P'], russian: ['з', 'З'] },
  { english: ['[', '{'], russian: ['х', 'Х'] },
  { english: [']', '}'], russian: ['ъ', 'Ъ'] },
  { english: ['Del', 'Del'], russian: ['Del', 'Del'] },
  { english: ['Caps', 'Caps'], russian: ['Caps', 'Caps'] },
  { english: ['a', 'A'], russian: ['ф', 'Ф'] },
  { english: ['s', 'S'], russian: ['ы', 'ы'] },
  { english: ['d', 'D'], russian: ['в', 'В'] },
  { english: ['f', 'F'], russian: ['а', 'А'] },
  { english: ['g', 'G'], russian: ['п', 'П'] },
  { english: ['h', 'H'], russian: ['р', 'Р'] },
  { english: ['j', 'J'], russian: ['о', 'О'] },
  { english: ['k', 'K'], russian: ['л', 'Л'] },
  { english: ['l', 'L'], russian: ['д', 'Д'] },
  { english: [';', ':'], russian: ['ж', 'Ж'] },
  { english: ['\'', '"'], russian: ['э', 'Э'] },
  { english: ['\\', '|'], russian: ['\\', '/'] },
  { english: ['Enter', 'Enter'], russian: ['Enter', 'Enter'] },
  { english: ['Shift', 'Shift'], russian: ['Shift', 'Shift'] },
  { english: ['z', 'Z'], russian: ['я', 'Я'] },
  { english: ['x', 'X'], russian: ['ч', 'Ч'] },
  { english: ['c', 'C'], russian: ['с', 'С'] },
  { english: ['v', 'V'], russian: ['м', 'М'] },
  { english: ['b', 'B'], russian: ['и', 'И'] },
  { english: ['n', 'N'], russian: ['т', 'Т'] },
  { english: ['m', 'M'], russian: ['ь', 'Ь'] },
  { english: [',', '<'], russian: ['б', 'Б'] },
  { english: ['.', '>'], russian: ['ю', 'Ю'] },
  { english: ['?', '/'], russian: ['.', ','] },
  { english: ['↑', '↑'], russian: ['↑', '↑'] },
  { english: ['Shift', 'Shift'], russian: ['Shift', 'Shift'] },
  { english: ['Ctrl'], russian: ['Ctrl', 'Ctrl'] },
  { english: ['Win'], russian: ['Win', 'Win'] },
  { english: ['Alt'], russian: ['Alt', 'Alt'] },
  { english: [''], russian: ['', ''] },
  { english: ['Alt'], russian: ['Alt', 'Alt'] },
  { english: ['←', '←'], russian: ['←', '←'] },
  { english: ['↓', '↓'], russian: ['↓', '↓'] },
  { english: ['→', '→'], russian: ['→', '→'] },
  { english: ['Ctrl'], russian: ['Ctrl', 'Ctrl'] },
];

function fillKeyboard() {
  symbols.forEach((el) => {
    const key = new Key(el.english[0]).render();
    switch (el.english[0]) {
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

function handleCLick(event){
  
  console.log(textarea.selectionStart);
  switch (event.target.innerText) {
    case 'Backspace':
      let arr = textarea.value.split('');
      arr.length = (arr.length !== 0) ?  arr.length-1 : arr.length;
      textarea.value = arr.join('');
      break;
    case 'Tab':
      textarea.value = textarea.value + '    ';
      break;
    case 'Del':
      textarea.value = textarea.value + '    ';
      break;  
    default:
      let str1 = textarea.value.slice(0,textarea.selectionStart);
      let str2 = textarea.value.slice(textarea.selectionStart);
      str1 = str1+ event.target.innerText;
      textarea.value = str1 + str2;
      break;
  }


}
fillKeyboard();

keyboard.addEventListener('click', handleCLick);