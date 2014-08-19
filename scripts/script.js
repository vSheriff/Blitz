/**
 * Created by Muhammad Rizky on 8/3/14.
 */

$(document).ready(function () {
    'use strict';

    // when the user clicks something
    $("input").on('click', function (event) {
        // when the home button is clicked
        if (event.target.id === "buttonHome") {
            // load the content of the home page
            $("#panelContent").load("../AJAX/home.html #panelContent");
        }
        // when the about button is clicked
        else if (event.target.id === "buttonAbout") {
            // load the content of the about page
            $("#panelContent").load("../AJAX/about.html #panelContent");
        }
        // when the browse button is clicked
        else if (event.target.id === "buttonBrowse") {
            // load the content of the browse page
            $("#panelContent").load("../AJAX/browse.html #panelContent");
        }
        // when the account button is clicked
        else if (event.target.id === "buttonAccount") {
            // load the content of the account page
            $("#panelContent").load("../AJAX/account.html #panelContent");
        }
        // when the account register is clicked
        else if (event.target.id === "buttonRegister") {
            // load the content of the register page
            $("#panelContent").load("../AJAX/register.html #panelContent");
        }
        // when the social media button is clicked
        else if (event.target.id === "buttonSocialMedia") {
            // load the social media
            // will be further developed in the future
        }
        // when the user clicked the browse text
        else if (event.target.id === "textSearch") {
            $(textSearch).val("");
        }
        // when the user clicked the search button
        else if (event.target.id === "buttonSearch") {
            // move to search the result
            // will be developed much further
        }
        // when the user clicks the essay
        else if (event.target.id === "essayPage") {
            // load the pdf essay to the content panel
        }
    });

    // when the user presses keyboard keys
    $("input").keypress(function (event) {
        if (event.target.id === textSearch) {
            if (event.which == 13) {
                if ($("textSearch").val() != "") {
                    // search the keyword
                }
            }
        }
    });
});