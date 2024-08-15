
const container = document.getElementById("comments");

async function grabComments () {
  const requestURL = await fetch ("https://jsonplaceholder.typicode.com/posts/1/comments");
  if(!Response.ok) {
    console.log("Network Request Error")
  }
  const data = await requestURL.json();

  data.forEach(item => {
    const newItem = document.createElement('div');
    newItem.innerHTML = `
    <p>${item.id}</p>
    <p>${item.name}</p>
    <p>${item.body}</p>
    <p>${item.email}</p>
    `;

    container.appendChild(newItem)
  });
  
}
grabComments()
