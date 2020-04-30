let audio=new Audio("Shingeki no Kyojin 3 Opening - Red Swan.mp3");
 function soundPlay(){
  audio.play();
setTimeout(function(){
  audio.pause();
},3000);

}

function updateValue(key){
let a=document.getElementById(key+"-input");
let c=document.getElementById(key)

a.addEventListener("input",function(){
  let v=a.value;
if(v<10)
    v="0"+v;
  if(v>59)
  v=59;
  c.innerHTML=v;
})}
updateValue("minutes");
updateValue('seconds');

let v11=document.getElementById("minutes-input");
let v22=document.getElementById("seconds-input");
let x1=document.getElementById("minutes");
let x2=document.getElementById("seconds");

var f=0,b=0,c=0,d=0,e=0,
a=[];


function pause() {
  v11.disabled=false;
  v22.disabled=false;

for (let i=0; i<a.length; i++)
  {if(a[i])
  clearTimeout(a[i]);
}
}

function startLoop(){
  v11.disabled=true;
  v22.disabled=true;
var v1=v11.value,
  v2=v22.value;

for(let i=0;i<v1;i++)
{  f=setTimeout(function () {
  x1.innerHTML=i;
},i*60000);
  a.push(f);
  for (let j=0; j<=59; j++) {
      b=setTimeout(function () {
       if(j<10)
           j="0"+j;
       x2.innerHTML=j;
       },j*1000);
       a.push(b);
  }
}
 c=setTimeout(function () {
  x1.innerHTML=v1;
},v1*60000);
a.push(c);
for (let j=0; j<=v2; j++) {
    d=setTimeout(function () {
     if(j<10)
         j="0"+j;
     x2.innerHTML=j;
   },v1*60000+j*1000);
   a.push(d);
}
 e=setTimeout(function () {
  soundPlay();
},v1*60000+v2*1000);
a.push(e);
}

function reset() {
  pause();
  a.length=0;
v11.value=0;
v22.value=0;
  x1.innerHTML="0";
  x2.innerHTML="00";
  audio.pause();
}
