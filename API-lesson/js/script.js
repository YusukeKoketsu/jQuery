// API_KEY
const API_KEY = "60c2aaaf9038b9df7705b3857f028e28";

$(function() {
  $('#btn').on('click', function(){
    // 入力された都市名でWebAPIに天気情報をリクエスト
    // $.ajax()は、Ajaxを実装するメソッド
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      // レスポンスとして取得したいデータの型を指定 JSONで受け取りたいので、 dataType : 'jsonp',と記述
      dataType : 'jsonp',
      // .done()は通信に成功した場合、.fail()は失敗した場合に記述するメソッド
    }).done(function (data){
      // $('#id名').text(JSONから欲しい値)の形で指定
      //通信成功
      // 位置
      $('#place').text(data.name);
      // 最高気温
      $('#temp_max').text(data.main.temp_max);
      // 最低気温
      $('#temp_min').text(data.main.temp_min);
      //湿度
      $('#humidity').text(data.main.humidity);
      //風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.weather[0].main);
      // 天気アイコン
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
    }).fail(function (data) {
      //通信失敗
      alert('通信に失敗しました。');
    });
  });
});