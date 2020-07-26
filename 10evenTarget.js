                            // Event Target 
/*
The event target is the element on which the event occurred or when the element 
triggered the event

*/
// HTML
/*
<div onClick="eventFunction" >
      <div>
          <button>
             click
          </button>
      </div>
</div>
*/

// js
function eventFunction(e){
    console.log(e.target)
}

/*
if we click the button it will log up the markup of target even tho we attach the event
on the outermost
*/
