

$(document).ready(function () {
    window.onload = function () {
        $('.preload').fadeOut(500, function () { $('.preload').hide(); });
    }
});
// $("form").click(function (e) {
//     e.preventDefault();


function translate(data, key) {
    if (key in data) {
        return data[key];

    }
    else
        return document.getElementById("result").innerHTMl = ['Ooooooooopsss! Sorry the word you search was not found. Please check the word and try again!'];

}

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
            resulthtml = document.getElementById("result").style;
            resulthtml.padding = "20px";
            resulthtml.color = "#fff";
            let search = document.querySelector(".search").style.height = "0";
            let footer = document.querySelector("#footer").style;
            // footer.display = "none";
            $('#footer').fadeOut(500, function () { $('#footer').remove(); });

            let display = document.getElementById("result").innerHTML = '<h1 style="font-size: 18px; color: #fff; margin-bottom: 5px; border-bottom: 1px solid #f25f5c";>MEANING</h1> ' + resultat[0];


        };

        $.ajax({
            url: '/dictionary.json',
            type: 'POST',
            datatype: 'json',

            beforeSend: function () {
                $(".preload").css("opacity", "0.4").show();
            },
            complete: function () {
                $(".preload").hide();
            },
            success: function () {
                // $(".preloader").show();
            }
        });



    };
    rawFile.send(null);


});
// rawFile.send(null);

// });



    // rawFile.onreadystatechange = function () {
    //     if (rawFile.readyState === 4 && rawFile.status == "200") {

    //         let data = JSON.parse(this.responseText),

    //             username = form.querySelector("input[type=text]").value.toLowerCase(),
    //             // resultat = getValues(data, username);
    //             resultat = translate(data, username);
    //         resulthtml = document.getElementById("result").style;
    //         resulthtml.padding = "20px";
    //         resulthtml.color = "#fff";
    //         let search = document.querySelector(".search").style.height = "0";
    //         let footer = document.querySelector("#footer").style;
    //         footer.display = "none";
    //         let display = document.getElementById("result").innerHTML = '<h1 style="font-size: 18px; color: #fff; margin-bottom: 5px; border-bottom: 1px solid #f25f5c";>MEANING</h1> ' + resultat[0];




        //     }


        // }


        // rawFile.send(null);
//     });

// });













//     // function getValues(obj, key) {
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


            // $.ajax({
            //     url: '/dictionary.json',
            //     type: 'GET',
            //     datatype: 'json',

            //     beforeSend: function () {
            //         $(".preload").show();
            //     },
            //     complete: function () {
            //         $(".preload").hide();
            //     },
            //     success: function () {
            //         // $(".preloader").show();
            //     }
            // });