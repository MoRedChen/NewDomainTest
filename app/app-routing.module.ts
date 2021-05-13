import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 引入元件
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';

// 延遲載入調整為預先載入
import { PreloadAllModules } from '@angular/router';

// 路由守門員
import { LayoutGuard } from './layout/layout.guard';

// 設定路由
const routes: Routes = [
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then(module => module.FeatureModule)
  },
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [LayoutGuard], // 路由守門員
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'product',
        component: ProductComponent,
        canActivate: [LayoutGuard] // 路由守門員
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  },

  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: true,
    preloadingStrategy: PreloadAllModules // 延遲載入調整為預先載入
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
