import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { Select2Module } from 'ng2-select2';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './admin/admin-content/admin-content.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminDashboard1Component } from './admin/admin-dashboard1/admin-dashboard1.component';
import { LoginComponent } from './login/login.component';
import { DatafromServicesService } from './datafrom-services.service';
import { DashboardComponent } from './starter/starter-content/dashboard/dashboard.component';
import { AddvesselComponent } from './starter/starter-content/vessel/addvessel/addvessel.component';
import { ViewvesselComponent } from './starter/starter-content/vessel/viewvessel/viewvessel.component';
import { AddshipperComponent } from './starter/starter-content/shipper/addshipper/addshipper.component';
import { EditshipperComponent } from './starter/starter-content/shipper/editshipper/editshipper.component';
import { ViewshipperComponent } from './starter/starter-content/shipper/viewshipper/viewshipper.component';
import { AddbookingagentComponent } from './starter/starter-content/bookingagent/addbookingagent/addbookingagent.component';
import { EditbookingagentComponent } from './starter/starter-content/bookingagent/editbookingagent/editbookingagent.component';
import { ViewbookingagentComponent } from './starter/starter-content/bookingagent/viewbookingagent/viewbookingagent.component';
import { AddtransportComponent } from './starter/starter-content/transport/addtransport/addtransport.component';
import { EdittransportComponent } from './starter/starter-content/transport/edittransport/edittransport.component';
import { ViewtransportComponent } from './starter/starter-content/transport/viewtransport/viewtransport.component';
import { AddauctionComponent } from './starter/starter-content/auction/addauction/addauction.component';
import { EditauctionComponent } from './starter/starter-content/auction/editauction/editauction.component';
import { ViewauctionComponent } from './starter/starter-content/auction/viewauction/viewauction.component';
import { AddvehicleComponent } from './starter/starter-content/vehicle/addvehicle/addvehicle.component';
import { EditvehicleComponent } from './starter/starter-content/vehicle/editvehicle/editvehicle.component';
import { ViewvehicleComponent } from './starter/starter-content/vehicle/viewvehicle/viewvehicle.component';
import { AddyardComponent } from './starter/starter-content/yard/addyard/addyard.component';
import { EdityardComponent } from './starter/starter-content/yard/edityard/edityard.component';
import { ViewyardComponent } from './starter/starter-content/yard/viewyard/viewyard.component';
import { YarddetailComponent } from './starter/starter-content/yard/yarddetail/yarddetail.component';
import { LccsettingComponent } from './starter/starter-content/lccsetting/lccsetting.component';
import { AddbuyerComponent } from './starter/starter-content/buyer/addbuyer/addbuyer.component';
import { EditbuyerComponent } from './starter/starter-content/buyer/editbuyer/editbuyer.component';
import { ViewbuyerComponent } from './starter/starter-content/buyer/viewbuyer/viewbuyer.component';
import { AddsalesComponent } from './starter/starter-content/sales/addsales/addsales.component';
import { EditsalesComponent } from './starter/starter-content/sales/editsales/editsales.component';
import { ViewsalesComponent } from './starter/starter-content/sales/viewsales/viewsales.component';
import { AssignauctionComponent } from './starter/starter-content/buyer/assignauction/assignauction.component';
import { PurchasedlistComponent } from './starter/starter-content/purchasedlist/purchasedlist.component';
import { AddclientComponent } from './starter/starter-content/client/addclient/addclient.component';
import { EditclientComponent } from './starter/starter-content/client/editclient/editclient.component';
import { ViewclientComponent } from './starter/starter-content/client/viewclient/viewclient.component';
import { ClientdetailComponent } from './starter/starter-content/client/clientdetail/clientdetail.component';
import { FrontviewComponent } from './starter/starter-content/client/frontview/frontview.component';
import { LatestbidsComponent } from './starter/starter-content/bids/latestbids/latestbids.component';
import { ArchivedbidsComponent } from './starter/starter-content/bids/archivedbids/archivedbids.component';
import { RolefireGuard } from './rolefire.guard';
import { SalesadminGuard } from './salesadmin.guard';
import { SalesguardGuard } from './salesguard.guard';
import { StaffadminGuard } from './staffadmin.guard';
import { LccclientComponent } from './starter/starter-content/client/lccclient/lccclient.component';
import { LccrequestComponent } from './starter/starter-content/sales/lccrequest/lccrequest.component';
import { NeworderComponent } from './starter/starter-content/orders/neworder/neworder.component';
import { EditorderComponent } from './starter/starter-content/orders/editorder/editorder.component';
import { VieworderComponent } from './starter/starter-content/orders/vieworder/vieworder.component';
import { StocklistComponent } from './starter/starter-content/stocklist/stocklist.component';
import { StocksoldlistComponent } from './starter/starter-content/stocksoldlist/stocksoldlist.component';
import { ClientgroupComponent } from './starter/starter-content/clientgroup/clientgroup.component';
import { SortablejsModule } from 'angular-sortablejs';
import { CustommakeComponent } from './starter/starter-content/custommake/custommake.component';
import { CustommodelComponent } from './starter/starter-content/custommodel/custommodel.component';
import { AdminstocklistComponent } from './starter/starter-content/adminstocklist/adminstocklist.component';
import { OrderreportComponent } from './starter/starter-content/orders/orderreport/orderreport.component';
import { PastordersComponent } from './starter/starter-content/orders/pastorders/pastorders.component';
import { YardvehiclesComponent } from './starter/starter-content/vehiclerecords/yardvehicles/yardvehicles.component';
import { AdddeliveryComponent } from './starter/starter-content/delivery/adddelivery/adddelivery.component';
import { ViewdeliveryComponent } from './starter/starter-content/delivery/viewdelivery/viewdelivery.component';
import { EditdeliveryComponent } from './starter/starter-content/delivery/editdelivery/editdelivery.component';
import { AuctionvehiclesComponent } from './starter/starter-content/vehiclerecords/auctionvehicles/auctionvehicles.component';
import { VehicleshistoryComponent } from './starter/starter-content/orders/vehicleshistory/vehicleshistory.component';
import { PortsComponent } from './starter/starter-content/port/ports/ports.component';
import { AddstaffComponent } from './starter/starter-content/staff/addstaff/addstaff.component';
import { EditstaffComponent } from './starter/starter-content/staff/editstaff/editstaff.component';
import { ViewstaffComponent } from './starter/starter-content/staff/viewstaff/viewstaff.component';
import { ViewportComponent } from './starter/starter-content/port/viewport/viewport.component';
import { AddyardserviceComponent } from './starter/starter-content/yardservices/addyardservice/addyardservice.component';
import { ViewyardserviceComponent } from './starter/starter-content/yardservices/viewyardservice/viewyardservice.component';
import { AddbookingservicesComponent } from './starter/starter-content/bookingservices/addbookingservices/addbookingservices.component';
import { ViewbookingservicesComponent } from './starter/starter-content/bookingservices/viewbookingservices/viewbookingservices.component';
import { AddvoyageComponent } from './starter/starter-content/voyage/addvoyage/addvoyage.component';
import { ViewvoyageComponent } from './starter/starter-content/voyage/viewvoyage/viewvoyage.component';
import { ContainerchargeComponent } from './starter/starter-content/bookingcharges/containercharge/containercharge.component';
import { RorochargeComponent } from './starter/starter-content/bookingcharges/rorocharge/rorocharge.component';
import { ShipmentscheduleComponent } from './starter/starter-content/shipment/shipmentschedule/shipmentschedule.component';
import { AddshipmentscheduleComponent } from './starter/starter-content/shipment/addshipmentschedule/addshipmentschedule.component';
import { EditshipmentscheduleComponent } from './starter/starter-content/shipment/editshipmentschedule/editshipmentschedule.component';
import { AddbookingComponent } from './starter/starter-content/booking/addbooking/addbooking.component';
import { ViewbookingComponent } from './starter/starter-content/booking/viewbooking/viewbooking.component';
import { AddinspectionComponent } from './starter/starter-content/inspection/addinspection/addinspection.component';
import { EditbookingComponent } from './starter/starter-content/booking/editbooking/editbooking.component';
import { AddloadingplanComponent } from './starter/starter-content/plans/loadingplan/addloadingplan/addloadingplan.component';
import { ViewloadingplanComponent } from './starter/starter-content/plans/loadingplan/viewloadingplan/viewloadingplan.component';
import { PlandetailComponent } from './starter/starter-content/plans/loadingplan/plandetail/plandetail.component';
import { AddinspectionorderComponent } from './starter/starter-content/inspectionorder/addinspectionorder/addinspectionorder.component';
import { ViewinspectionorderComponent } from './starter/starter-content/inspectionorder/viewinspectionorder/viewinspectionorder.component';
import { EditinspectionorderComponent } from './starter/starter-content/inspectionorder/editinspectionorder/editinspectionorder.component';
import { AddconsigneeComponent } from './starter/starter-content/shipmentconsignee/addconsignee/addconsignee.component';
import { ViewconsigneeComponent } from './starter/starter-content/shipmentconsignee/viewconsignee/viewconsignee.component';
import { EditshipmentconsigneeComponent } from './starter/starter-content/shipmentconsignee/editshipmentconsignee/editshipmentconsignee.component';
import { AddshipmentplanComponent } from './starter/starter-content/plans/shipmentplan/addshipmentplan/addshipmentplan.component';
import { EditshipmentplanComponent } from './starter/starter-content/plans/shipmentplan/editshipmentplan/editshipmentplan.component';
import { ViewshipmentplanComponent } from './starter/starter-content/plans/shipmentplan/viewshipmentplan/viewshipmentplan.component';


