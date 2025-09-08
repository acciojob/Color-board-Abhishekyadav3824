//your JS code here. If required.
const container=document.querySelector(".container")
      for(let i=1;i<=800;i++){
        createsquare()
      }
      function createsquare(){
        const square=document.createElement("div")
        square.classList.add("square")
        square.addEventListener("mouseover",addRandomColor)
        square.addEventListener("mouseout",removeColor)
        container.appendChild(square)
      }
      function addRandomColor(e){
        const square=e.target
        const randomColor="#"+Math.floor(Math.random()*255*255*255).toString(16).padStart(6,"0")
        square.style.backgroundColor=randomColor
      }
      function removeColor(e){
        setTimeout(()=>{
          e.target.style.backgroundColor=""
        },1000)
      }