$(function() {
  $('.menu-trigger').on('click', function(event) {
    // .toggleClass()は、指定されているclassをトグル処理するメソッド
    $(this).toggleClass('active');
    // .fadeToggle()は、要素のフェードイン・フェードアウトを切り替えるメソッド
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});