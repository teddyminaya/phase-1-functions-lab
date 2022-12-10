function distanceFromHqInBlocks(blocks){
   if (blocks>42){
    return blocks - 42
   } else if (blocks<42){
     return 42 - blocks
   }
}

function distanceFromHqInFeet(feet){
let block=distanceFromHqInBlocks(feet)
    if (feet>42){
      return block * 264
  } else if (feet<42){
      return 264 * block
  }
}

function distanceTravelledInFeet(startingBlock,endingBlock){
let feet=264
  if (endingBlock>startingBlock){
    return (endingBlock-startingBlock)*feet
  }
  else if (startingBlock>endingBlock){
    return (startingBlock-endingBlock)*feet
  }
}

function calculatesFarePrice(start,destination){
let dist=distanceTravelledInFeet(start,destination)
console.log(dist)
  if (dist>2500) {
    return 'cannot travel that far'
  } else if (dist>400 && dist<=2000) {
    return (dist-400) * 0.02;
  } else if (dist>2000) {
    return 25
  } else if (dist<=400){
    return 0
  }
}