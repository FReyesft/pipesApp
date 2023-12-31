import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public menuItems: MenuItem[] = []
  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular', icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon'
          }
        ]
      },
      {
        label: 'Pipes personalizados',

        items: [
          {
            label: 'custom',
            icon: 'pi pi-cog',
            routerLink: 'custom'
          }
        ]

      }

    ];
  }
}
