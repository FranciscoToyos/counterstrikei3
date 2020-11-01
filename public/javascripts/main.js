// Modal info
$('#exampleModal').modal('toggle')

// Modal video
let videoSrc = $("#exampleModal2 iframe").attr("src");
$('#exampleModal2').on('show.bs.modal', function () { // on opening the modal
  // set the video to autostart
  $("#exampleModal2 iframe").attr("src", videoSrc+"?autoplay=1");
}).on('hidden.bs.modal', function (e) { // on closing the modal
  // stop the video
  $("#exampleModal2 iframe").attr("src", null);
});

//Validación contacto

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
