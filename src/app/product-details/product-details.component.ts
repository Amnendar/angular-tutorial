import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) {
    //activated route contiene informazioni sul route e i parametri
  }

  /*
  *The addToCart() method does the following:
  Takes the current product as an argument
  Uses the CartService addToCart() method to add the product to the cart
  Displays a message that you've added a product to the cart
   */

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
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
