import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts', //identificazione del componente(iniziano sempre con app-)
  templateUrl: './product-alerts.component.html', //riferiscono ai file html e css collegati
  styleUrls: ['./product-alerts.component.css'],
})
//funzionalita del componenete
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product | undefined;
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
