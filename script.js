let body = document.querySelector('body')
let container = document.querySelector('.container')
let changeGrid = document.querySelector('.change-grid')
let erase = document.querySelector('#erase')
let hslLightness = 50
let hOne = document.querySelector('h1')


function randomNumber() {
  let number = Math.floor(Math.random()* 360)
  return number 
}


for (let i = 0; i <= 1000; i++) {
    let div = document.createElement('div')
    div.setAttribute('style',`height: 16px; width: 16px; border: 1px solid white; background-color: white;`)
    div.classList.add('div-hover')

    div.addEventListener('click',()=> {
      div.style.backgroundColor = `hsl(${randomNumber()}, 100%, ${hslLightness}%)`;
      hslLightness -= 5

      if (hslLightness < 0) {
        hslLightness += 50
      }
    })

    container.appendChild(div)
}

let gridChanger = document.querySelector('#grid-changer')
gridChanger.addEventListener('click',()=> {
    let changingDiv = document.createElement('div')
    changingDiv.classList.add('changing-div')
    changingDiv.setAttribute('style','border: 2px solid black; background-color: white; box-shadow: 2px 2px 2px black; width: 210px; height: 120px; border-radius: 5px; margin: 10px auto; padding: 10px; text-align: center;')

    let changingDivPara = document.createElement('p')
    changingDivPara.textContent = `Choose from 12,16,24,32,48,64,96,192`;
    changingDivPara.setAttribute('style','font-size: 14px; margin-bottom: 8px; text-align: center;')

    let input = document.createElement('input')
    input.setAttribute('style','margin-bottom: 10px; max-width: 200px;')
    input.setAttribute('type','text')
    input.setAttribute('name','number-input')

    let ok = document.createElement('button')
    ok.textContent = `Ok`
    ok.setAttribute('style','font-size: 14px; padding: 2px 5px; border: 1px solid black; background-color: white; box-shadow: 2px 2px 2px black;')
    ok.addEventListener('click',()=> {
        let number = input.value

      if (number == 12 ||
          number == 16 ||
          number == 24 ||
          number == 32 ||
          number == 48 ||
          number == 64 ||
          number == 96 ||
          number == 192) {
        body.removeChild(hOne)    
        
        if (body.hasChildNodes()) {
          body.removeChild(body.firstElementChild)
        }
        
        let containerOne = document.createElement('div')
        containerOne.classList.add('container-one')
        for (let i = 0; i <= 1000; i++) {
           let divOne = document.createElement('div')
           divOne.setAttribute('style',`height: ${number}px; width: ${number}px; border: 1px solid white;`)
           divOne.classList.add('div-hover')

           divOne.addEventListener('click',()=> {
            divOne.style.backgroundColor = `hsl(${randomNumber()}, 100%, ${hslLightness}%)`;
            hslLightness -= 5
      
            if (hslLightness < 0) {
              hslLightness += 50
            }
           })

           containerOne.appendChild(divOne)
           
       }

       body.removeChild(changeGrid)
       body.removeChild(changingDiv)
       body.removeChild(erase)
       body.appendChild(hOne)
       body.appendChild(containerOne)
       body.appendChild(changeGrid)
       body.appendChild(changingDiv)
       body.appendChild(erase)

        input.value = '';
        input.focus();
      } else {
        alert('This is not among the listed numbers ')
      }
    })

    let close = document.createElement('button')
    close.textContent = `Close`
    close.setAttribute('style','font-size: 14px; padding: 2px 5px; margin-left: 10px; border: 1px solid black; background-color: white; box-shadow: 2px 2px 2px black;')
    close.addEventListener('click',()=> {
        body.removeChild(changingDiv)
    })


    changingDiv.appendChild(changingDivPara)
    changingDiv.appendChild(input)
    changingDiv.appendChild(ok)
    changingDiv.appendChild(close)
    body.removeChild(erase)
    body.appendChild(changingDiv)
    body.appendChild(erase)


})


erase.addEventListener('click',()=> {
  location.reload()
})