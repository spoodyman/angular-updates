import { Component, linkedSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkedSignalComponent } from './features/linked-signal/linked-signal.component';
import { EffectsComponent } from './features/effects/effects.component';
import { TemplateLetComponent } from './features/template-let/template-let.component';
import { AfterRenderComponent } from './features/after-render/after-render.component';
import { UndefinedChecksComponent } from './features/undefined-checks/undefined-checks.component';
import { ResourceComponent } from './features/resource/resource.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LinkedSignalComponent, EffectsComponent, TemplateLetComponent, AfterRenderComponent, UndefinedChecksComponent, ResourceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-updates';
  readonly fetchById = signal(1);
  readonly afterRenderInput = signal('Initial Value');
  readonly routerOutletData = signal('Router Outlet Data');

  fetch(): void {
    this.fetchById.set(this.fetchById() + 1);
  }

  changeAfterRenderInput(): void {
    this.afterRenderInput.set('Updated Value');
  }

  changeRouterOutletData(): void {
    this.routerOutletData.set('Updated Router Outlet Data');
  }
}
