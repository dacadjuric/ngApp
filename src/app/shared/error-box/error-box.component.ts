import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'error-box',
    templateUrl: './error-box.component.html',
    styleUrls: ['./error-box.component.scss']
})
export class ErrorBoxComponent {
    @Input() errorMsg:string;
    @Output() close: EventEmitter<void> = new EventEmitter;

    onClose(){
        this.close.emit();
    }

}