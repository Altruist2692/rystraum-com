const { DateTime } = require('luxon')
const CleanCSS = require('clean-css')

module.exports = {
    dateToFormat: function(date, format) {
        return DateTime.fromJSDate(date, { zone: 'Asia/Manila' }).toFormat(
            String(format)
        )
    },

    dateToISO: function(date) {
        return DateTime.fromJSDate(date, { zone: 'Asia/Manila' }).toISO({
            includeOffset: false,
            suppressMilliseconds: true
        })
    },

    cssmin: function(css) {
        return new CleanCSS({}).minify(css).styles
    },

    categoryFilter: function(collection, category) {
        if (!category) return collection;
        return collection.filter(item => item.data.category === category);
    },

    categoriesFilter: function(collection, categories) {
        if (!categories) return collection;
        return collection.filter(item => categories.includes(item.data.category));
    }
}
