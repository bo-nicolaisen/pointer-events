/* swiping*/

const mySwipeBox=document.getElementById('swipeBox');
const mySumDisp=document.getElementById('sumDisp');
let downX=0;
let upX=0;
let threshold=40;
let sum=0;
mySumDisp.innerHTML=sum;


mySwipeBox.ondragstart = () => false

mySwipeBox.addEventListener('pointerdown',e=>{

e.preventDefault;
   // console.log('down: '+e.x);
    downX=e.x;
});


mySwipeBox.addEventListener('pointercancel',e=>{

    e.preventDefault;
       // console.log('cancel: '+e.x);
        downX=e.x;
    });



    mySwipeBox.addEventListener('pointerup',e=>{
e.preventDefault;
    //console.log('up: '+e.x);
let dist=downX-e.x;

   if(dist>threshold){
//console.log( 'swipe right');
sum=sum+1;

   }
if(dist<threshold*-1){
//console.log('swipe left');
sum=sum-1;
}

mySumDisp.innerHTML=sum;

});


