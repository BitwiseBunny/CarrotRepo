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
var bckImage = document.getElementById("galleryHeader");
var smokeOver = document.getElementById("smokeOverlay");


window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
 
  if (currentScroll >= checkpoint) {
    bckImage.style.opacity = "1";
   // smokeOver.style.opacity = "1";
    bckImage.style.animation = "fadeIn 2s forwards";
   // smokeOver.style.animation = "fadeIn 2s forwards";
  } else {

  }
  
}); 