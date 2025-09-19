const city = {
    "Ahmedabad" : 30,
    "Baroda" : 25 ,
    "Surat" : 35,
    "Kutch" : 27
}

const give_weather = () => {
    var name = document.getElementById('city').value
    document.getElementById('ans').innerHTML = "The temperature in " + name + " is " + city[name] + "°C"
}