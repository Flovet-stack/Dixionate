// $("document").ready(function () {
//     // $(".containerorigin").css(display) = "none";
//     $("body").css("display") = "none";
// });

// $(document).ready(function () {
//     // $(".containerorigin").css(display) = "none";
//     $("preload").css("display") = "none";
// });


$(document).ready(function() {
    window.onload = function () {
    $('.preload').fadeOut(500, function(){ $('.preload').remove(); } );
    }
    });






function translate(data, key) {
    if (key in data) {
        return data[key];

    }
    else
        return document.getElementById("result").innerHTMl = ['Ooooooooopsss! Sorry the word you search was not found. Please check the word and try again!'];
    // return 'Sorry the word you search was not found. Please check the word and try again'
    //  console.log(typeof(data[key]))


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
            // document.getElementById("result").innerHTML = concat(resultat([0])) ;
            let search = document.querySelector(".search").style.height = "0";
            let footer = document.querySelector("#footer").style;
            footer.display = "none";
            // footer.margin = "200px 0 0 0";
            // footer.position = "absolute"
            let display = document.getElementById("result").innerHTML = '<h1 style="font-size: 18px; color: #fff; margin-bottom: 5px; border-bottom: 1px solid #f25f5c";>MEANING</h1> ' + resultat[0];



        }


    }
    rawFile.send(null);
});