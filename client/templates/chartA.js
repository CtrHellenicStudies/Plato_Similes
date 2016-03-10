Template.ChartA.events({
    "submit #search_form": function(event) {
        event.preventDefault();
        var search_term = event.target.search_term.value;
        var search_field = event.target.search_field.value;
        var search = {};
        search[search_field] = new RegExp(search_term);
        if(!_.isEmpty(search_term) && search_field != 'none') {
            Pages.set("filters", search);
        }
    },
    "submit #sort_form": function(event) {
        event.preventDefault();
        var sortby = event.target.sortby.value;
        var direction = event.target.ascdesc.value;
        var sort = {};
        sort[sortby] = parseInt(direction);
        if(!_.isEmpty(sort) && sortby != 'none') {
            Pages.set("sort", sort);
        }
    },
    "click #clear_button": function(event, template) {
        template.find("#search_term").value = "";
        template.find("#search_field").value = "none";
        Pages.set("filters", {});
    }
});