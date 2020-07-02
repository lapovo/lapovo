function getRestaurant() {
    let restaurants = [
        'STRAŽEVICA (★★★★)\n\rKaradjordjeva 1',
        'FOXY ROXY (★★★)\n\rKralja Petra 24',
        'BRAZIL (★★★★★)\n\rNjegoševa 7',
        'KOD SLOBODANA (★★★★★)\n\rRaskrsnica 24 i 158',
        'PINK PANTER (★★★★)\n\rPlato Dr Zorana Djindjica, Batočina',
        'KAFANA STRAZEVICA (★★★★★)\n\rKarađorđeva',
        'MINI PANI (★★★)\n\rKralja Petra 22',
        'ŽAR MANCE (★★★★★)\n\rNikole Pašića',
        'OBI-WANA KENOBIJA (★★★★★)\n\rCara Lazara'
    ];

    let restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    let highlight = document.getElementById("restaurant");
    highlight.setAttribute('style', 'white-space: pre;');
    highlight.textContent = restaurant;
}
