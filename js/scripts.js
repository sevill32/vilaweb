function scrollCertificates(amount) {
    const slider = document.getElementById("certificateSlider");
    slider.scrollBy({
        left: amount,
        behavior: "smooth"
    });
}
