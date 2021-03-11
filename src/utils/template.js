import Handlebars from "handlebars";
import moment from "moment";
import { underscoreToCapitalize } from "./transformers";

export const getChild = (parent, child) => {
    return parent[child];
}

const getDefaultData = (type) => {
    switch (type) {
        case "skills":
            return [
                {
                    title: "Reading Comprehension",
                    rating: 4
                },
                {
                    title: "Relationship building",
                    rating: 4
                }
            ];

        case "experience":
            return [
                {
                    startDate: new Date(),
                    endDate: null,
                    current: true,
                    title: "Senior Representative Sales",
                    employer: "Mac Damien",
                    city: "New York",
                    state: "United States",
                    description: ["I shipped different packages to production", "I scaled different company product and build it up"]
                },
                {
                    startDate: new Date(),
                    endDate: new Date(),
                    current: false,
                    title: "Assistant Marketing Manager",
                    employer: "Louie Gee",
                    city: "California",
                    state: "United States",
                    description: ["I shipped different packages to production", "I scaled different company product and build it up"]
                },
                {
                    startDate: new Date(),
                    endDate: new Date(),
                    current: false,
                    title: "Assistant Marketing Manager",
                    employer: "Louie Gee",
                    city: "California",
                    state: "United States",
                    description: ["I shipped different packages to production", "I scaled different company product and build it up"]
                }
            ];

        case "education":
            return [
                {
                    startDate: new Date(),
                    endDate: null,
                    current: true,
                    degree: "bachelor_of_science",
                    fieldOfStudy: "Computer Science",
                    name: "Cambridge",
                    location: "United States",
                },
                {
                    startDate: new Date(),
                    endDate: new Date(),
                    current: false,
                    degree: "bachelor_of_science",
                    fieldOfStudy: "Computer Science",
                    name: "Havard",
                    location: "United States",
                },
            ]
        default:
            return []
    }
}

const registerHelpers = () => {
    Handlebars.registerHelper("getChildByKey", (parent, key) => {
        return parent[key]
    })

    Handlebars.registerHelper("useDefaultIfNoValue", (value, defaultValue, stripDefault = false) => {
        if (stripDefault) {
            return value && value.length ? value : ""
        }
        return value && value.length ? value : defaultValue;
    });

    Handlebars.registerHelper("useDefaultIfNoArrayValue", (array, defaultArray = "skills", stripDefault = false) => {
        if (stripDefault) {
            return array && array.length ? array : []
        }
        return array && array.length ? array : getDefaultData(defaultArray);
    });

    Handlebars.registerHelper("formatDate", (date, format, defaultsTo = "?") => {
        if (!date) return defaultsTo;
        return moment(date).format(format);
    })

    Handlebars.registerHelper("valueGreaterThan", (value, greaterThan) => value > greaterThan);
    Handlebars.registerHelper("valueGreaterThanOrEquals", (value, greaterThan) => value >= greaterThan);

    Handlebars.registerHelper("underscoreToString", value => underscoreToCapitalize(value))
    Handlebars.registerHelper("ratingsToPercent", rating => (rating * 20) + "%")
}

export const compileToParsableHTML = (templateString = "", values = {}) => {
    registerHelpers()
    const template = Handlebars.compile(templateString);
    return template(values);
}