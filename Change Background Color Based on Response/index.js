const text = document.getElementById('text')

function changeColor(status) {
  if(status === "failed"){
    text.style.backgroundColor = "red";
  }else if (status === "successful"){
    text.style.backgroundColor = "green";
  }
}
changeColor(); //pass in "failed" or "successful" to test outcome