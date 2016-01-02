import {Component} from 'angular2/core';
import {Courses} from './Courses';

@Component({
    selector: "hello-world",
    template: "<h1>Hello, Angular World!</h1><courses></courses>",
    directives: [Courses]
})
export class AppComponent {}