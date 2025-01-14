document.addEventListener("DOMContentLoaded", () => {
    const gridItems = document.querySelectorAll(".grid-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const imageNumber = document.querySelector(".image-number");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const exitBtn = document.getElementById("exit-btn");
    const playBtn = document.getElementById("play-btn");
    const fullscreenBtn = document.getElementById("fullscreen-btn");
    const zoomBtn = document.getElementById("zoom-btn");
  
    let currentIndex = 0;
    let interval;
    let zoomLevel = 1;
  
    // Initialize Masonry.js
    new Masonry(".masonry-grid", {
      itemSelector: ".grid-item",
      columnWidth: ".grid-item",
      gutter: 10,
      percentPosition: true,
    });
  
    function showLightbox(index) {
      const selectedImage = gridItems[index].querySelector("img").src;
      lightboxImage.src = selectedImage;
      imageNumber.textContent = `${index + 1}/${gridItems.length}`;
      lightbox.classList.add("active");
      currentIndex = index;
      resetZoom();
    }
  
    function hideLightbox() {
      lightbox.classList.remove("active");
      clearInterval(interval);
      resetZoom();
    }
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % gridItems.length;
      showLightbox(currentIndex);
    }
  
    function prevImage() {
      currentIndex = (currentIndex - 1 + gridItems.length) % gridItems.length;
      showLightbox(currentIndex);
    }
  
    function startSlideshow() {
      clearInterval(interval);
      interval = setInterval(nextImage, 3000);
    }
  
    function toggleFullscreen() {
      if (!document.fullscreenElement) {
        lightbox.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  
    function zoomIn() {
      zoomLevel += 0.2;
      updateZoom();
    }
  
    function resetZoom() {
      zoomLevel = 1;
      updateZoom();
    }
  
    function updateZoom() {
      lightboxImage.style.transform = `scale(${zoomLevel})`;
      lightboxImage.style.transition = "transform 0.3s ease";
    }
  
    gridItems.forEach((item, index) => {
      item.addEventListener("click", () => showLightbox(index));
    });
  
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target === exitBtn) hideLightbox();
    });
  
    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", prevImage);
    playBtn.addEventListener("click", startSlideshow);
    fullscreenBtn.addEventListener("click", toggleFullscreen);
    zoomBtn.addEventListener("click", zoomIn);
  });
  