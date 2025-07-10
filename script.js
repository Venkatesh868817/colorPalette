const generatebtn =document.getElementById("generate-btn");

const palettecontainer =document.querySelector(".palette-container");
generatebtn.addEventListener("click",generatePalette);
palettecontainer.addEventListener("click",function(e) {
                   if(e.target.classList.contains("copy-btn")){
                    const hexvalue =e.target.previousElementSibling.textContent

                    navigator.clipboard.writeText(hexvalue)
                    .then(()=> showCopySuccess(e.target))
                    .catch((err)=> console.log(err))
                   }else if(e.target.classList.contains("color")){
                    const hexValue=e.target.nextElementSibling.querySelector(".hex-value").textContent;
                     navigator.clipboard.writeText(hexvalue)
                    .then(()=> showCopySuccess(e.target.nextElementSibling.querySelector(".copy-btn")))
                    .catch((err)=> console.log(err))

                   }
});
function showCopySuccess(element){
element.classList.remove("far","fa-copy");
element.classList.add("fas","fa-check");
element.style.color="#48bb78";
setTimeout(() => {
    element.classList.remove("fas","fa-check");
        element.classList.add("far","fa-copy");
        element.style.color="";


},1500);

};
function generatePalette(){

    const color =[]
    for(let i=0;i<5;i++){
        color.push(generateRandomColor());
    }
    updatePaletteDisplay(color)
};
function generateRandomColor(){
    const letters="0987654321ABCDEF"

    let color="#"
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];

    }
    return color
};
function updatePaletteDisplay(colors){
    const colorBoxes =document.querySelectorAll(".color-box");
    colorBoxes.forEach((box,index)=>{
        const color =colors[index]
        const colordiv =box.querySelector(".color");
        const hexValue =box.querySelector(".hex-value");

        colordiv.style.backgroundColor=color;
        hexValue.textContent=color;
    })
};


