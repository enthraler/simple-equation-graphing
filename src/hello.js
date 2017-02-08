import $ from 'jquery';

class Hello {
    constructor(config) {
        this.container = $(config.container);
    }

    render(authorData) {
        var greeting = `Hello ${authorData.name}, I am an AMD JS Module compiled with Webpack and Babel!`;
        this.container.text(greeting);
    }
}

// Please note, using es6 `export default ...` will not work with babel/webpack exporting an AMD module.
// See http://stackoverflow.com/a/33506169/180995
// So we use `module.exports = ...` directly.
module.exports = Hello;
