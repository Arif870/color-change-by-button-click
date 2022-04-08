// onload function will be called after all files loaded

window.onload = () => {
  main();
};

// main function call

function main() {
  const background = document.getElementById("root");
  const heading = document.getElementById("heading");
  const btn1 = document.getElementById("bg_color");
  const btn2 = document.getElementById("heading_color");

  //   event

  btn1.addEventListener("click", function () {
    background.style.backgroundColor = RGBColorGenerator();
  });
  btn2.addEventListener("click", function () {
    heading.style.color = RGBColorGenerator();
  });
}

// RGB color code generator function

function RGBColorGenerator() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
