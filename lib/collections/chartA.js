Meteor.startup(function () {
    var fields = ["dialogue_passages", "tenor", "prothesis", "vehicle", "speaker"];
    ChartA = new Meteor.Collection("ChartA");
    Pages = new Meteor.Pagination(ChartA,
        {
            availableSettings: {filters: true, sort: true},
            dataMargin: 5,
            perPage: 30,
            sort: {
                dialog_passages: 1
            },
            table: {
                class: "table",
                fields: fields,
                wrapper: "table-wrapper",
                header: ["Dialogue Passages","Tenor","Prothesis","Vehicle","Speaker"]
            }
        });
});



