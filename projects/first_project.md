# Projects related to DOM 

# Project Link: 
[https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js
## project 1 (Switch Background color)
``` javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
  console.log()
  button.addEventListener("click",function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id ==='grey'){
      body.style.backgroundColor ='grey'
    }
    if(e.target.id ==='blue'){
      body.style.backgroundColor ='blue'
    }
    if(e.target.id ==='white'){
      body.style.backgroundColor ='white'
    }
    if(e.target.id ==='yellow'){
      body.style.backgroundColor ='yellow'
    }

  })

})
   

```




