const link="http://localhost:4500/"
console.log("start")

fetch('http://localhost:4500/')
      .then(response => response.json())
      .then(json => {


const userdiv=document.getElementById("showUser");

json.forEach((element,index )=> {
     const mainDiv=document.createElement("div")
     userdiv.appendChild(mainDiv);

     const name=document.createElement("span")
     name.innerText=element.name+" "
     mainDiv.appendChild(name);


     const mobile=document.createElement("span")
     mobile.innerText=element.price+" "
     mainDiv.appendChild(mobile);


     const delete_button=document.createElement("button")
     delete_button.innerText="delete";
     delete_button.id=element.id
     mainDiv.appendChild(delete_button);

     delete_button.addEventListener("click",(e)=>{

console.log(e.target.id)
      async function abc(){
            try {
                  let x=await axios.post('http://localhost:4500/deleteById',{
                  id:e.target.id
            })
            console.log(x)
            location.reload()
          console.log("change location adres")
            } catch (error) {
               console.log(error)   
            }
           
      }
      
      abc()



     })



});









      }
      
      
      
      
      
      
      
      
      
      )


async function abc(){
      try {
            let x=await axios.post('http://localhost:4500/data',{
            first:"krishna"
      })
      console.log(x)
      location.href="http://localhost:5500/booking_app/"
 
      } catch (error) {
         console.log(error)   
      }
     
}

// abc()
