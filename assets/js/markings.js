// Code for marking specific words inside web page using mark.js


//Array of words to be highlighted
let iTSkillsToHighlight = ["python", "django", "react", "hooks", "testing library", "postman", "mongo", "node", "github", "express", "styled component", "visual studio code", "figma", "sass","jquery", "javascript", "computational", "thinking", "sql", "c++", "SDK", "DotNet", "angular", "git bash", "visual studio"];

let softSkills = ["communicate", "lead", "train", "implement", "target", "motivate", "initiative", "schedule", "performance", "coach", "effective" ]

//Get the document by class="highlight" inside <section> tag ....
let instanceOne = new Mark(document.querySelector(".highlight-one"));
let instanceTwo = new Mark(document.querySelector(".highlight-two"));

        instanceOne.mark(iTSkillsToHighlight, {
            accuracy: {
                value: "complementary",
                limiters: [".", ",", "!"]
            },
            separateWordSearch: false,
            debug: true,
            diacritics: true,
        });


        instanceTwo.mark(softSkills, {
            accuracy: {
                value: "complementary",
                limiters: [".", ",", "!"]
            },
            separateWordSearch: false,
            debug: true,
            diacritics: true,
        });
