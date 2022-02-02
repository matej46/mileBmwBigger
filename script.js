
var restart=document.getElementById("restart")
restart.style.visibility="hidden";
var character=document.getElementById("character");
var block=document.getElementById("block");
var scoreDiv= document.getElementById("score")
var score=0
function restartGame() {
    window.location.reload();
}
function jump() {

    if (character.classList!="animate") {

    character.classList.add("animate")
    setTimeout(function (){
        character.classList.remove("animate")
    },500)

  }
    score ++
    scoreDiv.innerHTML=("Score "+score)
}
var checkDead = setInterval(function (){
var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    if(blockLeft<120 && blockLeft>0 && characterTop>=135) {
        block.style.animation="none"
        block.style.display="none"
        alert("Uapsen si za vozenje so 320km/h")
        restart.style.visibility="visible";
    }
},10)
