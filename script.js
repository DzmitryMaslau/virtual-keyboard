const lowerEng = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

const upperEng = [['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

const capsEng = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

const shiftCapsEng = [['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

const lowerRu = [['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

const upperRu = [['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

const capitalRu = [['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

const shiftCapsRu = [['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

  const selectedLanguage = localStorage.getItem('lang');

if (!selectedLanguage) {
  localStorage.setItem('lang', 'en');
}

const container = document.createElement('div');
const heading = document.createElement('p');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');


container.classList.add('wrapper');
heading.classList.add('title');
textarea.classList.add('body-textarea', 'textarea');
textarea.id = 'textarea';
textarea.rows = 50;
textarea.cols = 5;
textarea.setAttribute('autofocus', '');
keyboard.classList.add('body-keyboard', 'keyboard');

const row1 = document.createElement('div');
const row2 = document.createElement('div');
const row3 = document.createElement('div');
const row4 = document.createElement('div');
const row5 = document.createElement('div');

row1.classList.add('keyboard-row', 'row', 'row1');
row2.classList.add('keyboard-row', 'row', 'row2');
row3.classList.add('keyboard-row', 'row', 'row3');
row4.classList.add('keyboard-row', 'row', 'row4');
row5.classList.add('keyboard-row', 'row', 'row5');

document.body.append(container);
container.append(heading, textarea, keyboard);
heading.textContent = 'RSS Виртуальная клавиатура';
keyboard.append(row1, row2, row3, row4, row5);


function createKeys(keysNumber, rowNumber, arrNumber) {
  for (let i = 0; i < keysNumber; i++) {
    const key = document.createElement('div');
    key.classList.add('k-key', 'key');

  // Раскладка
    const keyEng = document.createElement('span');
    keyEng.classList.add('eng');


    const lowerCase = document.createElement('span');
    lowerCase.classList.add('lower-case');
    lowerCase.textContent = lowerEng[arrNumber][i];

    const upperCase = document.createElement('span');
    upperCase.classList.add('upper-case', 'hidden');
    upperCase.textContent = upperEng[arrNumber][i];

    const caps = document.createElement('span');
    caps.classList.add('caps', 'hidden');
    caps.textContent = capsEng[arrNumber][i];
    const shiftCaps = document.createElement('span');
    shiftCaps.classList.add('shiftCaps', 'hidden');
    shiftCaps.textContent = shiftCapsEng[arrNumber][i];


    const keyRu = document.createElement('span');
    keyRu.classList.add('ru', 'hidden');

    const lowerCaseRu = document.createElement('span');
  lowerCaseRu.classList.add('lower-case');
    lowerCaseRu.textContent = lowerRu[arrNumber][i];


    const upperCaseRu = document.createElement('span');
    upperCaseRu.classList.add('upper-case', 'hidden');
    upperCaseRu.textContent = upperRu[arrNumber][i];

    const capsRu = document.createElement('span');
    capsRu.classList.add('caps', 'hidden');
    capsRu.textContent = capitalRu[arrNumber][i];

    const ShiftCapsRu = document.createElement('span');
    ShiftCapsRu.classList.add('shift-caps', 'hidden');
    ShiftCapsRu.textContent = shiftCapsRu[arrNumber][i];

    keyEng.append(lowerCase, upperCase, caps, shiftCaps);

    keyRu.append(lowerCaseRu, upperCaseRu, capsRu, ShiftCapsRu);

    key.append(keyEng, keyRu);
    rowNumber.append(key);
  }
}

createKeys(14, row1, 0);
createKeys(15, row2, 1);
createKeys(13, row3, 2);
createKeys(13, row4, 3);
createKeys(9, row5, 4);

const keyDown = document.querySelectorAll('.lower-case');
const keyUp = document.querySelectorAll('.upper-case');
const keyCaps = document.querySelectorAll('.caps');

const keys = document.querySelectorAll('.key');
const keysEng = document.querySelectorAll('.eng');
const keysRu = document.querySelectorAll('.ru');

const caps = document.querySelectorAll('.caps');
const shiftCaps = document.querySelectorAll('.shift-caps');

if (localStorage.getItem('lang') === 'en') {
  keysEng.forEach((e) => e.classList.remove('hidden'));
  keysRu.forEach((e) => e.classList.add('hidden'));
} else {
  keysEng.forEach((e) => e.classList.add('hidden'));
  keysRu.forEach((e) => e.classList.remove('hidden'));
}

for (let i = 0; i < keyDown.length; i++) {
  const key = keyDown[i];
  key.addEventListener('click', (event) => {
    if (event.target.textContent === 'Tab') {
      textarea.value += '    ';
      return null;
    }
    if (event.target.textContent === 'Enter') {
      textarea.value += '\n';
      return null;
    }
    if (event.target.textContent === 'Backspace') {
      textarea.value = textarea.value.slice(0, -1);
      return null;
    }
    if (event.target.textContent === 'Shift') {
      return null;
    }
    if (event.target.textContent === 'Ctrl') {
      return null;
    }
    if (event.target.textContent === 'Del') {
      textarea.value = textarea.value.slice(0, -1);
      return null;
    }
    if (event.target.textContent === 'Win') {
      return null;
    }


    if (event.target.textContent === 'Alt') {
      keysEng.forEach((e) => e.classList.toggle('hidden'));
      keysRu.forEach((e) => e.classList.toggle('hidden'));
      return null;
    }

    if (event.target.textContent === 'CapsLock') {
      row3.firstChild.classList.add('key-active');
      caps.forEach((e) => e.classList.remove('hidden'));
      keyDown.forEach((e) => e.classList.add('hidden'));
      return null;
    }
    textarea.value += event.target.textContent;
    return null;
  });
}

for (let i = 0; i < keyUp.length; i++) {
  const key = keyUp[i];
  key.addEventListener('click', (event) => {
    if (event.target.textContent === 'Tab') {
      textarea.value += '    ';
      return null;
    }
    if (event.target.textContent === 'Backspace') {
      textArea.value = textarea.value.slice(0, -1);
      return null;
    }
    if (event.target.textContent === 'Shift') {
      return null;
    }
    if (event.target.textContent === 'Ctrl') {
      return null;
    }
    if (event.target.textContent === 'Win') {
      return null;
    }

    if (event.target.textContent === 'Alt') {
      keysEng.forEach((e) => e.classList.toggle('hidden'));
      keysRu.forEach((e) => e.classList.toggle('hidden'));
      return null;
    }
    if (event.target.textContent === 'Del') {
      return null;
    }
    if (event.target.textContent === 'Enter') {
      row3.lastChild.classList.add('key-active');
      textarea.value += '\n';
      return null;
    }
    if (event.target.textContent === 'CapsLock') {
      row3.firstChild.classList.add('key-active');
      for (let j = 0; j < keyCaps.length; j++) {
        const keyCaps = keysCaps[j];
        keyCaps.classList.remove('hidden');
      }
      for (let k = 0; k < keyDown.length; k++) {
        const keyDown = keyDown[k];
        keyDown.classList.add('hidden');
      }
      return null;
    }
    textarea.value += event.target.textContent;
    return null;
  });
}

for (let i = 0; i < keyCaps.length; i++) {
  const key = keyCaps[i];
  key.addEventListener('click', (event) => {
    if (event.target.textContent === 'Tab') {
      textarea.value += '    ';
      return null;
    }
    if (event.target.textContent === 'Backspace') {
      textarea.value = textarea.value.slice(0, -1);
      return null;
    }
    if (event.target.textContent === 'Shift') {
      return null;
    }
    if (event.target.textContent === 'Ctrl') {
      return null;
    }

    if (event.target.textContent === 'Alt') {
      keysEng.forEach((e) => e.classList.toggle('hidden'));
      keysRu.forEach((e) => e.classList.toggle('hidden'));
      return null;
    }
    if (event.target.textContent === 'CapsLock') {
      row3.firstChild.classList.remove('key-active');
      for (let j = 0; j < keyCaps.length; j++) {
        const keyCaps = keyCaps[j];
        keyCaps.classList.add('hidden');
      }
      for (let k = 0; k < keyDown.length; k++) {
        const keyDown = keyDown[k];
        keyDown.classList.remove('hidden');
      }
      return null;
    }
    textarea.value += event.target.textContent;
    return null;
  });
}

row4.firstChild.addEventListener('mousedown', () => {
  row4.firstChild.classList.add('key-active');
  for (let j = 0; j < keyDown.length; j++) {
    const keyDown = keyDown[j];
    keyDown.classList.add('hidden');
  }
  for (let k = 0; k < keyUp.length; k++) {
    const keyUp = keyUp[k];
    keyUp.classList.remove('hidden');
  }
});
row4.firstChild.addEventListener('mouseup', () => {
  for (let j = 0; j < keyDown.length; j++) {
    const keyDown = keyDown[j];
    keyDown.classList.remove('hidden');
  }
  for (let k = 0; k < keyUp.length; k++) {
    const keyUp = keyUp[k];
    keyUp.classList.add('hidden');
  }
});
row4.lastChild.addEventListener('mousedown', () => {
  row4.lastChild.classList.add('key-active');
  for (let j = 0; j < keyDown.length; j++) {
    const keyDown = keyDown[j];
    keyDown.classList.add('hidden');
  }
  for (let k = 0; k < keyUp.length; k++) {
    const keyUp = keyUp[k];
    keyUp.classList.remove('hidden');
  }
});
row4.lastChild.addEventListener('mouseup', () => {
  for (let j = 0; j < keyDown.length; j++) {
    const keyDown = keyDown[j];
    keyDown.classList.remove('hidden');
  }
  for (let k = 0; k < keyUp.length; k++) {
    const keyUp = keyUp[k];
    keyUp.classList.add('hidden');
  }
});

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  key.addEventListener('mouseover', () => {
    key.classList.add('key-hover');
  });
  key.addEventListener('mouseout', () => {
    key.classList.remove('key-hover');

    if (key.firstChild.firstChild.textContent === 'CapsLock') {
      return key.classList.remove('key-hover');
    }
    if (key.firstChild.firstChild.textContent === 'Shift') {
      return null;
    }

    return key.classList.remove('key-active');
  });
  key.addEventListener('mousedown', () => {
    if (key.firstChild.firstChild.textContent === 'CapsLock') {
      return;
    }
    if (key.firstChild.firstChild.textContent === 'Shift') {
      return;
    }
    key.classList.add('key-active');
  });
  key.addEventListener('mouseup', () => {
    if (key.firstChild.firstChild.textContent === 'CapsLock') {
      return;
    }
    if (key.firstChild.firstChild.textContent === 'CapsLock') {
      return;
    }
    key.classList.remove('key-active');
  });
}

document.addEventListener('keydown', (event) => {
  event.preventDefault();

  // Переключение языка
  if (event.key === 'Alt') {
    if (localStorage.getItem('lang') === 'en') {
      keysEng.forEach((e) => e.classList.add('hidden'));
      keysRu.forEach((e) => e.classList.remove('hidden'));
      localStorage.setItem('lang', 'ru');
    } else {
      keysEng.forEach((e) => e.classList.remove('hidden'));
      keysRu.forEach((e) => e.classList.add('hidden'));
      localStorage.setItem('lang', 'en');
    }
  }

  if (event.key === 'Shift') {
    if (event.changeState('CapsLock')) {
      keyDown.forEach((e) => e.classList.add('hidden'));
      caps.forEach((e) => e.classList.add('hidden'));
      shiftCaps.forEach((e) => e.classList.remove('hidden'));

    }
    if (!event.changeState('CapsLock')) {
      row4.firstChild.classList.add('key-active');
      row4.lastChild.classList.add('key-active');
      keyDown.forEach((e) => e.classList.add('hidden'));
      keyUp.forEach((e) => e.classList.remove('hidden'));
      return;
    }
  }

  if (event.key === 'CapsLock') {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      key.firstChild.firstChild.classList.toggle('hidden');
      key.firstChild.childNodes[2].classList.toggle('hidden');

      key.lastChild.firstChild.classList.toggle('hidden');
      key.lastChild.childNodes[2].classList.toggle('hidden');
    }
    row3.firstChild.classList.toggle('key-active');
    return;
  }

  if (event.key === ' ') {
    row5.childNodes[3].classList.add('key-active');
    textarea.value += ' ';
    return;
  }

  if (event.key === 'Delete') {
    row2.lastChild.classList.add('key-active');
    textarea.value = textarea.value.slice(0, -1);
    return;
  }

  if (event.key === 'Meta') {
    row5.childNodes[1].classList.add('key-active');
    return;
  }

  if (event.key === 'Alt') {
    row5.childNodes[2].classList.add('key-active');
    row5.childNodes[4].classList.add('key-active');
    return;
  }

  if (event.key === 'Control') {
    row5.firstChild.classList.add('key-active');
    row5.lastChild.classList.add('key-active');
    return;
  }

  if (event.key === 'Tab') {
    event.preventDefault();
    row2.firstChild.classList.add('key-active');
    textarea.value += '    ';
    return;
  }

  if (event.key === 'Backspace') {
    row1.lastChild.classList.add('key-active');
    textarea.value = textarea.value.slice(0, -1);
    return;
  }

  if (event.key === 'ArrowUp') {
    row4.childNodes[11].classList.add('key-active');
    textarea.value += row4.childNodes[11].firstChild.firstChild.textContent;
    return;
  }

  if (event.key === 'ArrowDown') {
    row5.childNodes[6].classList.add('key-active');
    textarea.value += row5.childNodes[6].firstChild.firstChild.textContent;
    return;
  }

  if (event.key === 'ArrowLeft') {
    row5.childNodes[5].classList.add('key-active');
    textarea.value += row5.childNodes[5].firstChild.firstChild.textContent;
    return;
  }

  if (event.key === 'ArrowRight') {
    row5.childNodes[7].classList.add('key-active');
    textarea.value += row5.childNodes[7].firstChild.firstChild.textContent;
    return;
  }

  if (event.key === 'Enter') {
    row3.lastChild.classList.add('key-active');
    textarea.value += '\n';
    return;
  }

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (event.key === key.firstChild.firstChild.textContent) {
      key.classList.add('key-active');
    }
    if (event.key === key.firstChild.childNodes[1].textContent) {
      key.classList.add('key-active');
    }
  }

  if (keys[0].lastChild.classList.contains('hidden')) {
    if (event.key === 'CapsLock') {
      return;
    }


    if (!keys[0].firstChild.childNodes[1].classList.contains('hidden')) {
      if (event.key === 'CapsLock') {
        return;
      }
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key.firstChild.childNodes[0].textContent === event.key
        || key.firstChild.childNodes[1].textContent === event.key) {
          textarea.value += key.firstChild.childNodes[1].textContent;
        }
      }
      return;
    }


    if (!keys[0].firstChild.childNodes[2].classList.contains('hidden')) {
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key.firstChild.firstChild.textContent === event.key
        || key.firstChild.childNodes[2].textContent === event.key) {
          textarea.value += key.firstChild.childNodes[2].textContent;
        }
      }
      return;
    }
    textarea.value += event.key;
  }

  if (keys[0].firstChild.classList.contains('hidden')) {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      
      if (keys[0].lastChild.childNodes[1].classList.contains('hidden') && keys[0].lastChild.childNodes[2].classList.contains('hidden')) {
        if (event.key === 'CapsLock') {
          return;
        }
        if (key.firstChild.firstChild.textContent === event.key) {
          textarea.value += key.lastChild.firstChild.textContent;
        }
      }

      if (keys[0].lastChild.firstChild.classList.contains('hidden') && keys[0].lastChild.childNodes[2].classList.contains('hidden')) {
        if (event.key === 'CapsLock') {
          return;
        }
        if (key.firstChild.childNodes[1].textContent === event.key
          || key.firstChild.childNodes[0].textContent === event.key) {
          textarea.value += key.lastChild.childNodes[1].textContent;
        }
      }

      if (keys[0].lastChild.firstChild.classList.contains('hidden') && keys[0].lastChild.childNodes[1].classList.contains('hidden')) {
        if (event.key === 'CapsLock') {
          return;
        }
        if (key.firstChild.firstChild.textContent === event.key
          || key.firstChild.childNodes[2].textContent === event.key) {
          textarea.value += key.lastChild.childNodes[2].textContent;
        }
      }
    }
  }
});

document.addEventListener('keyup', (event) => {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (event.key === key.firstChild.firstChild.textContent) {
      key.classList.remove('key-active');
    }
    if (event.key === key.firstChild.childNodes[1].textContent) {
      key.classList.remove('key-active');
    }

    if (event.key === 'Delete') {
      row2.lastChild.classList.remove('key-active');
      return;
    }

    if (event.key === 'Control') {
      row5.firstChild.classList.remove('key-active');
      row5.lastChild.classList.remove('key-active');
      return;
    }

    if (event.key === 'Shift') {
      if (event.getModifierState('CapsLock')) {
        keyDown.forEach((e) => e.classList.remove('hidden'));
        caps.forEach((e) => e.classList.remove('hidden'));
        shiftCaps.forEach((e) => e.classList.add('hidden'));
        return;
      }
      if (!event.getModifierState('CapsLock')) {
        row4.firstChild.classList.remove('key-active');
        row4.lastChild.classList.remove('key-active');
        keyDown.forEach((e) => e.classList.remove('hidden'));
        keyUp.forEach((e) => e.classList.add('hidden'));
        return;
      }
    }

    if (event.key === 'CapsLock') {
      return;
    }

    if (event.key === 'Meta') {
      row5.childNodes[1].classList.remove('key-active');
    }

    if (event.key === 'ArrowUp') {
      row4.childNodes[11].classList.remove('key-active');
    }
    if (event.key === 'ArrowDown') {
      row5.childNodes[6].classList.remove('key-active');
    }
    if (event.key === 'ArrowLeft') {
      row5.childNodes[5].classList.remove('key-active');
    }
    if (event.key === 'ArrowRight') {
      row5.childNodes[7].classList.remove('key-active');
    }

    if (event.key === ' ') {
      row5.childNodes[3].classList.remove('key-active');
    }
  }
});
