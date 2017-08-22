import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socialLinks: Social[];
  copyStart: number;
  copyText: string;
  constructor() { }

  ngOnInit() {
    this.copyStart = 2017;
    this.socialLinks = [
      {
        name: 'Twitter',
        url:  'https://twitter.com/US_Ignite',
        faclass: 'twitter'
      },
      {
        name: 'Linked-In',
        url:  'https://www.linkedin.com/company/us-ignite',
        faclass: 'linkedin-square'
      },
      {
        name: 'Facebook',
        url:  'https://www.facebook.com/USIgnite',
        faclass: 'facebook-official'
      },
      {
        name: 'Google Plus',
        url:  'https://plus.google.com/115026873083967953743',
        faclass: 'google-plus-square'
      },
      {
        name: 'YouTube',
        url:  'https://www.youtube.com/user/USIgnite1',
        faclass: 'youtube-square'
      },
      {
        name: 'info@us-ignite.org',
        url:  'mailto:info@us-ignite.org',
        faclass: 'envelope'
      }
    ];
    this.copyText = this.copyYear();
  }
  copyYear(): string {
    let copyText: string = String(this.copyStart);
    const today = new Date();
    const currentYear: number = today.getFullYear();
    if (currentYear > this.copyStart) {
      copyText += '-' + String(currentYear);
    }
    return copyText;
  }

}

interface Social {
  name: string; // name of network.
  url: string; // url to page.
  faclass: string; // font awesome class.
}
