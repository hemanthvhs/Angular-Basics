import{ Directive, OnInit,ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector : '[AppHoverHighlightDirective]'
})

export class HoverHighlightDirective implements OnInit{

    @HostBinding('style.color') Color :string;
    constructor(private elementRef : ElementRef,private renderer : Renderer2){
    
    }

    ngOnInit(){
        this.renderer.setStyle(this.elementRef.nativeElement,'color','blue');
        //this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','blue');      
    }

    @HostListener('mouseenter') mouseover(){
        //this.renderer.setStyle(this.elementRef.nativeElement,'color','red');  using renderer concept 
        this.Color = 'red';   /* Using HostBinding */
    }

    @HostListener('mouseleave') mouseleave(){
        this.renderer.setStyle(this.elementRef.nativeElement,'color','green');

    }
}