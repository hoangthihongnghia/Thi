$(".form-singup").hide();
$("#signup-a").click(function() {
    $(".form-login").fadeOut(100);
    $(".form-singup").delay(100).fadeIn(100);
    $("#login-a").removeClass("active");
    $("#signup-a").addClass("active");
});
$("#login-a").click(function() {
    $(".form-singup").fadeOut(100);
    $(".form-login").delay(100).fadeIn(100);
    $("#signup-a").removeClass("active");
    $("#login-a").addClass("active");
});