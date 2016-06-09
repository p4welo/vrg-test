(function ($, Application, mustache, _) {
    "use strict";

    $.when(
        Application.load.data('http://jsonplaceholder.typicode.com/posts'),
        Application.load.template('templates/postList.tpl'),
        Application.load.template('templates/postAccordion.tpl')
    ).then(renderTemplates);

    function renderTemplates(postData, postListTpl, accordionTpl) {
        var posts = postData[0] || [];
        renderList(posts, postListTpl[0]);
        renderAccordion(posts, accordionTpl[0]);

        Application.spinner.hide();

        function renderList(items, template) {
            var renderedPostList = mustache.render(template, {
                items: items
            });
            $('#post-list-content').html(renderedPostList);
        }

        function renderAccordion(items, template) {
            var groupedPosts = _.groupBy(items, 'userId');
            var users = Object
                .keys(groupedPosts)
                .map(function (id) {
                    return {
                        id: id,
                        posts: groupedPosts[id]
                    }
                });
            var renderedAccordion = mustache.render(template, {
                users: users
            });

            $('#post-accordion-content').html(renderedAccordion);
            attachAccordionEvents();

            function attachAccordionEvents() {
                $('.user-title').click(function () {
                    var currentElement = $(this);
                    var parentPanel = $(currentElement.parents('.panel-accordion')[0]);
                    var currentContent = parentPanel.find('.panel-body');

                    if (parentPanel.hasClass('opened')) {
                        parentPanel.removeClass('opened');
                        currentContent.slideUp();
                    }
                    else {
                        $('.panel-accordion').removeClass('opened');
                        $('.panel-accordion .panel-body').slideUp();
                        parentPanel.addClass('opened');
                        currentContent.slideDown();
                    }
                });
            }
        }
    }

})(jQuery, window.app, Mustache, _);