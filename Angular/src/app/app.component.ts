import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  initialEmployee = {
    ID: 1,
    FirstName: 'John',
    LastName: 'Heart',
    Position: 'CEO',
    BirthDate: '1964/03/16',
    HireDate: '1995/01/15',
    Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
    Address: '351 S Hill St., Los Angeles, CA',
    Phone: '360-684-1334',
    Email: 'jheart@dx-email.com',
  };

  employee = { ...this.initialEmployee };

  output: string[] = ['Output:'];

  suppressFieldChangeEvent = false;

  onFieldDataChanged(e: any) {
    if (!this.suppressFieldChangeEvent) {
      this.output.push(e.value);
    }
  }

  resetFormAndOutput() {
    this.suppressFieldChangeEvent = true;
    this.employee = { ...this.initialEmployee };
    this.output = ['Output:'];
    setTimeout(() => {
      this.suppressFieldChangeEvent = false;
    }, 0);
  }
}
