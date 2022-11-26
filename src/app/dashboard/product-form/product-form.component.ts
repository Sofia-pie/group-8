import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  form: FormGroup;
  id: string;
  isAddMode: boolean;

  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    if (!this.isAddMode) {
      this.productService.getProduct(this.id).subscribe((product) => {
        this.form = this.formBuilder.group({
          name: product.name,
          price: product.price,
          description: product.description,
          additional: product.additional,
          amount: product.amount,
          category: product.category,
          articul: product.articul,
          weight: product.weight,
          size: product.size,
        });
      });
    }
    this.form = this.formBuilder.group({
      name: [''],
      price: 0,
      description: [''],
      additional: [''],
      amount: 0,
      category: [''],
      articul: [''],
      weight: 0,
      size: 0,
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    if (this.isAddMode) {
      this.createUser();
    } else {
      this.updateUser();
    }
  }
  private createUser() {
    this.productService
      .createProduct(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        error: (error) => {},
      });
  }

  private updateUser() {
    this.productService
      .updateProduct(this.id, this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['../../'], { relativeTo: this.route });
        },
        error: (error) => {},
      });
  }
}
