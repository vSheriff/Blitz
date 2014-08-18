/**
 * Created by MuhammadRizky on 8/3/14.
 */

(function () {
    'use strict';

    // call back function of getting ajax data
    function getAjaxData(event) {
        // when the home button is clicked
        if(event.target.id === "buttonHome"){
            // load the content of the home page
            $("#panelContent").load("../src/homeAJAX.html #panelContent");

            // load the panel bottom
            $("#panelBottom").load("../src/homeAJAX.html #panelBottom");
        }
        // when the about button is clicked
        else if (event.target.id === "buttonAbout"){
            // load the content of the about page
            $("#panelContent").load("../src/aboutAJAX.html #panelContent");

            // load the panel bottom
            $("#panelBottom").load("../src/aboutAJAX.html #panelBottom");
        }
        // when the browse button is clicked
        else if (event.target.id === "buttonBrowse") {
            // load the content of the browse page
            $("#panelContent").load("../src/browseAJAX.html #panelContent");

            // load the panel bottom
            $("#panelBottom").load("../src/browseAJAX.html #panelBottom");
        }
        // when the account button is clicked
        else if (event.target.id === "buttonAccount") {
            // load the content of the account page
            $("#panelContent").load("../src/accountAJAX.html #panelContent");

            // load the panel bottom
            $("#panelBottom").load("../src/accountAJAX.html #panelBottom");
        }
        // when the account register is clicked
        else if (event.target.id === "buttonRegister") {
            // load the content of the register page
            $("#panelContent").load("../src/registerAJAX.html #panelContent");

            // load the panel bottom
            $("#panelBottom").load("../src/registerAJAX.html #panelBottom");
        }
        // when the social media button is clicked
        else if (event.target.id === "buttonSocialMedia") {
            // load the social media
            // will be further developed in the future
        }
    }

    // Register event handlers
    $("input").on('click', getAjaxData);
}());