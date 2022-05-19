// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Script loaded')

    let headsTd = document.querySelector('#heads')
    let headsPercentTd = document.querySelector('#heads-percent')
    let tailsTd = document.querySelector('#tails')
    let tailsPercentTd = document.querySelector('#tails-percent')

    let headsCount = 0
    let tailsCount = 0
    let totalCount =0

   
    console.log('my td references', headsTd,headsPercentTd,tailsTd, tailsPercentTd)

    // TODO: Add event listener and handler for flip and clear buttons
   let flipButton = document.querySelector('#flip')
   let pennyImage = document.querySelector('#penny-image')
   console.log("penny image", pennyImage)
   

   console.log(flipButton)
   flipButton.addEventListener('click',function(){
       console.log ("flip is clicked")
       //true is heads, false is tails
      let flippedHeads = Math.random() < .5
    if (flippedHeads === true){
        pennyImage.src = "./assets/images/penny-heads.jpg"
        headsCount = headsCount + 1
        totalCount = totalCount + 1
        headsTd.textContent = headsCount
        headsPercentTd.textContent = `${(headsCount/totalCount)*100}%`
       
}
else{
    pennyImage.src = "./assets/images/penny-tails.jpg"
    tailsCount = tailsCount + 1
    totalCount = totalCount + 1
    tailsTd.textContent = tailsCount
    tailsPercentTd.textContent = `${(tailsCount/totalCount)*100}%`
    
}
})

   let clearButton = document.querySelector('#clear')
   console.log(clearButton)
   clearButton.addEventListener('click',function(){
       console.log('clear is clicked')})
    
headsCount = 0
tailsCount = 0
totalCount = 0
headsTd.textContent = headsCount
tailsTd.textContent = tailsCount
headsPercentTd.textContent = '0%'
tailsPercentTd.textContent = '0%'

    // Flip Button Click Handler
        // TODO: Determine flip outcome 
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})