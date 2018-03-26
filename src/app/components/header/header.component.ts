import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'app';
  valid = '';
  validation = '';


  constructor() { }

  ngOnInit() {
  }

  checkExtension (val) {
    var fileList = val.srcElement.files;
    var fileName = fileList[0].name.split('.');
    var extension = fileName[1];
    if (extension === 'csv') {
      this.valid = "Valid"
      this.validation = "green";
    } else {
      this.valid = "Invalid";
      this.validation = "red";
    }
  }

}
