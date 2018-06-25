"use strict";

console.log("App.js is running");

//JSX : Javascript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Luis Deras"
    ),
    React.createElement(
        "p",
        null,
        "This is a paragraph"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Hey "
        ),
        React.createElement(
            "li",
            null,
            "You "
        )
    )
);

var user = {};

var app = {
    title: "Avengers",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    if (e) e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        renderApp();
    }
};

function getLocation(location) {
    return location ? React.createElement(
        "p",
        null,
        "Location: ",
        location
    ) : undefined;
}

var templateUser = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var removeAll = function removeAll() {
    app.options = [];
    renderApp();
};

var numbers = [];
var renderApp = function renderApp() {

    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.title && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            "Options: ",
            app.options && app.options.length > 0 ? "Here are you12312312r2 options" : "No options"
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        ),
        React.createElement(
            "button",
            { onClick: removeAll },
            "222 All "
        ),
        React.createElement(
            "ol",
            null,
            numbers.map(function (number) {
                return React.createElement(
                    "li",
                    { key: number },
                    "Number: ",
                    number
                );
            })
        )
    );

    var appRoot = document.getElementById("app");
    ReactDOM.render(templateTwo, appRoot);
};

renderApp();
