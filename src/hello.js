import $ from 'jquery';

export default class Hello {
    constructor(config) {
        this.header = $('<h1>').appendTo(config.container);
    }

    render(authorData) {
        var greeting = `Hello ${authorData.name}, I am an AMD JS Module compiled with Webpack and Babel!`;
        this.header.text(greeting);
    }
}
