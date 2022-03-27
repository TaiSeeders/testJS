
function test(){
    
const url = "https://script.google.com/macros/s/AKfycbzsOsolvPdQTSeSA9LqOnMIp9A8Gp7SxOAi5uXDilFTnj8zjUPoBLsO-9Hs5PBXy3qgwg/exec"

fetch(url)
    .then(d => d.json())
    .then(d => {
        document.getElementById("app").textContent = d[0].status;
    });

}

document.getElementById("btn").addEventListener("click",test);