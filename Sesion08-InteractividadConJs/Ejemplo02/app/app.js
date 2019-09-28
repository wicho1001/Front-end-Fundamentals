$(document).ready(function(){
    $("#mexico-photos").toggle(
      function(){$("#mexico-photos").css({"background-image": "url(./assets/images/cdmx2.jpeg)"});},
      function(){$("#mexico-photos").css({"background-image": "url(./assets/images/cdmx3.jpeg)"});},
      function(){$("#mexico-photos").css({"background-image": "url(./assets/images/cdmx.jpeg)"});}
      );

      $("#bogota-photos").toggle(
        function(){$("#bogota-photos").css({"background-image": "url(./assets/images/bogota2.jpeg)"});},
        function(){$("#bogota-photos").css({"background-image": "url(./assets/images/bogota3.jpg)"});},
        function(){$("#bogota-photos").css({"background-image": "url(./assets/images/bogota.jpg)"});}
      );

      $("#paris-photos").toggle(
        function(){$("#paris-photos").css({"background-image": "url(./assets/images/paris2.jpg)"});},
        function(){$("#paris-photos").css({"background-image": "url(./assets/images/paris3.jpeg)"});},
        function(){$("#paris-photos").css({"background-image": "url(./assets/images/paris.jpg)"});}
      );
  });


function classToggle() {
    this.classList.toggle('panama-photos2');
    this.classList.toggle('panama-photos3');
}
document.querySelector('#panama').addEventListener('click', classToggle);