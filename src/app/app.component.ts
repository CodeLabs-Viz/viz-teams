import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    // this.authService.initAuthListener();
  }

  onDrop(data: any) {
    alert(`dropped: ${data}`);
  }

}
