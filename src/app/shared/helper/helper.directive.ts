import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appHelper]'
})
export class HelperDirective{

    constructor(public viewContRef: ViewContainerRef){}
}