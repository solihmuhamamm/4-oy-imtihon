 let tempt = document.querySelector("cardMadal");
 let btn = document.querySelector("#btn1")
 let elform = document.querySelector("#form")
 let set = document.querySelector("#set")
 
 
btn.addEventListener("click", (evt) => {
  evt.preventDefault()
  if ((elform.classList = "a")) {
    elform.classList = "b";
  }
});

 
 
 let logout = document.querySelector("#btn2")
 
 let token = localStorage.getItem("token") || false ;
  if (!token) {
    window.location.replace("login.html")
  }
  
  logout.addEventListener('click',() => {
    localStorage.removeItem("token")
    window.location.replace("login.html")
  })
  
  
  
  let apidata = await api.GET("users")
  
async function render(element,value) {

if (value) {
    value.forEach((user) => {
        let newli =document.createElement('li')
        let inp = document.createElement('input')
        let h2 =document.createElement('h2')
        let abs =document.createElement('a')
        let img =document.createElement('img')
        let p1 =document.createElement('p')
        let p =document.createElement('p')
        let h3 =document.createElement('h3')
        let h32=document.createElement('h3')
        let h222 =document.createElement('h2')
        let icons = document.createElement('li')
        let deletebtn = document.createElement('button')
        deletebtn.addEventListener('click', evt =>{
          let newli =  evt.target.parentNode
          let set= evt.target.parentNode
          set.remove(newli)

        })

        h2.textContent = user.name
        p1.textContent = user.id
        p.textContent = user.address.zipcode
        h3.textContent = user.username
        h32.textContent = user.address.city
        h222.textContent = "VII A"
        deletebtn.innerHTML += `
        <i class="fa-solid fa-trash"></i>
        `;
        abs.setAttribute("href", `tel:${user.phone}`);
        abs.textContent = user.phone
        inp.setAttribute("type", "checkbox")
        newli.setAttribute("class", "page")
        h2.setAttribute("class", "h222")
        h3.setAttribute("class", "h333");
        h32.setAttribute("class", "h334");
        p.setAttribute("class", "p111");
        inp.setAttribute("class", "inp");
        abs.setAttribute("class", "abs");
        p1.setAttribute("class", "p222");
        h222.setAttribute("class", "h444")
         icons.setAttribute("class", "icons");
        
        newli.append(inp, h2, p1, p, h3, h32 , abs,h222,deletebtn);
        
        
        element.appendChild(newli);
    });
    
    
}
}
render(set,apidata);
elform.addEventListener("submit", async (e) => {
  e.preventDefault();  
  let  {name, id, zipcode, city ,} = e.target.elements
  let Obj = {
    name: `${ name.value }`,
      id : `${id.value}`,
    address :{
     zipcode : `${zipcode.value}`,
      city:`${city.value}`,
    },
   
   
  };
  let result = await api.POST(Obj,"posts")
  if (result) {
    let userdata = await api.GET("users")
    let newdata =[ result,...userdata ]
    elform.innerHTML = null;
    render(elform,newdata);
    console.log(elform);
    
  }
});
 



 


import { api } from "./api.js";