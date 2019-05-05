import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.css']
})
export class PaymentDetailListComponent implements OnInit {

  constructor(private service:PaymentDetailService, private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshLish();
  }

  populateForm(pd:PaymentDetail){
    this.service.formData=Object.assign({},pd);
  }

  onDelete(PMId){
    if(confirm('Are you sure to delete this record ?')){
      this.service.deletePaymentDetail(PMId).subscribe(
        res=>{
          this.service.refreshLish();
          this.toastr.warning('Delete Successfully','Payment Detail Register');
        },
        err=>{
          console.log(err);
        }
      )
    }
    
  }

}
