const images = [
    [
        "https://cdn.discordapp.com/attachments/1169133111049715723/1329298147498790912/image.png?ex=6789d4df&is=6788835f&hm=fbc91f555428640a5c2a0d1316be1897afd5137664170c165a5f86fbd94494be&",
        "https://cdn.discordapp.com/attachments/1169133111049715723/1329298147876409374/image.png?ex=6789d4df&is=6788835f&hm=c17dcc87e8e75704eca8fbb5efb1269b4d3eb84a8275aa03f3362e0f1e19eb08&",
        "https://cdn.discordapp.com/attachments/1169133111049715723/1329298148207890472/image.png?ex=6789d4df&is=6788835f&hm=99d41fc617a46682ab5dd654257982e6c907802e1dff70d3cfc5b4c1a14efa3c&",
        "https://cdn.discordapp.com/attachments/1169133111049715723/1329298148673191986/image.png?ex=6789d4df&is=6788835f&hm=da4c8657141eea3924ae874a85c8da466f10a4cca1ccdd218db659e68728919d&"
    ],
    [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150/0000FF",
        "https://via.placeholder.com/150/008000",
        "https://via.placeholder.com/150/FF0000"
    ]
];

let currentIndex = [0, 0];

function showImage(carouselIndex, imageIndex) {
    const carousel = document.querySelectorAll('.carousel')[carouselIndex];
    const img = carousel.querySelector('img');
    img.style.transform = 'scale(0.9)';
    setTimeout(() => {
        img.src = images[carouselIndex][imageIndex];
        img.style.transform = 'scale(1)';
    }, 250);
}

function nextImage(carouselIndex) {
    currentIndex[carouselIndex] = (currentIndex[carouselIndex] + 1) % images[carouselIndex].length;
    showImage(carouselIndex, currentIndex[carouselIndex]);
}

function prevImage(carouselIndex) {
    currentIndex[carouselIndex] = (currentIndex[carouselIndex] - 1 + images[carouselIndex].length) % images[carouselIndex].length;
    showImage(carouselIndex, currentIndex[carouselIndex]);
}