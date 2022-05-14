window.addEventListener('load', init)
function $(elem) {
  return document.querySelectorAll(elem)
}

const cikkek = [];

function init() {
    let cikk = "cikkek.json";
    fetch(cikk)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.cikk)
            // data.cikk.forEach((elem) => {
            //     cikkek.push(elem);
            // });
        
        })
        .catch((err) => {
            console.log(err);
        })

    console.log(cikkek)
    // feldolgoz(cikkek)
}
// function feldolgoz(cikkek) {
//     const szuloelem=document.querySelector("article");
//     Object.keys(cikkek).forEach(function (){
//         szuloelem.innerHTML += "<br>";
//         // for (const key in cikkek){
//         //     console.log(cikkek.key)
//         //     szuloelem.innerHTML += "<div><span>"+cikkek[key]+ "</span></div>";
//         // }
//         txt += '<ul>'
//     for (const key in szuloelem) {
//       txt += `<li><span>${key}:</span><span> ${cikkek[key]}</span></li>`
//     //   txt += "<li><span>"+key+":</span><span> "+kutya[key]+"</span></li>"
//     }
 
//     txt += '</ul>'
//     });
//     console.log(szuloelem)
//   $('article')[0].innerHTML = szuloelem
// }

