let body = document.getElementById('body');
body.style['backgroundColor'] = 'lightcyan';

const editor = document.getElementById('editor');
editor.value = "select * from airplanes";

const btn = document.getElementById('execute-btn');
const result = document.getElementById('result');

btn.onclick = function(event) {
  const resultSQL = "{ id: 1 } <br/> { id: 2 } <br/> { id: 3 }";
  result.innerHTML = resultSQL;
}
