let currentplayer = "X"
let arr = Array(9).fill(null)
let h1 =document.querySelector("h1");
let Scorex = document.querySelector(".Scorex") 
let ScoreO = document.querySelector(".ScoreO")
function IFwinner()
{
   if (
    (arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])  
    )
    {
       Scorex.innerText = `The Winner is ${currentplayer}!! `
       ScoreO.innerText = "Please Press Restart"
    }
    if(!arr.some((e)=>e===null)){
        
        h1.innerText = "Game is Draw... Please press Button to Start Again!"
       
    }
}

function startnew()
{
    location.reload();
}

function handleclick(el){
    
    const id = Number(el.id)
    if(arr[id] !== null)return;
    arr[id] = currentplayer;
    el.innerText = currentplayer;
    IFwinner();
    currentplayer = currentplayer==="X"?"O":"X";

}

