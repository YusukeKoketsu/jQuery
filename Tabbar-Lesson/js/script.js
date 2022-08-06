// .hide();は、特定のHTML要素を非表示にするメソッド
$('#tab-contents .tab[id != "tab1"]').hide();

// id="tab-menu"のaタグがクリックされたときに、処理を実行する
$('#tab-menu a').on('click', function(event) {
  // id="tab-contents"内のいずれかのタブがクリックされたときに、そのタブ内の全コンテンツをいったん非表示にする
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  // .attr()は、HTML要素の属性を取得したり設定できるメソッド
  // .show()は要素を表示するメソッド
  $($(this).attr("href")).show();
  event.preventDefault();
});