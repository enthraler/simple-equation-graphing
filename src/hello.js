import $ from 'jquery';
import './hello.less';

export default class Hello {
    constructor(config) {
        this.header = $('<h1>').appendTo(config.container);
        this.environment = config.environment;
    }

    render(authorData) {
        var greeting = `Hello ${authorData.name}, I am an AMD JS Module compiled with Webpack and Babel!`;
        this.header.text(greeting);
        this.environment.requestHeightChange();
    }
}
