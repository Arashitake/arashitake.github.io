export const requestWeather = () => {
  let xhr = new XMLHttpRequest();
  let weatherUrl = "http://www.weather.com.cn/data/cityinfo/101280106";

  xhr.open("get", weatherUrl);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.response);
      return xhr.response;
    }
  };
};
