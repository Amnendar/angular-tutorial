import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute) {
    //activated route contiene informazioni sul route e i parametri
  }

  ngOnInit(): void {
    // prima prendiamo il product id dalla route corrente
    const routeParams = this.route.snapshot.paramMap; //.snapshot ci fa accedere ai parametri
    const productIdFromRoute = Number(routeParams.get('productId'));

    // poi troviamo il prodotto che corrisponde con l id fornito nel route
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}