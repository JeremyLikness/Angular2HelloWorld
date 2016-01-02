import {Component} from 'angular2/core';

interface ICourse {
    name: string;
    instructor: string;
}

@Component({
    selector: "courses",
    templateUrl: "courses.html"
})
export class Courses {
    
    courses: ICourse[];
    selectedCourse: ICourse;
    
    constructor() {
        this.courses = [{
            name: "Angular 1.x",
            instructor: "Jeremy Likness"
        }, {
            name: "Angular 2.0",
            instructor: "Jeremy Likness"
        }, {
            name: "Universal Windows Apps",
            instructor: "Jeff Prosise"
        }];
        this.selectedCourse = this.courses[0];
    }
    
    onClick(course: ICourse): void {
        this.selectedCourse = course;
    }
    
    onEnter(value: string): void {
        window.alert("You entered: " + value);
    }
}