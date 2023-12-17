let check=(arr)=>
{   let ans=0;
    for(let i=0;i<5;i++)
    {    let cnt=0;
        for(let j=0;j<5;j++)
        {    
            {
               if(arr[i][j]=='X')
               cnt++;
            }
        }
        if(cnt==5)
        ans++;
    }
    for(let i=0;i<5;i++)
    {    let cnt=0;
        for(let j=0;j<5;j++)
        {    
            {
               if(arr[j][i]=='X')
               cnt++;
            }
        }
        if(cnt==5)
        ans++;
    }
    if(ans==5||ans>5) return true;
    return false;
}
let search=(arr,num)=>
{   let cnt=0;
   for(let i=0;i<arr.length;i++)
   {
    for(let j=0;j<arr[i].length;j++)
    {    cnt++;
        if(arr[i][j]==num) return [i,j,cnt];
    }
   }
}
function myfunction(x)
{
    if(x.matches)
    {
        let matrix=document.getElementsByClassName('matrix')[0];
        matrix.style.cssText = 'flex-direction: column; width: 100%;';
        let matrix1=document.getElementsByClassName('matrix1')[0];
        matrix1.style.cssText = 'width: 100%;';
        let matrix2=document.getElementsByClassName('matrix2')[0];
        matrix2.style.cssText = ' width: 100%;';
    }
}
let stoi= ( num) =>
{
 return parseInt(num);
    
}
const startgame=document.getElementById('start');
startgame.addEventListener('click', ()=>
{
   let player1=document.getElementById('player1').value;
   let player2=document.getElementById('player2').value;
   let data1=document.getElementById('player1data').value;
   let data2=document.getElementById('player2data').value;
   let newdata1=data1.split(',');
   let newdata2=data2.split(',');
    for(let i=0;i<newdata1.length;i++)
    {
        newdata1[i]=stoi(newdata1[i]);
    }
    for(let i=0;i<newdata2.length;i++)
    {
        newdata2[i]=stoi(newdata2[i]);
    }
    

   const newArr1 = [];
   const newArr2=[];
while(newdata1.length) newArr1.push(newdata1.splice(0,5));
while(newdata2.length) newArr2.push(newdata2.splice(0,5));

console.log(newArr1);
console.log(newArr2);

let matrix=document.getElementsByClassName('matrix')[0];
matrix.style.cssText = 'background-color:rgb(243 247 250); border: 10px solid rgb(40 58 110); margin: 20px; display: flex; flex-direction: row; padding: 10px; height: 650px; justify-content: center; text-align: center; ms-flex-align: center; padding-bottom:60px';
let boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.style.cssText = 'background-color: rgb(231, 73, 73); border: 1px solid black; width: 19%; height: 20%; gap: 0px; text-align: center; font-size: large; font-weight:300 padding-top:0px'; 
});
//console.log(newArr1);
//console.log(newArr2);
let cnt=0;
for(let i=0;i<newArr1.length;i++)
{    
    for(let j=0;j<newArr1[i].length;j++)
    {   cnt++;
        let x=newArr1[i][j];
      let box=document.getElementById(`box1-${cnt}`);
        box.textContent=`${x}`;
       

    }
}
cnt=0;
for(let i=0;i<newArr2.length;i++)
{    
    for(let j=0;j<newArr2[i].length;j++)
    {   cnt++;
        let x=newArr2[i][j];
      let box=document.getElementById(`box2-${cnt}`);
        box.textContent=`${x}`;
        

    }
}

document.getElementById('play1').innerHTML=`${player1}`;
document.getElementById('play2').innerHTML=`${player2}`;
let mat1=document.getElementsByClassName('mat1')[0];
mat1.style.cssText = 'background-color: rgb(223 239 217); border: 5px solid #024e16; width: 50%; height: 80%; display: flex; flex-direction: column; margin: 5%; flex-flow: column wrap; flex-wrap: nowrap; padding: 3%; justify-content: center; ';

let mat2=document.getElementsByClassName('mat2')[0];
mat2.style.cssText = 'background-color: rgb(223 239 217); border: 5px solid #024e16; width: 50%; height: 80%; display: flex; flex-direction: column; margin: 5%; flex-flow: column wrap; flex-wrap: nowrap; padding: 3%; justify-content: center; ';

let matrix1=document.getElementsByClassName('matrix1')[0];
let matrix2=document.getElementsByClassName('matrix2')[0];

