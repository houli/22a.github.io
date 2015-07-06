angular.module('meehan.controllers', [])
.controller('HomeController', ['$scope', function($scope) {

  var data = [270, 70, 20];
  var start = [135, 65, 45];
  var colors = ['#6a88e2', '#f1d25e', '#634f10'];
  var labels = ['Sky', 'Sunny side of pyramid', 'Shady side of pyramid'];

  function drawSegment(canvas, context, i, dpr) {
    context.save();
    var width = canvas.width / dpr;
    var center = Math.floor(width / 2);
    var radius = Math.floor(width / 2);
    var startingAngle = (start[i] * Math.PI)/180;
    var arcSize = (data[i] * Math.PI)/180;
    var endingAngle = startingAngle + arcSize;
    context.beginPath();
    context.moveTo(center, center);
    context.arc(center, center, radius, startingAngle, endingAngle, false);
    context.closePath();
    context.fillStyle = colors[i];
    context.fill();
    context.restore();
  }

  function drawSegmentLabel(canvas, context, i, dpr) {
    context.save();
    var width = canvas.width / dpr;
    var height = canvas.height / dpr;
    var spacing = Math.floor((height-width)/5);
    var larger = Math.floor((height-width)/4);
    var x = spacing;
    var y = Math.floor(width+ spacing + (i * larger));
    var fontSize = Math.floor(height / 30);
    context.font = fontSize + "pt Helvetica";
    context.fillStyle=colors[i];
    context.fillRect(x, y - larger/2, spacing, spacing);
    context.fillText( " = " + labels[i], x + spacing, y);
    context.restore();
  }

  canvas = document.getElementById("piechart");
  canvas.width = 750;
  canvas.height = 1000;
  canvas.style.width = "auto";
  canvas.style.height = "60vh";
  var context = canvas.getContext("2d");
  var dpr = (window.devicePixelRatio)?window.devicePixelRatio:1;
  context.scale(dpr,dpr);
  for (var i = 0; i < data.length; i++) {
    drawSegment(canvas, context, i, dpr);
    drawSegmentLabel(canvas, context, i, dpr);
  }


}])
.controller('AboutController', ['$scope', function($scope) {
  $scope.left = true;

  $scope.switch = function(bool) {
    $scope.left = bool;
  };
}])
.controller('ContactController', ['$scope', function($scope) {
  //filler
}])
.controller('ProjectsController', ['$scope', function($scope) {
  //filler
}])
.controller('DateController', ['$scope', '$filter', function($scope, $filter) {
  var today = new Date();
  $scope.year = $filter("date")(today,'yyyy') - 1995;
  if((parseInt($filter("date")(today,'M')) < 4) || (($filter("date")(today,'M') === "4" )&&(parseInt($filter("date")(today,'d')) < 13 )))
  {
    $scope.year = $scope.year - 1;
  }
}]);
