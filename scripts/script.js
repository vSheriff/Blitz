/**
 * Created by Muhammad Rizky on 8/3/14.
 */

$(document).ready(function () {
    'use strict';

    /*
     * MVC structure
     */
    var model = {
        // save method, save state into local storage
        save: function (event) {
            // for future development
        }
    };
    var view = {
        // show stuff to the user
        loadAjaxContent: function (event) {
            var source = event.target.id.replace("button", "").replace("text", "").toLowerCase();
            $("#panelContent").load("../AJAX/" + source + ".html #panelContent");
        },
        clearTextSearch: function (event) {
            $(textSearch).val("");
        }
    };
    var controller = {
        click: function (event) {
            // clear the text search
            if (event.target.id === "textSearch") {
                view.clearTextSearch(event);
            }

            // save any important stuff
            model.save(event);

            // load the ajax content to the page
            view.loadAjaxContent(event);
        },
        keypress: function (event) {
            if (event.target.id === textSearch) {
                if (event.which == 13) {
                    if ($("textSearch").val() != "") {
                        // search the keyword
                    }
                }
            }
        }
    };

    // adding event handler
    $("input").on('click', controller.click).keypress(controller.keypress);
});