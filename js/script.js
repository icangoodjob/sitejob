$(".header-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="header-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="header-options">';
      $(this).find("option").each(function() {
        template += '<span class="header-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="header-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".header-option:first-of-type").hover(function() {
  $(this).parents(".header-options").addClass("option-hover");
}, function() {
  $(this).parents(".header-options").removeClass("option-hover");
});
$(".header-select-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".header-select").removeClass("opened");
  });
  $(this).parents(".header-select").toggleClass("opened");
  event.stopPropagation();
});
$(".header-option").on("click", function() {
  $(this).parents(".header-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".header-options").find(".header-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".header-select").removeClass("opened");
  $(this).parents(".header-select").find(".header-select-trigger").text($(this).text());
});
var elements = $('.modal-overlay, .modal');

(function($) {
$(function() {
  
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
  
});
})(jQuery);

$('.login__btn').click(function(){
    elements.addClass('active');
});

$('.close-modal').click(function(){
    elements.removeClass('active');
});
