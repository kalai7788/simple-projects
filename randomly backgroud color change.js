//create randomly backgroud color change

<html>
<head>
  <title>Random Background Color</title>
  <style>
    body {
      text-align: center;
      font-family: Arial;
      padding-top: 100px;
      transition: background-color 0.5s;
    }

    button {
      font-size: 20px;
      padding: 10px 20px;
      cursor: pointer;
      background-color: black;
      color: white;
      border: none;
      border-radius: 8px;
    }
  </style>
</head>
<body>

<h1>Click the Button to Change Background Color</h1>
<button id="colorBtn">Change Color</button>

<script>
let button = document.getElementById("colorBtn");

let colors = ["red", "green", "blue", "orange", "purple", "teal", "pink", "yellow"];

button.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * colors.length);
  let randomColor = colors[randomIndex];

  document.body.style.backgroundColor = randomColor;
});
</script>
</body>
</html>
