import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { DragService } from '../services/drag.service';

@Directive({
  selector: '[appDropTarget]'
})
export class DropTargetDirective {

  constructor(private dragService: DragService) { }

  @Input()
  set myDropTarget(options: DropTargetOptions) {
    if (options) {
      this.options = options;
    }
  }

  @Output('myDrop') drop = new EventEmitter();

  private options: DropTargetOptions = {};

  @HostListener('dragenter', ['$event'])
  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    const { zone = 'zone' } = this.options;

    if (this.dragService.accepts(zone)) {
      event.preventDefault();
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    const data = JSON.parse(event.dataTransfer.getData('Text'));
    // console.log('onDrop log: ', event.appDropTarget);

    this.drop.next(data);
  }
}

export interface DropTargetOptions {
  zone?: string;
}
