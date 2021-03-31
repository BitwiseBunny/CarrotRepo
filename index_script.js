// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function modalFunction(image){
  modal.style.display = "block";
  modalImg.src = image.src;
  captionText.innerHTML = image.alt;
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
const checkpoint = 100;
var colorOverlay = document.getElementById("colorOverlay");
var smokeOver = document.getElementById("smokeOverlay");
var filigree = document.getElementById("galleryHeader");


window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
 
  if (currentScroll >= checkpoint) {
    colorOverlay.style.opacity = "1";
    colorOverlay.style.height = "auto";
    colorOverlay.style.transition = "2.5s ease";

    setTimeout(() => {
      filigree.style.opacity = "0";
      filigree.style.transition = "2.5s";
    }, 500);
   // smokeOver.style.opacity = "1";
    //colorOverlay.style.animation = "fadeIn 2s forwards";
   // smokeOver.style.animation = "fadeIn 2s forwards";
  }   
}); 