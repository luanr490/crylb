var xhr = new XMLHttpRequest();

var url = "http://127.0.0.1:3000/";

var btn = document.querySelector("button");

btn.addEventListener("click", function () {
  xhr.open("GET", url);
  xhr.send();
  var str = xhr.responseText;
  //var obj = JSON.parse(str);
  console.log(xhr);
});
