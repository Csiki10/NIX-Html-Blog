async function fetchLoremIpsum() {
  var paragraphs = "1";
  fetch(`https://api.api-ninjas.com/v1/loremipsum?paragraphs=${paragraphs}`, {
    method: "GET",
    headers: {
      "X-Api-Key": "R6IY9Vwd743hg7krjdqaWw==YrsLVA1oy5TAXtSD",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error("Error: ", error.message);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchLoremIpsum();
});
