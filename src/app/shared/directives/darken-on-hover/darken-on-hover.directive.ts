import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective { 

    @Input() brightness = '70%';

    constructor(
        private elmtn: ElementRef,
        private render: Renderer
    ) {}

    @HostListener('mouseover')
    darkeOn() {
        this.render.setElementStyle(this.elmtn.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    darkeOff() {
        this.render.setElementStyle(this.elmtn.nativeElement, 'filter', 'brightness(100%)');
    }
}