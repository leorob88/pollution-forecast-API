

async function select(city){

  const response = await fetch(`/.netlify/functions/lambda?name=${city}`);
  const data = await response.json();

  console.log(data);
}

function locate(){
  let x = 10;
}

    var butt1 = document.createElement("button");
    butt1.id = "button1";
    butt1.innerHTML = "input";
    document.body.appendChild(butt1);
    var butt2 = document.createElement("button");
    butt2.id = "button2";
    butt2.innerHTML = "geo";
    document.body.appendChild(butt2);
    document.getElementById("butt1").addEventListener("click", function(){
      select(document.getElementById("query").value);
    });
    document.getElementById("butt2").addEventListener("click", function(){
      locate();
    });
