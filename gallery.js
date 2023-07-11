// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the featured image element
    var featuredImage = document.querySelector("#gallery figure img");
  
    // Get the thumbnail images
    var thumbnails = document.querySelectorAll("#gallery ul li img");
  
    // Add click event listeners to each thumbnail image
    thumbnails.forEach(function(thumbnail) {
      thumbnail.addEventListener("click", function() {
        // Set the clicked thumbnail as the featured image
        featuredImage.src = this.src;
  
        // Update the caption with image title
        var caption = document.querySelector("#gallery figure figcaption");
        caption.textContent = this.alt;
  
        // Remove the 'active' class from all thumbnails
        thumbnails.forEach(function(thumbnail) {
          thumbnail.classList.remove("active");
        });
  
        // Add the 'active' class to the clicked thumbnail
        this.classList.add("active");
      });
    });
  });
  