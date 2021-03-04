import Handlebars from "handlebars";

export const getChild = (parent, child) => {
    return parent[child];
}

const registerHelpers = () => {
    Handlebars.registerHelper("getChildByKey", (parent, key) => {
        return parent[key]
    })

    Handlebars.registerHelper("useDefaultIfNoValue", (value, defaultValue) => {
        return value && value.length ? value : defaultValue;
    })
}

export const compileToParsableHTML = (templateString = "", values = {}) => {
    registerHelpers()
    const template = Handlebars.compile(templateString);
    return template(values);
}