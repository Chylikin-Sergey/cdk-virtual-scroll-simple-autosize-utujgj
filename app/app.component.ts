import { HostListener } from '@angular/core';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  items = Array(100000)
    .fill(0)
    .map((_, i) => `${i}`);
  itemsCopy = this.items;
  onInput(event: Event) {
    const text: string = (event.target as HTMLInputElement).value;

    console.log(text);
    const filteredItems = this.itemsCopy.filter((value) => value === text);
    this.items = filteredItems.length ? filteredItems : this.itemsCopy;
  }
}

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
