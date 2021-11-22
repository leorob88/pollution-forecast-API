

async function select(city){

  const response = await fetch(`/.netlify/functions/lambda?name=${city}`);
  const data = await response.json();

  console.log(data);
}

function locate(){
  let x = 10;
}

    document.getElementById("butt1").addEventListener("click", function(){
      select(document.getElementById("query").value);
    });
    document.getElementById("butt2").addEventListener("click", function(){
      locate();
    });
