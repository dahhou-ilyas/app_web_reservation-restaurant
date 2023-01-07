let ajout=document.getElementById('container_partiel');

function add(e){
    
    console.log(e);
    ajout.innerHTML=ajout.innerHTML+`<div id=${e} class="nes"></div>`
}
function remove(e){
    
    console.log(e);
    let ele=document.getElementById(e);
    ele.parentNode.removeChild(ele);

}