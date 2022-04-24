document.addEventListener("DOMContentLoaded", function() {

    document.querySelector("button").addEventListener("click", generateWords);

})

//document.addEventListener("DOMContentLoaded", function() {

 //   let arrOfImgs = [ "images/cheese 1.png", "images/cheese 1.png", "images/cheese 1.png", "images/cheese 1.png", "images/cheese 1.png", "images/cheese 1.png",  ] //an array of possible image paths
 //   let randomImg = arrOfImgs[ Math.floor(Math.random() * arrOfImgs.length) ] //grab a random image path from the array
  // document.querySelector("#cheese").src = randomImg //reset the src of the html img to be the random img.

//})




function generateWords() {

    let rm = RiTa.markov(2);
    rm.addText(artistConk);
    let sentences = rm.generate(30);
    document.querySelector("#generated").innerHTML = sentences;

}

