// canvas variables
// graphics
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");


//Initialise system parameters here
const toggle = document.getElementById('powerSwitch');
const slider1 = document.getElementById('v1cntrl');
const slider2 = document.getElementById('v2cntrl');
             
toggle.addEventListener('change', function() {
            
        if (toggle.checked) {
        slider1.removeAttribute('disabled');
        slider2.removeAttribute('disabled');
        } 
        else {
        slider1.setAttribute('disabled',true);
        slider2.setAttribute('disabled', true);
        document.getElementById('ipv1').value= '';
        document.getElementById('ipv2').value = '';
        document.getElementById('op').value= '';
        }

        
            
        })
function show(){
        const slider1Input = document.getElementById('v1cntrl');
        const text1Input = document.getElementById('ipv1');
        slider1Input.addEventListener('input', function(){
        text1Input.value = slider1Input.value;
    
        })
        var x= document.getElementById('ipv1').value;
        var y = document.getElementById('ipv2').value;                
        var z = document.getElementById('op');
        if(x==5||y==5){
          z.value = '5';
        }else{
          z.value = '0';
        }
        }
function show1(){
        const slider2Input = document.getElementById('v2cntrl');
        const text2Input = document.getElementById('ipv2');
        slider2Input.addEventListener('input', function(){
        text2Input.value = slider2Input.value;
         })
        var x= document.getElementById('ipv1').value;
        var y = document.getElementById('ipv2').value;
        var z = document.getElementById('op');
        if(x==5||y==5){
            z.value = '5';
        }else{
            z.value = '0';
        }
        }
            
            
        var tableindex = 1;                    
function add(){
                
        let table = document.getElementById('tableBody');
                                        
        let row = document.createElement('tr')
        let c1 = document.createElement('td')
        let c2 = document.createElement('td')
        let c3 = document.createElement('td')
        let c4 = document.createElement('td')
                                        
         c1.innerText = tableindex;
         tableindex+= 1
         c2.innerText = document.getElementById('v1cntrl').value;
         c3.innerText = document.getElementById('v2cntrl').value;
         c4.innerText = document.getElementById('op').value;
                                        
        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);
                                        
        table.appendChild(row)
        }
// function varinit() {
//   varchange();
//   //Variable slider and number input types
//   $("#massSlider").slider("value", 25); // slider initialisation : jQuery widget
//   $("#massSpinner").spinner("value", 25); // number initialisation : jQuery widget
//   $("#lengthSlider").slider("value", 1500);
//   $("#lengthSpinner").spinner("value", 1500);
//   $("#dampSlider").slider("value", 0.05);
//   $("#dampSpinner").spinner("value", 0.05);
//   $("#CsArea").spinner("value", 0.01);
//   $("#Ivalue").spinner("value", 0.01);
// }
// function varchange() {
//   $("#massSlider").slider({ max: 200, min: 0, step: 0.5 });
//   $("#massSpinner").spinner({ max: 200, min: 0, step: 0.5 });

//   $("#massSlider").on("slide", function (e, ui) {
//     $("#massSpinner").spinner("value", ui.value);
//     time = 0;
//     varupdate();
//   });
//   $("#massSpinner").on("spin", function (e, ui) {
//     $("#massSlider").slider("value", ui.value);
//     time = 0;
//     varupdate();
//   });
//   $("#massSpinner").on("change", function () {
//     varchange();
//   });

//   $("#lengthSlider").slider({ max: 3000, min: 1000, step: 10 });
//   $("#lengthSpinner").spinner({ max: 3000, min: 1000, step: 10 });

//   $("#lengthSlider").on("slide", function (e, ui) {
//     $("#lengthSpinner").spinner("value", ui.value);
//     time = 0;
//     varupdate();
//   });
//   $("#lengthSpinner").on("spin", function (e, ui) {
//     $("#lengthSlider").slider("value", ui.value);
//     time = 0;
//     varupdate();
//   });
//   $("#lengthSpinner").on("change", function () {
//     varchange();
//   });
//   $("#lengthSpinner").on("touch-start", function () {
//     varchange();
//   });

//   $("#dampSlider").slider({ max: 0.99, min: 0, step: 0.01 });
//   $("#dampSpinner").spinner({ max: 0.99, min: 0, step: 0.01 });

