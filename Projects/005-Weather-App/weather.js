const form = document.querySelector("section.top-banner form");
const input = document.querySelector(".top-banner input")
const msg = document.querySelector("span.msg")
const list = document.querySelector(".ajax-section.cities")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    getWeatherDataFromApi();
});

const getWeatherDataFromApi =  () => {
    // alert("http request has gone");
    // input.value = "";


    let apikey = DescryptStringAES(localStorage.getItem("apikey"))
}