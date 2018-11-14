import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter/starter.component';
import { LoginComponent } from './../login/login.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './../starter/starter-content/dashboard/dashboard.component';
import { AddvesselComponent } from './../starter/starter-content/vessel/addvessel/addvessel.component';
import { ViewvesselComponent } from './../starter/starter-content/vessel/viewvessel/viewvessel.component';
import { AddshipperComponent } from './../starter/starter-content/shipper/addshipper/addshipper.component';
import { EditshipperComponent } from './../starter/starter-content/shipper/editshipper/editshipper.component';
import { ViewshipperComponent } from './../starter/starter-content/shipper/viewshipper/viewshipper.component';
import { AddbookingagentComponent } from './../starter/starter-content/bookingagent/addbookingagent/addbookingagent.component';
import { EditbookingagentComponent } from './../starter/starter-content/bookingagent/editbookingagent/editbookingagent.component';
import { ViewbookingagentComponent } from './../starter/starter-content/bookingagent/viewbookingagent/viewbookingagent.component';
import { AddtransportComponent } from './../starter/starter-content/transport/addtransport/addtransport.component';
import { EdittransportComponent } from './../starter/starter-content/transport/edittransport/edittransport.component';
import { ViewtransportComponent } from './../starter/starter-content/transport/viewtransport/viewtransport.component';
import { AddauctionComponent } from './../starter/starter-content/auction/addauction/addauction.component';
import { EditauctionComponent } from './../starter/starter-content/auction/editauction/editauction.component';
import { ViewauctionComponent } from './../starter/starter-content/auction/viewauction/viewauction.component';
import { AddvehicleComponent } from './../starter/starter-content/vehicle/addvehicle/addvehicle.component';
import { EditvehicleComponent } from './../starter/starter-content/vehicle/editvehicle/editvehicle.component';
import { ViewvehicleComponent } from './../starter/starter-content/vehicle/viewvehicle/viewvehicle.component';
import { AddyardComponent } from './../starter/starter-content/yard/addyard/addyard.component';
import { EdityardComponent } from './../starter/starter-content/yard/edityard/edityard.component';
import { ViewyardComponent } from './../starter/starter-content/yard/viewyard/viewyard.component';
import { YarddetailComponent } from './../starter/starter-content/yard/yarddetail/yarddetail.component';
import { LccsettingComponent } from './../starter/starter-content/lccsetting/lccsetting.component';
import { AddbuyerComponent } from './../starter/starter-content/buyer/addbuyer/addbuyer.component';
import { EditbuyerComponent } from './../starter/starter-content/buyer/editbuyer/editbuyer.component';
import { ViewbuyerComponent } from './../starter/starter-content/buyer/viewbuyer/viewbuyer.component';
import { AddsalesComponent } from './../starter/starter-content/sales/addsales/addsales.component';
import { EditsalesComponent } from './../starter/starter-content/sales/editsales/editsales.component';
import { ViewsalesComponent } from './../starter/starter-content/sales/viewsales/viewsales.component';
import { AssignauctionComponent } from './../starter/starter-content/buyer/assignauction/assignauction.component';
import { PurchasedlistComponent } from './../starter/starter-content/purchasedlist/purchasedlist.component';
import { AddclientComponent } from './../starter/starter-content/client/addclient/addclient.component';
import { EditclientComponent } from './../starter/starter-content/client/editclient/editclient.component';
import { ViewclientComponent } from './../starter/starter-content/client/viewclient/viewclient.component';
import { ClientdetailComponent } from './../starter/starter-content/client/clientdetail/clientdetail.component';
import { FrontviewComponent } from './../starter/starter-content/client/frontview/frontview.component';
import { LatestbidsComponent } from './../starter/starter-content/bids/latestbids/latestbids.component';
import { ArchivedbidsComponent } from './../starter/starter-content/bids/archivedbids/archivedbids.component';
import { RolefireGuard } from './../rolefire.guard';
import { SalesadminGuard } from './../salesadmin.guard';
import { SalesguardGuard } from './../salesguard.guard';
import { StaffadminGuard } from './../staffadmin.guard';
import { LccclientComponent } from './../starter/starter-content/client/lccclient/lccclient.component';
import { LccrequestComponent } from './../starter/starter-content/sales/lccrequest/lccrequest.component';
import { NeworderComponent } from './../starter/starter-content/orders/neworder/neworder.component';
import { EditorderComponent } from './../starter/starter-content/orders/editorder/editorder.component';
import { VieworderComponent } from './../starter/starter-content/orders/vieworder/vieworder.component';
import { StocklistComponent } from './../starter/starter-content/stocklist/stocklist.component';
import { StocksoldlistComponent } from './../starter/starter-content/stocksoldlist/stocksoldlist.component';
import { ClientgroupComponent } from './../starter/starter-content/clientgroup/clientgroup.component';
import { SortablejsModule } from 'angular-sortablejs';
import { CustommakeComponent } from './../starter/starter-content/custommake/custommake.component';
import { CustommodelComponent } from './../starter/starter-content/custommodel/custommodel.component';
import { AdminstocklistComponent } from './../starter/starter-content/adminstocklist/adminstocklist.component';
import { OrderreportComponent } from './../starter/starter-content/orders/orderreport/orderreport.component';
import { PastordersComponent } from './../starter/starter-content/orders/pastorders/pastorders.component';
import { YardvehiclesComponent } from './../starter/starter-content/vehiclerecords/yardvehicles/yardvehicles.component';
import { AdddeliveryComponent } from './../starter/starter-content/delivery/adddelivery/adddelivery.component';
import { ViewdeliveryComponent } from './../starter/starter-content/delivery/viewdelivery/viewdelivery.component';
import { EditdeliveryComponent } from './../starter/starter-content/delivery/editdelivery/editdelivery.component';
import { AuctionvehiclesComponent } from './../starter/starter-content/vehiclerecords/auctionvehicles/auctionvehicles.component';
import { VehicleshistoryComponent } from './../starter/starter-content/orders/vehicleshistory/vehicleshistory.component';
import { PortsComponent } from './../starter/starter-content/port/ports/ports.component';
import { AddstaffComponent } from './../starter/starter-content/staff/addstaff/addstaff.component';
import { EditstaffComponent } from './../starter/starter-content/staff/editstaff/editstaff.component';
import { ViewstaffComponent } from './../starter/starter-content/staff/viewstaff/viewstaff.component';
import { ViewportComponent } from './../starter/starter-content/port/viewport/viewport.component';
import { AddyardserviceComponent } from './../starter/starter-content/yardservices/addyardservice/addyardservice.component';
import { ViewyardserviceComponent } from './../starter/starter-content/yardservices/viewyardservice/viewyardservice.component';
import { AddbookingservicesComponent } from './../starter/starter-content/bookingservices/addbookingservices/addbookingservices.component';
import { ViewbookingservicesComponent } from './../starter/starter-content/bookingservices/viewbookingservices/viewbookingservices.component';
import { AddvoyageComponent } from './../starter/starter-content/voyage/addvoyage/addvoyage.component';
import { ViewvoyageComponent } from './../starter/starter-content/voyage/viewvoyage/viewvoyage.component';
import { ContainerchargeComponent } from './../starter/starter-content/bookingcharges/containercharge/containercharge.component';
import { RorochargeComponent } from './../starter/starter-content/bookingcharges/rorocharge/rorocharge.component';
import { ShipmentscheduleComponent } from './../starter/starter-content/shipment/shipmentschedule/shipmentschedule.component';
import { AddshipmentscheduleComponent } from './../starter/starter-content/shipment/addshipmentschedule/addshipmentschedule.component';
import { EditshipmentscheduleComponent } from './../starter/starter-content/shipment/editshipmentschedule/editshipmentschedule.component';
import { AddbookingComponent } from './../starter/starter-content/booking/addbooking/addbooking.component';
import { ViewbookingComponent } from './../starter/starter-content/booking/viewbooking/viewbooking.component';
import { EditbookingComponent } from './../starter/starter-content/booking/editbooking/editbooking.component';
import { AddinspectionComponent } from './../starter/starter-content/inspection/addinspection/addinspection.component';
import { AddloadingplanComponent } from './../starter/starter-content/plans/loadingplan/addloadingplan/addloadingplan.component';
import { ViewloadingplanComponent } from './../starter/starter-content/plans/loadingplan/viewloadingplan/viewloadingplan.component';
import { PlandetailComponent } from './../starter/starter-content/plans/loadingplan/plandetail/plandetail.component';
import { AddinspectionorderComponent } from './../starter/starter-content/inspectionorder/addinspectionorder/addinspectionorder.component';
import { ViewinspectionorderComponent } from './../starter/starter-content/inspectionorder/viewinspectionorder/viewinspectionorder.component';
import { EditinspectionorderComponent } from './../starter/starter-content/inspectionorder/editinspectionorder/editinspectionorder.component';
import { AddconsigneeComponent } from './../starter/starter-content/shipmentconsignee/addconsignee/addconsignee.component';
import { ViewconsigneeComponent } from './../starter/starter-content/shipmentconsignee/viewconsignee/viewconsignee.component';
import { EditshipmentconsigneeComponent } from './../starter/starter-content/shipmentconsignee/editshipmentconsignee/editshipmentconsignee.component';
import { AddshipmentplanComponent } from './../starter/starter-content/plans/shipmentplan/addshipmentplan/addshipmentplan.component';
import { EditshipmentplanComponent } from './../starter/starter-content/plans/shipmentplan/editshipmentplan/editshipmentplan.component';
import { ViewshipmentplanComponent } from './../starter/starter-content/plans/shipmentplan/viewshipmentplan/viewshipmentplan.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: StarterComponent,
      children: [
        { path: '', component: DashboardComponent },
        { path: 'add_vessel', component: AddvesselComponent, canActivate: [StaffadminGuard] },
        { path: 'vessel_list', component: ViewvesselComponent, canActivate: [RolefireGuard] },
        { path: 'add_shipper', component: AddshipperComponent, canActivate: [RolefireGuard] },
        { path: 'edit_shipper/:id', component: EditshipperComponent, canActivate: [RolefireGuard] },
        { path: 'shipper_list', component: ViewshipperComponent, canActivate: [RolefireGuard] },
        { path: 'add_bookingagent', component: AddbookingagentComponent, canActivate: [StaffadminGuard] },
        { path: 'edit_bookingagent/:id', component: EditbookingagentComponent, canActivate: [RolefireGuard] },
        { path: 'bookingagent_list', component: ViewbookingagentComponent, canActivate: [RolefireGuard] },
        { path: 'add_transportcompany', component: AddtransportComponent, canActivate: [RolefireGuard] },
        { path: 'edit_transportcompany/:id', component: EdittransportComponent, canActivate: [RolefireGuard] },
        { path: 'transportcompany_list', component: ViewtransportComponent, canActivate: [RolefireGuard] },
        { path: 'add_auction', component: AddauctionComponent, canActivate: [RolefireGuard] },
        { path: 'edit_auction/:id', component: EditauctionComponent, canActivate: [RolefireGuard] },
        { path: 'auction_list', component: ViewauctionComponent, canActivate: [RolefireGuard] },
        { path: 'add_vehicle', component: AddvehicleComponent, canActivate: [RolefireGuard] },
        { path: 'edit_vehicle/:id', component: EditvehicleComponent, canActivate: [RolefireGuard] },
        { path: 'vehicle_list', component: ViewvehicleComponent, canActivate: [RolefireGuard] },
        { path: 'add_yard', component: AddyardComponent, canActivate: [StaffadminGuard] },
        { path: 'edit_yard/:id', component: EdityardComponent, canActivate: [RolefireGuard] },
        { path: 'yard_list', component: ViewyardComponent, canActivate: [RolefireGuard] },
        { path: 'detail_yard/:id', component: YarddetailComponent, canActivate: [RolefireGuard] },
        { path: 'lcc_setting', component: LccsettingComponent, canActivate: [RolefireGuard] },
        { path: 'add_buyer', component: AddbuyerComponent, canActivate: [RolefireGuard] },
        { path: 'edit_buyer/:id', component: EditbuyerComponent, canActivate: [RolefireGuard] },
        { path: 'buyer_list', component: ViewbuyerComponent, canActivate: [RolefireGuard] },
        { path: 'auction_assignment', component: AssignauctionComponent, canActivate: [RolefireGuard] },
        { path: 'add_salesuser', component: AddsalesComponent, canActivate: [RolefireGuard] },
        { path: 'edit_salesuser/:id', component: EditsalesComponent, canActivate: [RolefireGuard] },
        { path: 'salesuser_list', component: ViewsalesComponent, canActivate: [RolefireGuard] },
        { path: 'purchasedlist', component: PurchasedlistComponent },
        { path: 'add_client', component: AddclientComponent, canActivate: [SalesadminGuard] },
        { path: 'edit_client/:id', component: EditclientComponent, canActivate: [SalesadminGuard] },
        { path: 'client_list', component: ViewclientComponent, canActivate: [SalesadminGuard] },
        { path: 'client_detail/:id', component: ClientdetailComponent, canActivate: [RolefireGuard] },
        { path: 'userview', component: FrontviewComponent, canActivate: [SalesadminGuard] },
        { path: 'lccclientrequest', component: LccclientComponent, canActivate: [SalesadminGuard] },
        { path: 'latest_bids', component: LatestbidsComponent },
        { path: 'archived_bids', component: ArchivedbidsComponent },
        { path: 'lccrequest', component: LccrequestComponent, canActivate: [RolefireGuard] },
        { path: 'neworder', component: NeworderComponent, canActivate: [RolefireGuard] },
        { path: 'edit_order/:id', component: EditorderComponent, canActivate: [RolefireGuard] },
        { path: 'orders_list', component: VieworderComponent, canActivate: [RolefireGuard] },
        { path: 'stocklist', component: StocklistComponent, canActivate: [SalesguardGuard] },
        { path: 'soldlist', component: StocksoldlistComponent, canActivate: [SalesadminGuard] },
        { path: 'clientgroup', component: ClientgroupComponent, canActivate: [SalesguardGuard] },
        { path: 'custom_make', component: CustommakeComponent, canActivate: [RolefireGuard] },
        { path: 'custom_model', component: CustommodelComponent, canActivate: [RolefireGuard] },
        { path: 'sales_stock', component: AdminstocklistComponent, canActivate: [RolefireGuard] },
        { path: 'pastorders_list', component: PastordersComponent, canActivate: [RolefireGuard] },
        { path: 'yardvehicles', component: YardvehiclesComponent, canActivate: [RolefireGuard] },
        { path: 'newdelivery', component: AdddeliveryComponent, canActivate: [RolefireGuard] },
        { path: 'edit_delivery/:id', component: EditdeliveryComponent, canActivate: [RolefireGuard] },
        { path: 'delivery_list', component: ViewdeliveryComponent, canActivate: [RolefireGuard] },
        { path: 'auctionvehicles', component: AuctionvehiclesComponent, canActivate: [RolefireGuard] },
        { path: 'vehicleshistory', component: VehicleshistoryComponent, canActivate: [RolefireGuard] },
        { path: 'add_ports', component: PortsComponent, canActivate: [StaffadminGuard] },
        { path: 'view_ports', component: ViewportComponent, canActivate: [RolefireGuard] },
        { path: 'add_staff', component: AddstaffComponent, canActivate: [RolefireGuard] },
        { path: 'edit_staff/:id', component: EditstaffComponent, canActivate: [RolefireGuard] },
        { path: 'staff_list', component: ViewstaffComponent, canActivate: [RolefireGuard] },
        { path: 'add_yardservice', component: AddyardserviceComponent, canActivate: [StaffadminGuard] },
        { path: 'view_yardservices', component: ViewyardserviceComponent, canActivate: [RolefireGuard] },
        { path: 'add_bookingservice', component: AddbookingservicesComponent, canActivate: [StaffadminGuard] },
        { path: 'view_bookingservices', component: ViewbookingservicesComponent, canActivate: [RolefireGuard] },
        { path: 'add_voyage', component: AddvoyageComponent, canActivate: [StaffadminGuard] },
        { path: 'view_voyages', component: ViewvoyageComponent, canActivate: [RolefireGuard] },
        { path: 'add_containercharge', component: ContainerchargeComponent, canActivate: [StaffadminGuard] },
        { path: 'add_rorocharge', component: RorochargeComponent, canActivate: [StaffadminGuard] },
        { path: 'add_shipmentschedule', component: AddshipmentscheduleComponent, canActivate: [StaffadminGuard] },
        { path: 'edit_shipmentschedule/:id', component: EditshipmentscheduleComponent, canActivate: [RolefireGuard] },
        { path: 'view_shipmentschedule', component: ShipmentscheduleComponent, canActivate: [RolefireGuard] },
        { path: 'add_booking', component: AddbookingComponent, canActivate: [StaffadminGuard] },
        { path: 'edit_booking/:id', component: EditbookingComponent, canActivate: [RolefireGuard] },
        { path: 'view_booking', component: ViewbookingComponent, canActivate: [RolefireGuard] },
        { path: 'add_inspection', component: AddinspectionComponent, canActivate: [StaffadminGuard] },
        { path: 'add_loadingplan', component: AddloadingplanComponent, canActivate: [StaffadminGuard] },
        { path: 'view_loadingplan', component: ViewloadingplanComponent, canActivate: [RolefireGuard] },
        { path: 'view_plan/:id', component: PlandetailComponent, canActivate: [RolefireGuard] },
        { path: 'add_inspectionorder', component: AddinspectionorderComponent, canActivate: [StaffadminGuard] },
        { path: 'edit_inspectionorder/:id', component: EditinspectionorderComponent, canActivate: [RolefireGuard] },
        { path: 'view_inspectionorder', component: ViewinspectionorderComponent, canActivate: [RolefireGuard] },
        { path: 'add_consignee', component: AddconsigneeComponent, canActivate: [StaffadminGuard] },
        { path: 'edit_shipmentconsignee/:id', component: EditshipmentconsigneeComponent, canActivate: [RolefireGuard] },
        { path: 'view_consignee', component: ViewconsigneeComponent, canActivate: [RolefireGuard] },
        { path: 'add_shipmentplan', component: AddshipmentplanComponent, canActivate: [StaffadminGuard] },
        { path: 'edit_shipmentplan/:id', component: EditshipmentplanComponent, canActivate: [RolefireGuard] },
        { path: 'view_shipmentplan', component: ViewshipmentplanComponent, canActivate: [RolefireGuard] }
       ]
      },
      { path: 'login', component: LoginComponent },
      { path: 'orderreport/:id', component: OrderreportComponent }
    ]),
    SortablejsModule
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
