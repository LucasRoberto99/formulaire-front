document.addEventListener("DOMContentLoaded", () => {
  console.log("Content Loaded");

  document.querySelector("form").addEventListener("submit", async (event) => {
    //j'empeche le refresh page au submit >
    event.preventDefault();
    console.log("submit");

    const data = {
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      email: document.querySelector("#email").value,
      message: document.querySelector("#message").value,
    };

    console.log(data);

    // requete vers notre serveur

    const response = await axios.post("http://localhost:3000/form", data);

    console.log(response.data);
  });
});
