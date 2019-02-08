(function() {
    
    window.addEventListener("keydown", function(e) {
        // no space and arrow keys, tab
        if([32, 37, 38, 39, 40, 48].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);

    let upBtn = document.getElementById('upToggle');
    let downBtn = document.getElementById('downToggle');
    let tabBtn = document.getElementById('tabToggle');
    let escBtn = document.getElementById('escapeToggle');
    let bBtn = document.getElementById('bToggle');    
    let altF4Btn = document.getElementById('altF4Toggle');


    Mousetrap.bind('tab', function(e) {

        console.log('tab');
        tabBtn.classList.toggle('active');
    });

    Mousetrap.bind('up', function(e) {

        console.log('up');
        upBtn.classList.toggle('active');

    });    

    Mousetrap.bind('down', function(e) {

        console.log('down');
        downBtn.classList.toggle('active');        
    });        


    Mousetrap.bind('b', function(e) {
        console.log('b');
        bBtn.classList.toggle('active');        
    });

    Mousetrap.bind('escape', function(e) {

        console.log('escape');
        escBtn.classList.toggle('active');
    });
    
    Mousetrap.bind('alt+F4', function(e) {

        console.log('ALT + F4');
        altF4Btn.classList.toggle('active');
    });    
    
})();