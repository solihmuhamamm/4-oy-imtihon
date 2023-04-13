let form = document.querySelector("#form1");

form.addEventListener('submit', async (evt) =>{
    evt.preventDefault()
    let {email,password} = evt.target.elements;
    console.log(email.value, password.value);
    let data = await fetch("https://reqres.in/api/users?page=2", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email.value.trim(),
        password: password.value.trim(),
      }),
    })
      .then((res) => res.json())
      .then((json) => json)
      .catch((err) => console.log(err));
if (data) {
    localStorage.setItem("token" , JSON.stringify(data))
    window.location.replace("index.html")
}
})