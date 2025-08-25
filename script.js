const output = document.getElementById('output');
const keyboard = document.getElementById('keyboard');
const copyBtn = document.getElementById('copyBtn');

// Persian letters with small spoken-word hints
const keys = [
  {fa:'ض', word:'zoo'}, {fa:'ص', word:'saw'}, {fa:'ث', word:'think'}, {fa:'ق', word:'ghoul'}, {fa:'ف', word:'fun'}, 
  {fa:'غ', word:'ghost'}, {fa:'ع', word:"uh"}, {fa:'ه', word:'hat'}, {fa:'خ', word:'khan'}, {fa:'ح', word:'hot'}, 
  {fa:'ج', word:'jam'}, {fa:'چ', word:'chat'}, {fa:'ش', word:'shut'}, {fa:'س', word:'sun'}, {fa:'ی', word:'yes'}, 
  {fa:'ب', word:'bat'}, {fa:'ل', word:'lot'}, {fa:'ا', word:'ah'}, {fa:'ت', word:'top'}, {fa:'ن', word:'nap'}, 
  {fa:'م', word:'man'}, {fa:'ک', word:'kit'}, {fa:'گ', word:'go'}, {fa:'ظ', word:'zoo'}, {fa:'ط', word:'top'}, 
  {fa:'ز', word:'zip'}, {fa:'ر', word:'run'}, {fa:'ذ', word:'this'}, {fa:'د', word:'dog'}, {fa:'پ', word:'pan'}, 
  {fa:'و', word:'voo'}, {fa:'؟', word:'?'} , {fa:'،', word:','}, {fa:' ', word:'space'}
];

keys.forEach(key => {
    const button = document.createElement('div');
    button.className = 'key';
    
    const faSpan = document.createElement('span');
    faSpan.textContent = key.fa;
    faSpan.className = 'fa-letter';
    
    const wordSpan = document.createElement('span');
    wordSpan.textContent = key.word;
    wordSpan.className = 'en-word';
    
    button.appendChild(faSpan);
    button.appendChild(document.createElement('br'));
    button.appendChild(wordSpan);

    button.addEventListener('click', () => {
        output.value += key.fa;
    });
    
    keyboard.appendChild(button);
});

copyBtn.addEventListener('click', () => {
    output.select();
    navigator.clipboard.writeText(output.value).then(() => {
        alert('Text copied to clipboard!');
    });
});