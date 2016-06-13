var dash_button = require('node-dash-button');
var dash = dash_button("00:7f:28:25:fc:eb"); //address from step above
dash.on("detected", function (){
    console.log("omg found");
});