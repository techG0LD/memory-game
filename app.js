let colorsArr = ['red','green','yellow','blue','pink','brown','purple','orange']
let listOfObjTiles = []  


/*  after invoking giVeColor(), each element is a object in the listOfObjTiles
{
    id : '1/1',
    color: 'blue',
    found: false
}

*/


let gameDone = false

let choiceCount = 0;

let firstTile = null;
let firstTileID = null;
let secondTile = null;
let secondTileID = null;


const delay = ms => new Promise(res => setTimeout(res, ms));

let pair0 = false
let pair1 = false
let pair2 = false
let pair3 = false
let pair4 = false
let pair5 = false
let pair6 = false
let pair7 = false



    let rCount=0;
    let gCount=0;
    let yCount=0;
    let bCount=0;
    let pCount=0;
    let broCount=0;
    let purCount=0;
    let oCount=0;





     //onload
    //create objects for every tile on index.html  

let targetedDivs = document.querySelectorAll('.tile')

for (let i = 0;i < targetedDivs.length ; i++){
    listOfObjTiles.push({
        'id': targetedDivs[i].id,
        'found': false
    })

    console.log(listOfObjTiles[i].id)
}



function coverTiles(){
    for(let i =0; i < listOfObjTiles.length; i++){
        //  console.log(tiles[i].id)
         document.getElementById(listOfObjTiles[i].id).style.backgroundColor = 'black'  //set every card to deafult{black} color on load
    }
}




//give every tile a color property 

function giveColor(){
    
    for(let i =0; i < targetedDivs.length; i++){  
        

    let color = 8;
    while(color > 7){
        color = Math.floor(Math.random() *10)
    }


    let tileColor = document.getElementById(targetedDivs[i].id).style.backgroundColor = colorsArr[color]
        
    listOfObjTiles[i].color = colorsArr[color]  //allows to store the orignal color of the tile when rest back to deafult color,saves to the object tile related to the elem in html
    
    
       


        // console.log(listOfObjTiles[i].color)
        // document.getElementById(listOfObjTiles[i].id).addEventListener('click',flip(listOfObjTiles[i].color,listOfObjTiles[i].id))
    switch(tileColor){
        case colorsArr[0]:
            rCount++
            console.log(rCount)
            if( rCount >= 3){
                i--
                rCount--
            }
                // continue;

            break;

        case colorsArr[1]:
            gCount++
           
            if( gCount >= 3){                    
                i--
                gCount--
            }   
             break;


        case colorsArr[2]:
            yCount++
            if( yCount >= 3){
                i--
                yCount--
            }
            break;

        case colorsArr[3]:
            bCount++
            if( bCount >= 3){
                i--
                bCount--
            }
            break;

        case colorsArr[4]:
            pCount++
            if( pCount >= 3){
                i--
                pCount--
            }
            break;

        case colorsArr[5]:
            broCount++
            if( broCount >= 3){
                i--
                broCount--
            }
            break;


        case colorsArr[6]:
                purCount++
                if( purCount >= 3){
                    i--
                    purCount--
                }
            break;

        case colorsArr[7]:
            oCount++
            if( oCount >= 3){
                i--
                oCount--
            }
        break;


            default:
                break;
        
            }  //end of switch statement

        
            



        }       //end of the for loop

 


}


    const resetTiles = async () => { 
            await delay(3000);
            console.log("Waited 3s");
            document.getElementById(firstTileID).style.backgroundColor = 'black'
            document.getElementById(secondTileID).style.backgroundColor = 'black'
                firstTile = null
                secondTile = null
                firstTileID = null
                secondTileID = null
                    // await delay(5000);             // console.log("Waited an additional 5s");
    };

    const resetTile = async (ID) => { 
        await delay(3000);
        console.log("Waited 3s");
       
        document.getElementById(ID).style.backgroundColor = 'black'

        
        
        
            firstTile = null
            secondTile = null
            firstTileID = null
            secondTileID = null
                // await delay(5000);             // console.log("Waited an additional 5s");
};

const resetText = async () => { 
    await delay(3000);
    document.getElementById('result').innerHTML = ''
    document.getElementById('caption').innerHTML = " "
    document.getElementById('caption2').innerHTML = " "
    
}

