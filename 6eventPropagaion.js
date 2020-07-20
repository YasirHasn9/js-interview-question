// Event Propagation
/*
When en event happened on the dom element , this event does not entirely occur
of that one element and this leads us the phases of the events
1 . bubbling up : when the event occurs it will bubble up or goes up from the 
element that trigger the event to its parent to it grandparents until reached the 
window

2. Capturing phase: The event goes down form the window to its children
 to it grandchildren until reached the element that trigger the event


3. Target phase : the event has reached the target element





    Capturing phase        window
           ↓                 ⬇️ 
           ↓              document
           ↓                 ⬇️ 
           ↓                html       ↑ 
           ↓                 ⬇️        ↑
                            body       ↑
                             ⬇️        ↑
                            div        ↑
                             ⬇️        ↑
                            button   bubble ↑
                     */

// example about the bubble phase
// imagine that we have this code in our html file
/* 
        <div class="grandparent">
            <div class="parent">
                 <div class="child">1</div>
            </div>
        </div>
*/
function addEvent(el, event , callback , isCapturing = false){
    if(!el || !even || !callback || typeof callback !== function){
        if(typeof el === "string"){
            el = document.querySelector(el)
        }
        el.addEventListener(event , callback, isCapturing)
    }
}

// call the function 
addEvent(document , "DOMContentLoaded" , () => {
    child = document.querySelector(".child")
    parent = document.querySelector(".parent")
    grandparent = document.querySelector(".grandparent")

    addEvent(child, "click" , () => console.log("child"))
    addEvent(parent, "click" , () => console.log("parent"))
    addEvent(grandparent, "click" , () => console.log("grandparent"))
    addEvent(document, 'click', function (e) {
        console.log('document');
      });
    
      addEvent('html', 'click', function (e) {
        console.log('html');
      })
    
      addEvent(window, 'click', function (e) {
        console.log('window');
      })    
})

// notice if click on the child element it will occur of every element until window 