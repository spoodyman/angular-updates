import { NgComponentOutlet } from "@angular/common";
import { Component, inputBinding, outputBinding, signal, viewChild, ViewContainerRef } from "@angular/core";
import { TemplateLiterals } from "../template-literals/template-literals";

@Component({
 selector: 'app-ng-component-vcr',
 imports: [NgComponentOutlet],
 templateUrl: './ng-component-vcr.html',
})
export class NgComponentVcrExample {
 readonly vcr = viewChild.required('container', { read: ViewContainerRef });

 createComponent(): void {
   this.vcr().createComponent(TemplateLiterals, {
       bindings: [
           inputBinding('title', signal('Example title vcr')),
           outputBinding('log', () => console.log('clicked!'))
       ]
   })
 }

 destroyComponent(): void {
   this.vcr().clear();
 }
}
