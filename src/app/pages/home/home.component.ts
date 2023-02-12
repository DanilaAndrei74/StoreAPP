import { Component } from '@angular/core';
import { Constants } from 'src/app/data/Constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  TestRequest()
  {
    console.log(Constants.JWT);
  }
}
