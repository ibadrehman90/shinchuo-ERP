import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DatafromApiService } from './datafrom-api.service';
import { HttpModule } from '@angular/http';
import { ProdetailComponent } from './prodetail/prodetail.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { ClientBidsComponent } from './client-bids/client-bids.component';
import { ClientWishComponent } from './client-wish/client-wish.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { PurchaselistComponent } from './purchaselist/purchaselist.component';
import { NotificationComponent } from './notification/notification.component';
import { StocklistComponent } from './stocklist/stocklist.component';
import { SavedsearchComponent } from './savedsearch/savedsearch.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'prodetail/:id', component: ProdetailComponent },
  { path: 'account', component: AccountComponent },
  { path: 'admin', component: AdminComponent,
  children: [
    { path: '', component: ClientBidsComponent },
    { path: 'bids', component: ClientBidsComponent },
    { path: 'profile', component: ClientProfileComponent },
    { path: 'savedsearch', component: SavedsearchComponent },
    { path: 'wishlist', component: ClientWishComponent },
    { path: 'purchaselist', component: PurchaselistComponent },
    { path: 'notification', component: NotificationComponent },
    { path: 'stocklist', component: StocklistComponent }
  ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ProdetailComponent,
    HomeComponent,
    AccountComponent,
    AdminComponent,
    ClientBidsComponent,
    ClientWishComponent,
    ClientProfileComponent,
    PurchaselistComponent,
    NotificationComponent,
    StocklistComponent,
    SavedsearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    DatafromApiService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
