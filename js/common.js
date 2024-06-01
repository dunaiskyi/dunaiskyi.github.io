$(document).ready(function(){
    $("head").append("<link rel='stylesheet' type='text/css' href='сss/index.css' />");
    $("head").append("<link rel='stylesheet' type='text/css' href='css/font-awesome.min.css' />");
      var $menu = $("#scroll_menu");
      $(window).scroll(function(){
          if ( $(this).scrollTop() > $("header").height() * 0.7 && $menu.hasClass("hide") ){
              $menu.removeClass("hide").addClass("show");
          }
          else if($(this).scrollTop() <= $("header").height() * 0.7 && $menu.hasClass("show")) {
              $menu.removeClass("show").addClass("hide");
          }
      });
  });

  var map_1, map_2, circle, circleOptions, setCenter, marker;

  function initialize() {
      var myLatlng = new google.maps.LatLng(48.754580, 30.252957); //Uman
      var myOptions_1 = {
          zoom: 7.7,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.terrain
      }
      var myOptions_2 = {
          zoom: 17,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.terrain
      }
      circleOptions = {
        center: myLatlng,
        radius: 100000,
        fillColor:"#F0650D",
        fillOpacity:0.2,
        strokeColor:"#F0650D",
        strokeOpacity:0.4,
        strokeWeight:1,
        clickable:false
      }
      map_1 = new google.maps.Map(document.getElementById("my_map_1"), myOptions_1);
      circle = new google.maps.Circle(circleOptions);
      circle.setMap(map_1);
      map_2 = new google.maps.Map(document.getElementById("my_map_2"), myOptions_2);
      marker = new google.maps.Marker({position: myLatlng, title: "Евакуатор"});
      marker.setMap(map_2);
  }

  function loadScript() {
      var script = document.createElement("script");
      script.src = "http://maps.google.com/maps/api/js?sensor=false&callback=initialize&key=AIzaSyCQsFePJ5LRa6ttFQV2patpz-Jw-0KvG0c";
      document.body.appendChild(script);
  }

  window.onload = loadScript;
