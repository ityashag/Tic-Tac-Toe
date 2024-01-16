let box = document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn = document.querySelector("#new")
let msg_c=document.querySelector(".msg")
let msg = document.querySelector('#msg')
console.log(box);
console.log(reset);
let count=0;
let turn_o =true;
let win = [[0,1,2],[0,3,6],[0,4,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const resetGame =()=>{
    count=0
    turn0=true;
    for(let b of box){
        b.disabled=false;
        b.innerHTML="";
        msg_c.classList.add("hide");
    }

}
box.forEach((box)=>{
box.addEventListener("click",()=>{
    if(turn_o)
    {
        box.innerText="O";
    }
    else
    {
        box.innerText="X";
    }
    turn_o=!(turn_o);
    box.disabled=true;
    check_winner();
});
});
const showWinner =(winner)=>{
    msg.innerText="Congratulations, Winner is "+winner;
    msg_c.classList.remove("hide");
    for(let b of box){
        b.disabled=true;
    }
}
const check_winner =()=>
{
    count++;
    for(let pattern of win)
    {
        let p0 = box[pattern[0]].innerText;
        let p1=box[pattern[1]].innerText;
        let p2=box[pattern[2]].innerText;
        if(p0!="" && p1!=""&& p2!=0)
        {
            if(p0===p1 &&p1==p2)
            {
                showWinner(p1);
            }
            else if(count==9)
            {
                msg.innerText="DRAW";
                msg_c.classList.remove("hide");
            }
        }
    }
}


newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);