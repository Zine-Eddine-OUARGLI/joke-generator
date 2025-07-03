async function getData() {
  const url = "https://icanhazdadjoke.com/";
  try {
    const response = await fetch(url, {
        method: "GET",
        headers:{
            "Accept": "application/json",
        }
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
  } catch (error) {
    console.error(error.message);
  }
}

for(let i = 0; i<10; i++){
    
}