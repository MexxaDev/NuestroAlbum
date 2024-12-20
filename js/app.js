


const thumbnails = document.querySelectorAll('.thumbnail');
const currentImage = document.getElementById('current-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
function iniciar(){
    alert("Hay que esperar hasta el 4/4/2025 para comenzar con este apartado ✈");
}
alert("Espero que podamos completar este Album digital con muchos momentos ❤");
function updateMainImage(index) {
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
    currentImage.src = thumbnails[index].src;
    currentIndex = index;
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => updateMainImage(index));
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        updateMainImage(currentIndex - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < thumbnails.length - 1) {
        updateMainImage(currentIndex + 1);
    }
});

// Initialize the first image as active
