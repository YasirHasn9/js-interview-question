                            // &&
/*
&& is a logic operator that is looking for a falsy expression in its
one of its operands and returns it and of there is no falsy expressions 
then it will return the last expression
it employs  short-circuiting to prevent unnecessary extra word 
*/
// lets say that you are waiting for a client response , if we get it 
// then run this component 

function waitingClientResponse(){
    return true
}

true && waitingClientResponse()