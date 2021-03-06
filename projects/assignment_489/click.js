document.getElementById('container').onclick = function (e) {
  // clean svg object
  d3.selectAll('svg').remove();

  var target = e.target;
  if (target.id.substr(0, 6) === '2020-0') {
    var body = document.getElementsByTagName('body')[0];
    var js = document.createElement('script');
    js.type = 'text/javascript';

    var nextElementId = target.id.substr(6);
    // console.log(nextElementId);
    js.src = 'chart' + nextElementId + '.js';
    body.appendChild(js);
  }
};
