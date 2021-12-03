// Code for marking specific words inside web page using mark.js


//Array of words to be highlighted
let selectWords = ["amanowicz", "ruby", "Tomasz"];

//Get the document by id="highlight" inside <body> tag
let instance = new Mark(document.querySelector("#highlight"));

        instance.mark(selectWords, {
            //"element": "span",
            accuracy: {
                value: "partially",
                limiters: [".", ",", "!"]
            },
            separateWordSearch: false,
            debug: true,
            diacritics: true,
        });