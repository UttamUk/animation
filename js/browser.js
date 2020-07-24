"use strict";
$('#modal').modal('show');

setInterval(() => {
    info();
    // browserInfo2();
}, 1000);

const info = () => {
    const windowInfo = window.navigator;
    var ele = document.getElementById("batteryPerc");
    var btr = document.getElementById("btr");
    var charging = document.getElementById("charging");
    var speed = document.getElementById("speed");
    var network = document.getElementById("network");
    var network2 = document.getElementById("network2");
    // var plug = document.getElementsByClassName("plug1");
    windowInfo.getBattery()
        .then(res => {
            const batteryValue = (res.level * 100).toFixed(0);
            if (res.charging) {
                btr.style.left = "80px";
                charging.style.display = "block";
                // plug.style.fill ="#fff20d"
            } else {
                btr.style.left = "140px";
                charging.style.display = "none";
                // plug.classList.add("plug2");
                // name = "plug2";
                // arr = btr.className.split(" ");
                // if (arr.indexOf(name) == -1) {
                //     btr.className += " " + name;
                // }
            }
            if (batteryValue <= 49) {
                ele.style.backgroundColor = "red";
            } else if (batteryValue >= 49) {
                ele.style.backgroundColor = "#45ec69";
            } else if (batteryValue == 100) {
                ele.style.backgroundColor = "#121212";
            }
            ele.innerHTML = batteryValue + "%";
            ele.style.height = batteryValue + "%";
            // console.log("Battery Percentage: ", res.level * 100);
            // console.log("Battery charging status: ", res.charging);
        }).catch(err => {
            console.log(err);
        });

    if (windowInfo.connection.rtt !== 0) {
        network.style.display = "block";
        network2.style.display = "none";
        network.innerHTML = windowInfo.connection.effectiveType;
        speed.innerHTML = `${windowInfo.connection.rtt}`;
    } else {
        network2.style.display = "block";
        network.style.display = "none";
        speed.innerHTML = 'No net';
    }
    // console.log("App Info: ", windowInfo.appVersion);
    // console.log("connection downLink", windowInfo.connection.downlink);
    // console.log("connection type", windowInfo.connection.effectiveType);
    // console.log("connection rtt", windowInfo.connection.rtt);
    // const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    // // type: Returns the type of connection a device is using to communicate with the network. Includes: ‘bluetooth, cellular, ethernet, none, wifi, wimax, other, unknown’
    // console.table([
    //     {
    //         "connection downLink (mbps)": connection.downlink,
    //         "connection type": connection.effectiveType === "4g" ? connection.effectiveType : "Low Speed",
    //         "connection rtt": connection.rtt
    //     },
    // ]);


    // https://wicg.github.io/netinfo/#webidl-435807257
    // Table of effective connection types
    // ECT	Minimum RTT (ms)	Maximum downlink (Kbps)	Explanation
    // slow-2g	2000	50	The network is suited for small transfers only such as text-only pages.
    // 2g	1400	70	The network is suited for transfers of small images.
    // 3g	270	700	The network is suited for transfers of large assets such as high resolution images, audio, and SD video.
    // 4g	0	∞	The network is suited for HD video, real-time video, etc.
    // The above round-trip and bandwidth values are based on real user measurement observations:

    // slow-2g is the 66.6th percentile of 2G observations
    // 2g is the 50th percentile of 2G observations
    // 3g is the 50th percentile of 3G observations

    // var type = navigator.connection.type;
    // // Get an upper bound on the downlink speed of the first network hop
    // var max = navigator.connection.downlinkMax;

    // function changeHandler(e) {
    //     // Handle change to connection here.
    //     console.log(e);
    //     console.table([
    //         {
    //             "connection dtypeeeee": navigator.connection.type,
    //             "connection downLink (mbps)": e.currentTarget.downlink,
    //             "connection type": e.currentTarget.effectiveType === "4g" ? e.currentTarget.effectiveType + "High Speed" : "Low Speed",
    //             "connection rtt": e.currentTarget.rtt
    //         },
    //     ]);

    // }

    // Register for event changes.
    // navigator.connection.onchange = changeHandler;

    // Alternatively.
    // navigator.connection.addEventListener('change', changeHandler);

}


// browserInfo2 = () => {
//     const windowInfo = window.navigator;
//     console.log(windowInfo.onLine);

// }


$(document).ready(function ($) {
    $(document).on('submit', '#form', (event) => {
        event.preventDefault();
        var name = $("#name").val();
        if (name.length <= 7 ) {
            userName(name);
            $('#modal').modal('hide');    
            // alert("tada...");
        } else {
            alert("Max 7 characters");
        }
        console.log(name);
        
    });
});

// submit = () => {
//     var ele = document.getElementById("name");
//     var form = document.getElementById("form");
//     form.document.preventDefault()
//     form.addEventListener('click', function(event) {
//         event.preventDefault();
//         // manageState().validateState();
//         console.log(event);

//     });
//     console.log(ele);

// }

const userName = (name) => {
    var userName = document.getElementById("username");
    var hidename = document.getElementById("hidename");
    var val = name.split("");
    var newValues = [];
    val.map((items) => {
        let item = `<span>${items}</span>`;
        newValues.push(item);
    });
    userName.innerHTML = newValues.join("");
    hidename.innerHTML = name;

}


var typing = document.getElementById("typing");
var cursorElement = document.getElementById("mouse1");

typing.addEventListener("mousemove", (e) => {
    e.preventDefault();
    var x = e.clientX - 1 / 14;
    var y = e.clientY - 1 / 14;

    cursorElement.style.left = `${x}px`;
    cursorElement.style.top = `${y}px`;
});