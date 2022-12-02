let div = document.querySelectorAll("div")
let droite = document.querySelector(".droite")
let temp;
(function(c, u, r, p, o, s) {
  u = c[u] = {};
  u[r] = 0;
  u[p] = 0;
  u[o] = 0;
  u[s] = 0;
  document.addEventListener('drag', function(e) {
    u[r] = e[r];
    u[p] = e[p];
    u[o] = e[r] + c.scrollX;
    u[s] = e[p] + c.scrollY;
  });
  c.addEventListener('scroll', function() {
    u[o] = u[r] + c.scrollX;
    u[s] = u[p] + c.scrollY;
  });
})(window, 'curPos', 'clientX', 'clientY', 'viewportX', 'viewportY');

for (let i = 0; i < div.length; i++) {
  
  div[i].addEventListener('mousedown',function (){
    if(div[i]==div[0]){
      temp='red1'
    }
    else if(div[i]==div[1]){
      temp='blue1'
    }
    else if(div[i]==div[2]){
      temp='green1'
    }
  })
}
document.addEventListener('drag', function(e) {

});
for(let i = 0 ; i<div.length;i++){
    function dragstart_handler(ev) {
        // Add this element's id to the drag payload so the drop handler will
        // know which element to add to its tree
        ev.dataTransfer.setData(div[i], ev.target.id);
        ev.dataTransfer.effectAllowed = "copy";
      }
      
      function drop_handler(ev) {
        ev.preventDefault();
      
        // Get the id of the target and add the copyd element to the target's DOM
        
        let data = document.createElement('div')
        data.className=temp
        data.style.top=curPos.clientY-50+'px'
        data.style.left=curPos.clientX-225+'px'
        ev.target.appendChild(data);
      }
      
      function dragover_handler(ev) {
        ev.preventDefault();
        
        ev.dataTransfer.dropEffect = "copy"
      }
}

