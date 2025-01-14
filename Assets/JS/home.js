document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector("#carouselExample");
    const yellowLine = document.querySelector(".yellow-line");
    const blueLine = document.querySelector(".blue-line");
    

    // Update the colors dynamically for active slide
    const updateLines = () => {
        const activeItem = carousel.querySelector(".carousel-item.active");
        const slideColor = activeItem.getAttribute("data-slide");

        if (slideColor === "yellow") {
            yellowLine.style.opacity = "1";
            blueLine.style.opacity = "0.5"; // Dim blue line
        } else if (slideColor === "blue") {
            yellowLine.style.opacity = "0.5"; // Dim yellow line
            blueLine.style.opacity = "1";
        }
    };

    // Update the subtitle-slide animation dynamically for active slide
    const updateSubtitleAnimation = () => {
        // Remove "active" animation class from all subtitle-slide elements
        document.querySelectorAll(".subtitle-slide").forEach((subtitle) => {
            subtitle.classList.remove("active");
        });

        // Add "active" animation class to the current active slide's subtitle
        const activeItem = carousel.querySelector(".carousel-item.active");
        const subtitle = activeItem.querySelector(".subtitle-slide");
        if (subtitle) {
            // Delay slightly for smooth effect
            setTimeout(() => {
                subtitle.classList.add("active");
            }, 200); // Adjust delay as needed
        }
    };

    // Combine both update functions on carousel slide change
    carousel.addEventListener("slid.bs.carousel", () => {
        updateLines();
        updateSubtitleAnimation();
    });

    // Initialize both updates on page load
    updateLines();
    updateSubtitleAnimation();

    // Load the Lottie animation into the container
    // lottie.loadAnimation({
    //     container: document.getElementById("lottie-animation-container"), // Target container
    //     renderer: "svg",
    //     loop: true,
    //     autoplay: true,
    //     path: "./Lottie/Truck-delivery-service.json" // Replace with the actual path to your Lottie JSON file
    // })

    // lottie.loadAnimation({
    //     container: document.getElementById("lottie-animation-why"), // Target container
    //     renderer: "svg",
    //     loop: true,
    //     autoplay: true,
    //     path: "path-to-your-lottie-animation.json" // Replace with the actual path to your Lottie JSON file
    // });
});
