(function ($, Application) {
    "use strict";

    Application.load = {
        data: loadData,
        template: loadTemplate
    };

    Application.spinner = {
        show: showSpinner,
        hide: hideSpinner
    };

    function showSpinner() {
        $('.spinner-wrapper')
            .removeClass("hideDown")
            .addClass("showUp");

    }

    function hideSpinner() {
        $('.spinner-wrapper')
            .removeClass("showUp")
            .addClass("hideDown");
    }

    function loadData(dataUrl) {
        return $.getJSON(
            dataUrl
        );
    }

    function loadTemplate(templatePath, callback) {
        return $.get(
            templatePath,
            callback
        );
    }

})(jQuery, window.app || (window.app = {}));