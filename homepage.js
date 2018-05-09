
// These are options to be passed into the list.
// The 'item' property is the HTML template for each list item that is going to be in the list.
// The classes assigned to the elements in the template are the properties of each list item.
// By default, the items are going to be added to the HTML element that has the class "list" (See HTML). You can change this by changing the value of the property "listClass" in the options.

var options = {
    item: '<li><h4 class="name"></h4><p</li>',
    // listClass: 'theList'
};

// This are the items that are going to be added in the list.
// Note that the property names are the same as the class names in the template above.
var values = [
    { name: 'test'}
    , { name: 'Jonas'}
    , { name: 'Bob'}
    , { name: 'Hulk'}
    , { name: 'Daniel'}
    , { name: 'Susan'}
];

// Creating the list object
// Now the values are passed in as the third parameter.
var hackerList = new List('hacker-list', options, values);

var tweets = ["20","994113150789279744"];

twttr.ready(
    function (twttr) {
        twttr.widgets.createTweet(
            "20",
            document.getElementById('container'),
            {
                theme: 'dark'
            }
            );
    }
);

twttr.ready(
    function (twttr) {
        twttr.widgets.createTweet(
            "994113150789279744",
            document.getElementById('container2'),
            {
            theme: 'dark'
            }
        );
    }
);