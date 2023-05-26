let idelement= document.getElementById('idsubbtn');
let visible=document.getElementById('container');
let hide= document.getElementById('ID');
// visible.style.zIndex=-1;
// hide.style.zIndex=1;
const setofid=["100", "101","102","103","104","105"];
idelement.addEventListener('click' , (e) =>{
    let sampleid=document.getElementById('teacherid').value;
    let temp=0;
    for(let i=0;i<6;i++){
        if(setofid[i]==sampleid){
            visible.style.zIndex=1;
            hide.style.zIndex=-1;
            visible.style.visibility = "visible";
            hide.style.visibility ="hidden";
            temp=1;
            break;
        }

    }
    if(temp==0){
        alert("Invalid ID");
    }
})



  