import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { MenuComponent } from './menu/menu.component';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    host: {
        'class': 'sticky top-0 w-full z-20',
        'aria-controls': 'menu-container'
    },
    imports: [CommonModule, HamburgerComponent, MenuComponent, RouterLink, RouterLinkActive]
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
  }



}


