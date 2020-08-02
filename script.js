function translate(data, key) {
    if (key in data) {
        return data[key];
    }
    else
        return document.getElementById("result").innerText = `Sorry the word you search was not found. Please check the word and try again`

}







// function getValues(obj, key) {
//     var objects = [];
//     for (var i in obj) {
//         if (!obj.hasOwnProperty(i)) continue;
//         if (typeof obj[i] == 'object') {
//             objects = objects.concat(getValues(obj[i], key));
//         } else if (i == key) {
//             objects.push(obj[i]);
//         }
//         else
//             document.getElementById("result").innerHTML = "Sorry the word you search was not found. Please check the word and try again";

//     }
//     return objects;
// }

let form = document.getElementById('form1');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", "/dictionary.json", true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {

            let data = JSON.parse(this.responseText),

                username = form.querySelector("input[type=text]").value.toLowerCase(),
                // resultat = getValues(data, username);
                resultat = translate(data, username);
            // console.log(data)
            // console.log(resultat);
            // console.log(username);
            resulthtml = document.getElementById("result").style;
            resulthtml.padding = "20px";
            resulthtml.color = "#fff";
            document.getElementById("result").innerHTML = resultat[0];



        }


    }
    rawFile.send(null);
});