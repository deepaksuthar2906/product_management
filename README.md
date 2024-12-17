# ProductManagement

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

### Directory Structure 
PRODUCT_MANAGEMENT/
app/                           # Main application directory
│   │   ├── components/                # Reusable components
│   │   │   ├── products/              # Product management components
│   │   │   │   ├── product-form/      # Product form component
│   │   │   │   │   ├── product-form.component.html
│   │   │   │   │   ├── product-form.component.scss
│   │   │   │   │   ├── product-form.component.spec.ts
│   │   │   │   │   └── product-form.component.ts
│   │   │   │   ├── product-listing/   # Product list component
│   │   │   │   │   ├── product-listing.component.html
│   │   │   │   │   ├── product-listing.component.scss
│   │   │   │   │   ├── product-listing.component.spec.ts
│   │   │   │   │   └── product-listing.component.ts
│   │   │   │   ├── products-routing.module.ts
│   │   │   │   └── products.module.ts
│   │   │
│   │   ├── models/                    # Product model
│   │   │   └── product.ts
│   │   │
│   │   ├── services/                  # Application services
│   │   │   ├── local-api.service.spec.ts
│   │   │   ├── local-api.service.ts
│   │   │   ├── signal.service.spec.ts
│   │   │   └── signal.service.ts
│   │   │
│   │   ├── app.component.html         # Root component template
│   │   ├── app.component.scss         # Root component styles
│   │   ├── app.component.spec.ts      # Root component tests
│   │   ├── app.component.ts           # Root component logic
│   │   └── app.module.ts              # Main module configuration
