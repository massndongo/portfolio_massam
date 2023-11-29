import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { MenuComponent } from './menu/menu.component';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    host: {
        'class': 'sticky top-0 w-full z-20'
    },
    imports: [CommonModule, HamburgerComponent, MenuComponent, RouterLink, RouterLinkActive]
})
export class NavbarComponent implements OnInit, OnDestroy {

  token: any


  currencyForm = new FormGroup({
    token: new FormControl(),
    signature: new FormControl(),
    currency: new FormControl(),
  })

  profilForm = new FormGroup({
    profil: new FormControl()
  })

  pseudo!: string | null;
  devise: any;
  val!: string

  isListProfil: any;
  isListDevise: any;
  datatauser: any
  private unsubscription$ = new Subject<void>();

  constructor(
    private router: Router
  ) {


  }

  ngOnInit(): void {
    this.token="null"
  }



  ngOnDestroy(): void {
    if (this.unsubscription$) {
      this.unsubscription$.next();
      this.unsubscription$.unsubscribe();
    }
  }
}


