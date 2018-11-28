import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  statusPerfil:boolean = true;
  statusPreferencias:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  clickPerfil() {
    if (!this.statusPerfil) {
      this.statusPerfil = !this.statusPerfil;
      this.statusPreferencias = false;
    }
  }

  clickPreferencias() {
    if (!this.statusPreferencias) {
      this.statusPreferencias = !this.statusPreferencias;
      this.statusPerfil = false;
    }
  }

}
