function response(){
    var n = document.getElementById("in").value;
    var r = new XMLHttpRequest();
    r.open('GET','https://restcountries.eu/rest/v2/all',true);
    r.send();
    r.onload=function(){
      var data = JSON.parse(this.response);
      for(var i in data)
      {
          console.log(data[i].name);
          let lat=data[i].latlng[0];
          let lng=data[i].latlng[1];
          let x=new XMLHttpRequest();
          x.open('GET',"http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid=1df01ea2c0ed525b7685b8d43188acfd",true);
          x.send();
          x.onload=function()
          {
              var weather = JSON.parse(this.response);
              console.log(weather.main.temp+"\u00B0");
          }
      }
  }
}