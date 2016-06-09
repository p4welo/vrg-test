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
            .removeClass("slideOutDown")
            .addClass("slideInUp");

    }

    function hideSpinner() {
        $('.spinner-wrapper')
            .removeClass("slideInUp")
            .addClass("slideOutDown");
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