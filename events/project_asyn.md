# Projects 

link: https://stackblitz.com/edit/dom-project-chaiaurcode?file=6-unlimitedColors%2Fchaiaurcode.js

# Project 1 (Unlimited Colors)

``` javascript code
const randomcolor = function(){
  const hex='0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i<6 ; i++){
    color += hex[Math.floor(Math.random()*16)]
  }
  return color
}
let interval
const startchanging = function(){
   if(!interval){ 
    interval = setInterval(changeBackground,1000)
   }

  function changeBackground(){
    document.body.style.backgroundColor= randomcolor()
  }
};
const stopchanging = function(){
    clearInterval(interval)
    interval =null //so that memory becomes free 
}

document.querySelector('#start').addEventListener('click',startchanging)
document.querySelector('#stop').addEventListener('click',stopchanging)

```

# Project 2 (Keyboard Check)

``` javascript code
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});

```