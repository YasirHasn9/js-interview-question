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