let head = document.getElementById("randColor");

let randColor = () => {
  let randIndex = (Math.random() * 4);
  let colors = [
    "#FF2889",
    "#FF904D",
    "#825AFA",
    "#5271FF"
  ];
  return colors[Math.floor(randIndex)];
  
}

head.style.borderBottomColor = randColor();