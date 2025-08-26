# Projects related to DOM 

# Project Link: 
(https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js)
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

# Project 2

``` javascript

const form = document.querySelector('form')
//const weight = parseInt(document.querySelector("#weight").value) #this use case will give u empty value when u reload the page

form.addEventListener('submit',function(e){
  e.preventDefault() // default sending on url stops here that is default action is stopped here 

  const height = parseInt(document.querySelector("#height").value) //convert string value to int

  const weight = parseInt(document.querySelector("#weight").value)
  const results = document.querySelector("#results")

  if(height==='' || height<0 || isNaN(height)){
    results.innerHTML='Please give a valid input value.'
  }

  if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML='Please give a valid input value.'
  }
  else{
    const bmi = (weight/ ((height*height)/10000)).toFixed(2)

    results.innerHTML=`<span>${bmi}</span>`
  }


})

```

# Project 3

``` javascript


```




