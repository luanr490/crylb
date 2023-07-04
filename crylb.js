var xhr = new XMLHttpRequest();

var url = "http://127.0.0.1:3000/";

var btn = document.querySelector("button");

btn.addEventListener("click", function () {
  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var str = xhr.responseText;
      var obj = JSON.parse(str);
      console.log(obj);
    }
  };
  xhr.send();
});
