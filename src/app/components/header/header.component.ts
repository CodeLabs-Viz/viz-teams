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



  constructor() {
  }

  ngOnInit() {
  }

  checkExtension (val) {
    let fileList = val.srcElement.files;
    let fileName = fileList[0].name.split('.');
    let extension = fileName[1];
    if (extension === 'csv') {
      this.valid = "Valid"
      this.validation = "green";
    } else {
      this.valid = "Invalid";
      this.validation = "red";
    }
  }


  openUpload(): void {
    if (this.detectIE()) {
      document.getElementById('srcfile').click();
    }
  }

  detectIE() {
    const ua = window.navigator.userAgent;

    const msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    const trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      const rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    const edge = ua.indexOf('Edge/');
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
  }
}
