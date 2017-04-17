
//mobile navigation
function showMenu(){
    var button = document.getElementById("mainButton");
    var menu = document.getElementById("menuList");
    var closeMenu = document.getElementById("closeButton");

    button.addEventListener(
        'click', 
        function(){
            menu.style.display = "block"
            button.style.display = "none"
            closeMenu.style.display = "block"
        }
    )
    closeMenu.addEventListener(
        'click',
        function(){
            menu.style.display = "none"
            button.style.display = "block"
            closeMenu.style.display = "none"          
        }
    )
}

 // google maps
function initMap() {
        var uluru = {lat: 50.059, lng: 19.936};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
}

