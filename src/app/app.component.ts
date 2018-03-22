import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  checkExtension = function (val) {
    this.fileList = val.srcElement.files;
    this.fileName = this.fileList[0].name.split('.');
    this.extension = this.fileName[1];
    if (this.extension === 'csv') {
      this.valid = "Valid";
      this.validation = "green";
    } else {
      this.valid = "Invalid";
      this.validation = "red";
    }
  }
}
