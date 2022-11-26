import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  percentDone: any = 0;
  preview: string;

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
      name: ['', Validators.required],
      price: [0, Validators.required],
      description: [null],
      additional: [null],
      amount: [0, Validators.required],
      category: ['', Validators.required],
      articul: ['', Validators.required],
      weight: [0, Validators.required],
      size: [0, Validators.required],
      img: [null],
    });
  }

  get f() {
    return this.form.controls;
  }

  uploadFile(event: any) {
    const file = event.target.files[0];
    this.form.patchValue({
      img: file,
    });
    this.form.get('img')!.updateValueAndValidity();
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    if (this.isAddMode) {
      this.createProduct();
    } else {
      this.updateProduct();
    }
  }
  private createProduct() {
    this.productService
      .createProduct(this.form.value, this.form.value.img)
      .subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            this.percentDone = Math.round((event.loaded / event.total!) * 100);
            console.log(`Uploaded! ${this.percentDone}%`);
            break;
          case HttpEventType.Response:
            console.log('User successfully created!', event.body);
            this.percentDone = false;
            this.router.navigate(['../']);
        }
      });
  }

  private updateProduct() {
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
