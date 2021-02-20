import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Based on <b><a href="https://akveo.github.io/ngx-admin/" target="_blank">ngx-admin</a></b> 2019
    </span>
   
  `,
})
export class FooterComponent {
}
