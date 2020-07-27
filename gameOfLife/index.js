/*
world that made of 2 dimensional which programmatically means 2 arrays 
that made of columns and rows --> Grid
The idea that you have generations 
so we are gonna run some grid on the generation of zero and then this will 
determine the next generation , each rows has a lot of cells and each 
cell can be on or off (1 or 0) dead or alive 
so the next generation we are gonna take a look at its position in the pervious
generation to look up at it neighbors, because each cell depends on them 

in this game, each cell surrounds by 8 neighbors 
       


 1. live cell < live neighbors ---> dies ---> under population     
 2. live cell > 2 < 3 live neighbors live in the next generation
 3. live cell > 3 live neighbors dies ---> overpopulation
 4. live cell === 3 live neighbors , live in the next generation -->reproduction


 example 

                           live <--- [dead cell == 0] -> live
                                            |
                                            live     

                        this cell will live in the next generation 
                        due ro reproduction

                            
                        
                            live <---- [live cell = 1]  -> dies under population
                                
                                 

                                        or
                                       ___



                                       live
                                        |
                            live <---- [live cell = 1] ---> live     -> dies  
                                        |                              overpopulation  
                                      live

     

*/ 