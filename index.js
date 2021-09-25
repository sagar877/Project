let cities = [
    "San Francisco, United States of America",
    "California, United States of America",
    "Amsterdam, Netherlands",
    "Manchester, United Kingdom",
    "Copenhagen, Denmark",
    "New York, United States of America",
    "Montreal, Canada",
    "Prague, Czech Republic",
    "Tel Aviv, Israel",
    "Porto, Portugal",
    "Tokyo, Japan"
]

let ul = document.getElementById("searchResult");

ul.innerHTML = "";
  
findCity = () => {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchResult");
    ul.innerHTML = "";
    if (filter === "") return;
    for (i = 0; i < cities.length; i++) {
        txtValue = cities[i];
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li = document.createElement("li");
            li.textContent = cities[i];
            ul.appendChild(li)
        }
    }
}