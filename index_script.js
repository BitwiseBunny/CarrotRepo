// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionTitle = document.getElementById("captionTitle");
var captionText = document.getElementById("caption");
var SnowWhiteTitle = document.getElementById("title1Snow");
var SnowWhiteText = document.getElementById("text1Snow");

//dictionary to store modal image text captions
var captionDict = {"Beyond the Black Forest" : 
                      "Rich blue velvet, delicate yellow silk, white lace, red satin bows, and an apple. ",
                   "Alice Automata" : 
                      "Keep an ace up your sleeve, but don't lose your head!",
                    "Candy Apple Crush" : 
                      "The perfect getaway minidress for escaping wicked witches, or taking a nap in the woods.",
                    "Wicked" : 
                      "Clever witches love custom stitches",
                    "Across the Bridge and Through the Thicket" : 
                      "Speaking of witches... Have you ever met one with a flare for vinyl, pumpkins, and black tulle?",
                    "Black Rabbit" : 
                      "Follow this rabbit, and say hello to the Red Queen in vinyl and black lace.",
                    "The Advent of the Alice Automata" :
                      "Keep an ace up your sleeve, but don't lose your head!"};

function modalFunction(image){
  modal.style.display = "block";
  modalImg.src = image.src;

  //look up how to call another function within a funtion in javascript
  if (captionDict.hasOwnProperty(image.alt))
  {
    //captionTitle.parentNode.replaceChild(SnowWhiteTitle, captionTitle); //This is how you replace a node attribute plus styling.

    captionTitle.innerHTML = image.alt;
    captionText.innerHTML = captionDict[image.alt];
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

//Todo
//if alt == Alice for img above, then show p of words



//header image grayscale filter on scroll
const checkpoint = 300;
var colorOverlay = document.getElementById("colorOverlay");
var smokeOver = document.getElementById("smokeOverlay");
var filigree = document.getElementById("galleryHeader");


window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
 
  if (currentScroll >= checkpoint) {
    colorOverlay.style.opacity = "1";
    colorOverlay.style.height = "auto";
    colorOverlay.style.transition = "4s ease";

    setTimeout(() => {
     // filigree.style.backgroundImage = "url('../images/FiligreeColour.png')";
      //filigree.style.paddingTop = "16.7em";
   //   filigree.style.transition = "2.5s";
    }, 500);
   // smokeOver.style.opacity = "1";
    //colorOverlay.style.animation = "fadeIn 2s forwards";
   // smokeOver.style.animation = "fadeIn 2s forwards";
  }   
}); 