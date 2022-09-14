fetch("https://apis.scrimba.com/bored/api/activity/")
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);
    document.addEventListener("click", function () {
      document.getElementById("button").textContent = data.activity;
      generate();
    });
  });
