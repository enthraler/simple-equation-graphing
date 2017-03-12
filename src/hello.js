import $ from 'jquery';
import './hello.less';

export default class Hello {
    constructor(environment) {
        this.header = $('<h1>').appendTo(environment.container);
        this.environment = environment;
    }

    render(authorData) {
        var greeting = `Hello ${authorData.name}, I am an AMD JS Module compiled with Webpack and Babel!`;
        this.header.text(greeting);
        this.environment.requestHeightChange();
    }
}
