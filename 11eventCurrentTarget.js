                        // Event Target 
/*
Event Current is the element on which we attach the event handler explicitly 
*/
// Html
<div class="outer" onclick={EventClickOccur}>
    <div class="inner">
         <button>Target</button>
    </div>
</div>
occur

// js
function EventClickOccur(e){
     console.log(e.target)
}

/*
If we click the button it will log the markup of the outermost div even 
tho we click the button
*/