@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    LoginComponent,
    DashboardComponent,
    AddvesselComponent,
    ViewvesselComponent,
    AddshipperComponent,
    EditshipperComponent,
    ViewshipperComponent,
    AddbookingagentComponent,
    EditbookingagentComponent,
    ViewbookingagentComponent,
    AddtransportComponent,
    EdittransportComponent,
    ViewtransportComponent,
    AddauctionComponent,
    EditauctionComponent,
    ViewauctionComponent,
    AddvehicleComponent,
    EditvehicleComponent,
    ViewvehicleComponent,
    AddyardComponent,
    EdityardComponent,
    ViewyardComponent,
    YarddetailComponent,
    LccsettingComponent,
    AddbuyerComponent,
    EditbuyerComponent,
    ViewbuyerComponent,
    AddsalesComponent,
    EditsalesComponent,
    ViewsalesComponent,
    AssignauctionComponent,
    PurchasedlistComponent,
    AddclientComponent,
    EditclientComponent,
    ViewclientComponent,
    ClientdetailComponent,
    FrontviewComponent,
    LatestbidsComponent,
    ArchivedbidsComponent,
    LccclientComponent,
    LccrequestComponent,
    NeworderComponent,
    EditorderComponent,
    VieworderComponent,
    StocklistComponent,
    StocksoldlistComponent,
    ClientgroupComponent,
    CustommakeComponent,
    CustommodelComponent,
    AdminstocklistComponent,
    OrderreportComponent,
    PastordersComponent,
    YardvehiclesComponent,
    AdddeliveryComponent,
    ViewdeliveryComponent,
    EditdeliveryComponent,
    AuctionvehiclesComponent,
    VehicleshistoryComponent,
    PortsComponent,
    AddstaffComponent,
    EditstaffComponent,
    ViewstaffComponent,
    ViewportComponent,
    AddyardserviceComponent,
    ViewyardserviceComponent,
    AddbookingservicesComponent,
    ViewbookingservicesComponent,
    AddvoyageComponent,
    ViewvoyageComponent,
    ContainerchargeComponent,
    RorochargeComponent,
    ShipmentscheduleComponent,
    AddshipmentscheduleComponent,
    EditshipmentscheduleComponent,
    AddbookingComponent,
    ViewbookingComponent,
    AddinspectionComponent,
    EditbookingComponent,
    AddloadingplanComponent,
    ViewloadingplanComponent,
    PlandetailComponent,
    AddinspectionorderComponent,
    ViewinspectionorderComponent,
    EditinspectionorderComponent,
    AddconsigneeComponent,
    ViewconsigneeComponent,
    EditshipmentconsigneeComponent,
    AddshipmentplanComponent,
    EditshipmentplanComponent,
    ViewshipmentplanComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    AdminModule,
    Select2Module,
    SortablejsModule.forRoot({ animation: 150 })
  ],
  providers: [DatafromServicesService,RolefireGuard,SalesadminGuard,SalesguardGuard,StaffadminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
