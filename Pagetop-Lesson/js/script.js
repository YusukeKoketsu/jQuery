$(function(){
  // $('#id名 要素名')と指定すると、id内の子要素に対してのみ指定される
  $('#back a').on('click', function(event){
    // #back内のaタグがクリックされたときの処理
    // animate() は、アニメーション効果を設定するjQueryの関数
    // $('セレクタ名').animate({
    //   変化対象のプロパティ名:変化値
    // }, アニメーションの動作時間);
    // $('body, html')でページ全体に対して処理を実行
    $('body, html').animate({
      scrollTop:0
    }, 800);
    // event.preventDefault(); は、aタグの機能を無効にするメソッド
    // aタグは画面遷移をする機能を保ちますが、今回は必要ないため無効化
    event.preventDefault();
  });
});