matrix1.style.cssText = 'background-color: ; border: 0px solid black; width: 90%; height: 80%; display: flex; flex-flow: row wrap; padding: 0; padding-top: 0; margin: 0; margin-right: 5%; margin:auto';
matrix2.style.cssText = 'background-color: ; border: 0px solid black; width: 90%; height: 80%; display: flex; flex-flow: row wrap; padding: 0; padding-top: 0; margin: 0; margin-right: 5%; margin:auto';
let toce = document.getElementsByClassName('toce')[0];
toce.style.cssText = "justify-content: center; text-align: center; margin-left: 30%; margin-right: 30%; margin-top: 20px; margin-bottom: 20px; border: 10px solid green; padding: 10px; font-size: medium; font-weight: 200; width: 40%; height: 100px; border-radius: 20px; background-color: #e4f1e0; font-family: cursive; font-size: larger; font-weight: 500; font-style: italic; color: black;";

toce.textContent="Turn";
toce.addEventListener('click',()=>
{
    let num=Math.floor((Math.random()*2)+1);
    let toss=document.getElementsByClassName('toce')[0];
    let turn;
    if(num==1)
   { turn=`${player1}`; toss.textContent=`${player1} Turn`;}
    else
   { turn=`${player2}`;toss.textContent=`${player2} Turn`;}

    let elem=document.getElementById('ele');
    elem.style.cssText = "width: 70%; margin-left: 15%; margin-right: 15%; padding: 20px; border: 10px solid #0a4d05; text-align: center; justify-content: center; margin-top: 20px; margin-bottom: 20px; display: block; background-color: #fbfbff; font-family: cursive; font-size: large; font-weight: 400; color: #1f0cc8; border-radius: 5px;";

    elem.placeholder=` Enter a number ramaining  in  your matrix`;
    let btn=document.getElementsByClassName('submit')[0];
    btn.style.cssText = "justify-content: center; text-align: center; margin-left: 30%; margin-right: 30%; margin-top: 20px; margin-bottom: 20px; border: 10px solid green; padding: 10px; font-size: medium; font-weight: 200; width: 40%; height: 100px; border-radius: 20px; background-color: #e4f1e0; font-family: cursive; font-size: larger; font-weight: 500; font-style: italic; color: black;";

    btn.textContent="submit";
    btn.addEventListener('click',()=>
    {     let val=document.getElementById('ele').value;
        let a =search(newArr1,val);
       let b=search(newArr2,val);
        newArr1[a[0]][a[1]]='X';
        newArr2[b[0]][b[1]]='X';
        document.getElementById(`box1-${a[2]}`).textContent='X';
        document.getElementById(`box1-${a[2]}`).style.backgroundColor='yellow';

        document.getElementById(`box2-${b[2]}`).textContent='X';
        document.getElementById(`box2-${b[2]}`).style.backgroundColor='green';

       if(check(newArr1)==true||check(newArr2)==true) 
        {
          
            let res=document.getElementsByClassName('result')[0];
            res.style.cssText = "justify-content: center; text-align: center; margin-left: 30%; margin-right: 30%; margin-top: 20px; margin-bottom: 20px; border: 10px solid green; padding: 10px; font-size: medium; font-weight: 200; width: 40%; height: 100px; border-radius: 20px; background-color: #e4f1e0; font-family: cursive; font-size: xxx larger; font-weight: 500; font-style: italic; color: black;"; 
            if(turn==player1&&check(newArr1)==true)
            {res.textContent=`BINGO!! 🎉🎉 ${player1} is the winner`;}
            else
            {res.textContent=`BINGO!! 🎉🎉 ${player2} is the winner`;}
            btn.style.display='none';
            elem.style.display='none';
            toss.style.display='none';

        }
     
        if(turn==player1)
       {   
         turn=player2; 
        toss.textContent=`${turn} turn `;
        document.getElementById('ele').value=' ';
        document.getElementById('ele').placeholder=`${turn} Turn Enter a number ramaining  in  your matrix`;
       // document.getElementById('ele').value=`${turn} Turn Enter a number ramaining  in  your matrix`;
       }
    else
    {   
       
        turn=player1; 
    toss.textContent=`${turn} turn`;
    document.getElementById('ele').value=' ';
    document.getElementById('ele').placeholder=`${turn} Turn Enter a number ramaining  in  your matrix`;
    //document.getElementById('ele').value=`${turn} Turn Enter a number ramaining  in  your matrix`;

    }

     

    })
   
    
}



);

var x = window.matchMedia("(max-width: 658px)");
 
myfunction(x);
}
)
