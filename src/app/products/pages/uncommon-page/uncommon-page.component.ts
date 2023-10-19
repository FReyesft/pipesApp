import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  public name: string = "Fernando";
  public gender: 'male' | 'female' = `male`;
  public clients: string[] = [
    'Maria', 'Pedro', 'Abuela', 'Brandon', 'Jonathan', 'Maicol', 'Juan'
  ]

  public clientsMap = {
    '=0': 'no tenemos ningun cliente',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  public person = {
    name: 'Fernado',
    age: 19,
    address: 'Colombia'
  }

  public myObservableTimer: Observable<number> = interval(1000).pipe(
    tap(value => value)
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('HOLA B)')
    }, 1000);
  })

  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }
  changeClient(): void {
    this.name = 'Maria'
    this.gender = 'female'
  }

  deleteClient(): void {
    this.clients.shift()
  }
}
