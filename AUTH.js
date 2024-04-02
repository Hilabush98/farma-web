const Execute= async ()=>{
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: "acxell.gonzalez",
      client_secret: "Farma2024!",
      scope: "*",
    }),
  };
  const red =  await fetch(
    "https://api-oauth2-fda.apps.cloud-ocp-stg.fahorro.com.mx/oauth2/ldap/jwt",
    requestOptions
  )
    .then((response) => {
      console.log('responsee',response)
      return response.json();
    })
    .then(data=>{
      console.log('DATA',data);
    })
    .catch((error) => {
      console.log('ERROR',error.stack);
    });
    console.log(red)
}


await Execute();


   