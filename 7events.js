// what is the differences between event.preventDefault()
                            //  and   event.stopPropagation()

/*
event.preventDefault() is preventing the default behavior of an element 
if it used in the form , it will prevent it form submitting
  but how can we know if the e.preventDefault is used?
      -- we can use the event.preventDefault() property in the object event
         and returns true if used

         
event.stopPropagation() stops the propagation of element or stops from 
the bubbling phase
*/