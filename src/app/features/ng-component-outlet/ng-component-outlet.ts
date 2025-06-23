import { NgComponentOutlet } from "@angular/common";
import { Component, inject, Injector, signal, Type } from "@angular/core";
import { TemplateLiterals, TemplateLiteralsInputs } from "../template-literals/template-literals";

@Component({
 selector: 'app-ng-component-outlet',
 imports: [NgComponentOutlet],
 templateUrl: './ng-component-outlet.html',
})
export class NgComponentOutletExample {
 private readonly _injector = inject(Injector);
 readonly component = signal<Type<TemplateLiterals> | null>(null);
 readonly componentInput = signal<Record<keyof TemplateLiteralsInputs, unknown>>({ title: 'Example Title' });
 readonly componentInjector = Injector.create({
   providers: [],
   parent: this._injector,
 });

 createComponent(): void {
   this.component.set(TemplateLiterals);
 }

 destroyComponent(): void {
   this.component.set(null);
 }

 destroyInjector(): void {
   this.componentInjector.destroy();
 }
}
