const output = document.getElementById('output');
const keyboard = document.getElementById('keyboard');
const copyBtn = document.getElementById('copyBtn');

const keys = [
  'ض','ص','ث','ق','ف','غ','ع','ه','خ','ح','ج','چ',
  'ش','س','ی','ب','ل','ا','ت','ن','م','ک','گ','ظ',
  'ط','ز','ر','ذ','د','پ','و','؟','،',' ',
];

keys.forEach(key => {
    const button = document.createElement('div');
    button.textContent = key;
    button.className = 'key';
    button.addEventListener('click', () => {
        output.value += key;
    });
    keyboard.appendChild(button);
});

copyBtn.addEventListener('click', () => {
    output.select();
    navigator.clipboard.writeText(output.value).then(() => {
        alert('Text copied to clipboard!');
    });
});