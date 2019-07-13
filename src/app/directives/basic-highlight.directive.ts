import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector : '[AppBasicHighlightDirective]'

})


export class BasicHighlightDirective implements OnInit{

    constructor(private elementRef : ElementRef)  // going to get the element or selector html details where it's been implemented
    {

    }

    ngOnInit()
    {
        this.elementRef.nativeElement.style.backgroundColor ="lightsteelblue" ;
    }

}