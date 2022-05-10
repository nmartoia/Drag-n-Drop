let div = document.querySelectorAll("div")
let droite = document.querySelector(".droite")
for(let i = 0 ; i<div.length;i++){
    function dragstart_handler(ev) {
        console.log("dragStart: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);
      
        // Add this element's id to the drag payload so the drop handler will
        // know which element to add to its tree
        ev.dataTransfer.setData(div[i], ev.target.id);
        ev.dataTransfer.effectAllowed = "copy";
      }
      
      function drop_handler(ev) {
        console.log("drop: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);
        ev.preventDefault();
      
        // Get the id of the target and add the copyd element to the target's DOM
        
        let data = document.createElement('div')
        if(i==0){
            data.className='red';
        }
        if(i==1){
            data.className='blue';
        }
        if(i==2){
            data.className='green';
        }
        ev.target.appendChild(data);
      }
      
      function dragover_handler(ev) {
        console.log("dragOver: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);
        ev.preventDefault();
        // Set the dropEffect to copy
        ev.dataTransfer.dropEffect = "copy"
      }
}


  