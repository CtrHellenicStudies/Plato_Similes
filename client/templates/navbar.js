if (Meteor.isClient) {
    Template.navBar.helpers({
        activeIfTemplateIs: function (template) {
            var currentRoute = Router.current();
            return currentRoute &&
            template === currentRoute.lookupTemplate() ? 'active' : '';
        },
        activeIfTemplateInChart: function () {
            var currentRoute = Router.current();
            var this_template = currentRoute.lookupTemplate();
            if(currentRoute && this_template.indexOf("Chart") != -1 && this_template != "ChartA") {
                return "active";
            } else {
                return "";
            }
        },
        activeIfTemplateInAppendix: function () {
            var currentRoute = Router.current();
            var this_template = currentRoute.lookupTemplate();
            if(currentRoute && this_template.indexOf("Appendix") != -1) {
                return "active";
            } else {
                return "";
            }
        }
    });
}
