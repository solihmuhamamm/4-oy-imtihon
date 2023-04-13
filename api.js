const api = {
  GET: async (value) => {
    try {
      let data = await fetch(`https://jsonplaceholder.typicode.com/${value}`)
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => console.log(error));

      return data;
    } catch {
      return undefined;
    }
  },
  POST: async (data, value) => {
    try {
     let Response  = await fetch(`https://jsonplaceholder.typicode.com/${value}`, {
       method: "POST",
       headers: {
         "Content-type": "application/json;",
       },
       body: JSON.stringify(data),
     })
       .then((res) => res.json())
       .then((data) => console.log(data));
      return Response;
    } catch {
      return undefined;
    }
  },
};




  export {api}