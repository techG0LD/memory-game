let colorsArr = ['red','green','yellow','blue','pink','brown','purple','orange']
let listOfObjTiles = []
let foundArr=[]  


/*  after invoking giVeColor(), each element is a object in the listOfObjTiles
{
    id : '1/1',
    color: 'blue',
    found: false
}

*/


let gameDone = 0;

let choiceCount = 0;

let firstTile = null;
let firstTileID = null;
let secondTile = null;
let secondTileID = null;


const delay = ms => new Promise(res => setTimeout(res, ms));




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
        //  document.getElementById(listOfObjTiles[i].id).innerHTML = "?"
        }
}


function soundEffect() {
    var audio = document.getElementById("audio");
    audio.play();
}


function winSoundEffect() {
    var audio = document.getElementById("audio2");
    audio2.play();
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
}

const resetTile = async (id) => { 
    await delay(3000);
    console.log("Waited 3s");
    
    document.getElementById(id).style.backgroundColor = 'black'
    firstTile = null
    secondTile = null
    firstTileID = null
    secondTileID = null
    
};

const resetText = async () => { 
    await delay(3000);
    document.getElementById('caption').innerHTML = "Select First Tile..."
    document.getElementById('caption2').innerHTML = "Select Second Tile..."
    document.getElementById('result').innerHTML = 'Do they match?'
}

const resetTry = async () => {    //made to reset two choices without effecting tile color
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
        
    if (firstTile === null && secondTile === null ) {
        document.getElementById(listOfObjTiles[i].id).style.backgroundColor = listOfObjTiles[i].color
        firstTile = listOfObjTiles[i].color;  
        firstTileID = listOfObjTiles[i].id;
        document.getElementById('caption').innerHTML = 'First Tile: ' + firstTile.toUpperCase()
    soundEffect();
    console.log(listOfObjTiles[i].color)
    } 
    else if(secondTile == null){
        soundEffect();
        choiceCount++
    document.getElementById(listOfObjTiles[i].id).style.backgroundColor = listOfObjTiles[i].color
    secondTile = listOfObjTiles[i].color
    secondTileID = listOfObjTiles[i].id
    document.getElementById('caption2').innerHTML = "Second Tile: " + secondTile.toUpperCase() 

    if(firstTileID === secondTileID){

        if(listOfObjTiles[i].found == true) {
            document.getElementById('caption2').innerHTML ='Second Tile: clicked on same tile, but this tile has been found'
            document.getElementById('result').innerHTML = 'Result: Try Again!'
            resetText()
            resetTry()
        }
        else {
            document.getElementById('caption2').innerHTML ='Second Tile: clicked on same tile'
            document.getElementById('result').innerHTML = 'Result: Try Again!'
            resetTiles()
            resetText()
        }
            
                
    }
    else if(firstTile != null && firstTile === secondTile && firstTileID !== secondTileID ){
        console.log("this is the index of your color " + colorsArr.indexOf(firstTile))
        if(foundArr.includes(firstTileID)){
            document.getElementById('result').innerHTML ='Result: Match Found Already!!'
            resetText()
            resetTry()
        }
        else {
            document.getElementById('result').innerHTML ='Result: Match Found!!'

            for (let j = 0;j<listOfObjTiles.length;j++){
                if (listOfObjTiles[j].color == firstTile){
                listOfObjTiles[j].found = true;
                foundArr.push(listOfObjTiles[j].id)
                console.log(listOfObjTiles[j])
            }
            } 
            
            resetTry()
            gameDone++
            if(gameDone >= 8){
                // let playAgain = document.createElement('a');     try to add a anchor element to reload the game
                // playAgain.href = 'index.html' 
                // playAgain.textContent = "Play Again"
                winSoundEffect()
                document.getElementById('caption').innerHTML = "Thank you for Playing! Can you solve the tile game in less rounds?"
                document.getElementById('caption2').innerHTML = "Round: " + choiceCount
                document.getElementById('result').innerHTML = "YOU WIN!!"
            }
            else {resetText()}
         
        
        }
        
        } else  if (firstTile != null && secondTile != null && firstTile !== secondTile ) {
            console.log('wait for reset');
            console.log(secondTile)
            
            

            //this if else statment checks if any of the tiles have already been found/matched
            if(foundArr.includes(secondTileID) || foundArr.includes(firstTileID)){

                if(foundArr.includes(firstTileID)){
                    document.getElementById('result').innerHTML = `Result: First Tile has been Found,Try Again!`
                    resetTile(secondTileID)
                }
                else{
                    resetTile(firstTileID)
                    document.getElementById('result').innerHTML = `Result: Second Tile has been Found,Try Again!`
                }

                //this was my first algorimth ,which looped through the objects array to find objects that has matching IDs to the foundArray elements(IDs)
                // in order to avoid reverting back to deafult color
                //   for(let j = 0;j<listOfObjTiles.length;j++){
                //     if(foundArr.includes(listOfObjTiles[j].id)){
                        
                //     }
                //     else{
                //         resetTile(listOfObjTiles[j].id)
                //     }

                //   } 
                
                resetText(); 
            }
            //else condition is met if neither choosen tile has been found/match
            else{
                document.getElementById('result').innerHTML = 'Result: No Match ):'
                resetText();
                resetTiles();
                
            }
            
                
            
            
        }
        }

    })  //end of eventlister click

 console.log(listOfObjTiles[i].color)      //loop to figure out the color of each tile

}

