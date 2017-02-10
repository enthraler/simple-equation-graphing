import $ from 'jquery';

export default class Hello {
    constructor(config) {
        this.container = $(config.container);
    }

    render(authorData) {
        var greeting = `Hello ${authorData.name}, I am an AMD JS Module compiled with Webpack and Babel!`;
        this.container.text(greeting);
    }
}
