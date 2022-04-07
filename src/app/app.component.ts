import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(private httpClient: HttpClient) {}

  public ngOnInit(): void {
    for (let index = 0; index < 10; index++) {
      this.httpClient.get('https://www.boredapi.com/api/activity').toPromise()
      .then((response) => {
        // console.log(response);
      });
    }
  }
}