//   $("#dampSlider").on("slide", function (e, ui) {
//     $("#dampSpinner").spinner("value", ui.value);
//     time = 0;
//     varupdate();
//   });
//   $("#dampSpinner").on("spin", function (e, ui) {
//     $("#dampSlider").slider("value", ui.value);
//     time = 0;
//     varupdate();
//   });
//   $("#dampSpinner").on("change", function () {
//     varchange();
//   });
//   $("#CsArea").spinner({ max: 1, min: 0.01, step: 0.0001 });
//   $("#Ivalue").spinner({ max: 1, min: 0.01, step: 0.0001 });
// }
// function varupdate() {
//   $("#massSpinner").spinner("value", $("#massSlider").slider("value")); //updating slider location with change in spinner(debug)
//   $("#lengthSpinner").spinner("value", $("#lengthSlider").slider("value"));
//   $("#dampSpinner").spinner("value", $("#dampSlider").slider("value"));
//   endmass = $("#massSpinner").spinner("value"); //Updating variables
//   beamlength = $("#lengthSpinner").spinner("value");
//   dampingratio = $("#dampSpinner").spinner("value");
//   massbeam = (rho * A * beamlength) / 1000;
//   m = (33 / 140) * massbeam + endmass;
//   k = (3 * E * I) / Math.pow(beamlength / 1000, 3);
//   wn = Math.sqrt(k / m);
//   let cc = 2 * Math.sqrt(k * m);
//   let c = dampingratio * cc;
//   wd = wn * Math.sqrt(1 - dampingratio * dampingratio);
//   document.querySelector("#mass").innerHTML = m.toFixed(4) + "kg"; //Displaying values
//   document.querySelector("#k").innerHTML = (k / 1000).toFixed(4) + "N/mm";
//   document.querySelector("#c").innerHTML = c.toFixed(4) + "Ns/m";
//   document.querySelector("#wd").innerHTML = wd.toFixed(4) + "rad/s";
//   document.querySelector("#wn").innerHTML = wn.toFixed(4) + "rad/s";

//  };

// const draw = function () {
//   };

// function generateGraph() {
//   }

// function plotgraph() {

// }

// window.addEventListener("load", varinit);

// const selectSection = function () {
//   otherSec.classList.remove("display-flex");
//   otherSec.classList.add("display-hide");
//   let value = sections.value;
//   if (value != 6) {
//     sectionImg.src = beamInfo[value].path;
//     const infos = Object.entries(beamInfo[value]);
//     sectionTooltip.innerHTML = "";
//     for (const [key, value] of infos.slice(0, -3)) {
//       const text = `${key}:${value}, `;
//       sectionTooltip.insertAdjacentHTML("beforeend", text);
//     }
//     for (const [key, value] of infos) {
//       if (key == "A") {
//         A = value;
//       }
//       if (key == "I") {
//         I = value;
//       }
//     }
//     varupdate();
//   } else {
//     otherSec.classList.add("display-flex");
//     otherSec.classList.remove("display-hide");
//     sectionImg.src = "../images/crossOth.PNG";
//     A = 0.01;
//     I = 0.01;
//     sectionTooltip.innerHTML = "";
//     sectionTooltip.innerHTML = `Area = ${A} m<sup>2</sup>, I = ${I} m<sup>4</sup>`;
//     $("#CsArea").spinner({
//       spin: function (event, ui) {
//         A = ui.value;
//         I = $("#Ivalue").spinner("value");
//         sectionTooltip.innerHTML = `Area = ${A} m<sup>2</sup>, I = ${I} m<sup>4</sup>`;
//       },
//     });
//     $("#Ivalue").spinner({
//       spin: function (event, ui) {
//         I = ui.value;
//         A = $("#CsArea").spinner("value");
//         sectionTooltip.innerHTML = `Area = ${A} m<sup>2</sup>, I = ${I} m<sup>4</sup>`;
//       },
//     });
//   }
// };

// sections.addEventListener("change", selectSection);
// const selectMaterial = function () {
//   let value = materials.value;
//   const infos = Object.entries(matInfo[value]);
//   cirTooltip.innerHTML = "";
//   for (const [key, value] of infos) {
//     const text = `${key}:${value}, `;
//     if (key == "E") {
//       E = +value;
//     }
//     if (key == "rho") {
//       rho = +value;
//     }
//     cirTooltip.insertAdjacentHTML("beforeend", text);
//   }
//   varupdate();
// };
// materials.addEventListener("change", selectMaterial);