const joke = document.getElementById("joke");
const get = document.getElementById("push");


get.addEventListener("click", async function(){
    joke.innerHTML = "Loading...."
    let display = await getData();
    joke.innerHTML = display.joke;
});




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

    return response.json();

  } catch (error) {
    console.error(error.message);
  }
}
