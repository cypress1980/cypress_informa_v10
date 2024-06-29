const report = require("multiple-cucumber-html-reporter");

let date = new Date();

let runDateTime = date.toLocaleDateString("en-US", { timeZone: "America/Chicago" }) + "  " + date.toLocaleTimeString("en-US", { timeZone: "America/Chicago" });

const args = process.argv.toString().split(",");

console.log(args);

//let environment = args[2]; //

//console.log("environment: " + environment);

//let test_suite = args[4];

//console.log("test_suite: " + test_suite);

// let browser = args[6];

// console.log("browser:" + browser);



report.generate({

    jsonDir: ".tmp/cucumber-json",   // ** Path of .json file **//

    reportPath: ".tmp/report",       // ** Path of .html file **//

    displayDuration: true,

    useCDN: true,

    pageTitle: "Ambetter Member Regression",

    reportName: `Ambetter Member Regression - ${runDateTime}`,

    metadata: {

        app: {

            name: "Ambetter Member Portal",

            version: "1",

        },

        device: "Gitlab Runner",

        platform: {

            name: "linux",

        }

    },

    customData: {

        title: "Run info",

        data: [

            { label: "Project:", value: "WellCare Portal" },

            { label: "Execution Start Time", value: `${runDateTime}` },
        ],

    }

});