const resetTry = async () => { 
    await delay(3000);
    firstTile = null
    secondTile = null
    firstTileID = null
    secondTileID = null
}




    giveColor()   //invokes function to assign each tile a color
    coverTiles()  


     
    pair0 = true;
    console.log(pair0)
     
    
    for(let i = 0; i < listOfObjTiles.length; i++){   //this loop gives every tile a click function 
        document.getElementById(listOfObjTiles[i].id).addEventListener('click',function(){
            // console.log('clicked')
            
            // document.getElementById(listOfObjTiles[i].id).style.backgroundColor = listOfObjTiles[i].color

            // if(listOfObjTiles[i].found == true){
            //     document.getElementById('result').innerHTML ='tile already found'
            //     resetText();
            //     resetTry();
            // }


            //check this if else statement first

            if (firstTile === null && secondTile === null ) {
                document.getElementById(listOfObjTiles[i].id).style.backgroundColor = listOfObjTiles[i].color
                firstTile = listOfObjTiles[i].color;  
                firstTileID = listOfObjTiles[i].id;

                // if(listOfObjTiles[i].found == true){
                //     document.getElementById('result').innerHTML ='tile already found'
                //     document.getElementById('caption').innerHTML = 'you choose ' + firstTile + " as your first tile"
                //     resetText();
                //     resetTiles();
                // } 
                 document.getElementById('caption').innerHTML = 'you choose ' + firstTile + " as your first tile"
                console.log(listOfObjTiles[i].color)

                
            } 
                else if(secondTile == null){
                document.getElementById(listOfObjTiles[i].id).style.backgroundColor = listOfObjTiles[i].color
                secondTile = listOfObjTiles[i].color
                secondTileID = listOfObjTiles[i].id
                document.getElementById('caption2').innerHTML = 'you choose ' + secondTile + " as your second tile"

                if(firstTileID === secondTileID){

                    if(listOfObjTiles[i].found == true) {
                        document.getElementById('caption2').innerHTML ='clicked on same tile twice that was found,try again'
                        document.getElementById('result').innerHTML = 'not matched,try again'
                        resetText()
                        resetTry()
                    }
                    else {
                        document.getElementById('caption2').innerHTML ='clicked on same tile twice,try again'
                        document.getElementById('result').innerHTML = 'not matched,try again'
                        resetTiles()
                        resetText()
                    }
                    
                     
                }
                else if(firstTile != null && firstTile === secondTile && firstTileID !== secondTileID ){
                    console.log("this is the index of your color " + colorsArr.indexOf(firstTile))
                    
                     document.getElementById('result').innerHTML ='match found'


                     for (let j = 0;j<listOfObjTiles.length;j++){
                        if (listOfObjTiles[j].color == firstTile){
                          listOfObjTiles[j].found = true;
                          console.log(listOfObjTiles[j])
                        }
                        

                     }

                     
                    resetText()
                    resetTry()
                    // ++choiceCount create a new p element to store count
                    
                    // document.getElementById('result').innerHTML = choiceCount
                    
                } else  if (firstTile != null && secondTile != null && firstTile !== secondTile ) {
                    console.log('wait for reset');
                    console.log(secondTile)
                    // ++choiceCount 
                    

                    document.getElementById('result').innerHTML = 'not matched,try again'

                     
                    resetText();
                    //try to delay time before changing both tiles to black,maybe using a async function instead of hardcoding.passing in the tiles's ID as parameters

                    resetTiles();
                    // document.getElementById('result').innerHTML = choiceCount
                }
                else {

                }
                
                
            }

         })  //end of eventlister click
        
        console.log(listOfObjTiles[i].color)      //loop to figure out the color of each tile
        
    }

    
    


    
    //issue #1 : if chossenn one of the matched tiles, first or second choice. it changed both options to black,how to aoid the matched tile reverting to black


    //  do{
        
    //     //print out make your first choice
    //     if(choiceCount == 0){
    //         break;
    //     }
    //     else if (choiceCount == 1){
            
    //     }
    //     else {
    //         console.log('you made two choices')
    //         break;
    //     }


    // } while(!gameDone)
    
        








     

     


    // document.getElementById(listOfObjTiles[i].id).addEventListener('dblclick',function(){
        //     console.log('clickedtwice')
        //     document.getElementById(listOfObjTiles[i].id).style.backgroundColor = 'black'
            
        //  })


    

    //if not clicked then set to deafult{black} color

        
    //if clicked then expose tile color until the a second click is made on another tile.



/*

if both tiles do not have matching property value (which is the name of the color in a string)
then invoke function that sets the color back to deafult.

if tiles do match,then leave the expose color until all other tiles are exposed (boolean for exposed)

*/