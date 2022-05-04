import { Component, OnInit} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'product-landing-pg';

  constructor(){}

  ngOnInit(): void {
    
  }

  content:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veniam neque obcaecati!"

  id:any;
    drop(param:any){
      if (this.id == param){
        this.id ="";
      }

      else{
        this.id = param;
      }
    }

  url:string = "../assets/img/PS-Prd1.jpg"
  
  urlfirst:string = "../assets/img/PS-Prd2.jpg"

  urlsec:string = "../assets/img/PS-Prd3.jpg"

  urlfourth:string = "../assets/img/PS-Prd4.jpg"


  
  changeImage(event:any){
    this.url = event.target.src;
  }
  changeImage1(event:any){
    this.urlfirst = event.target.src;
  }

  changeImage2(event:any){
    this.urlsec = event.target.src;
  }

  changeImage3(event:any){
    this.urlfourth = event.target.src;
  }

  partnersArray:any = [
    {
      imgName: "../assets/partners/P1.jpg"
    },
    {
      imgName: "../assets/partners/P2.jpg"
    },
    {
      imgName: "../assets/partners/P3.jpg"
    },
    {
      imgName: "../assets/partners/P4.jpg"
    },
    {
      imgName: "../assets/partners/P5.jpg"
    },
    {
      imgName: "../assets/partners/P6.jpg"
    }
  ];

  bannerSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  };

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false
  };

  testimonialSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  days:any = 194;
  hours:number = 22;
  minutes:number = 14;
  secs:number = 4;

  sI = setInterval(()=>{
    var futureDate = new Date("August 20, 2022 15:34:23").getTime();
     var today = new Date().getTime();
     var distance = futureDate - today;
     this.days = Math.floor(distance/(1000 * 60 * 60 * 24));
     this.hours = Math.floor ((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     this.minutes = Math.floor ((distance % (1000 * 60 * 60)) / (1000 * 60));
     this.secs = Math.floor ((distance % (1000 * 60)) / (1000));
     if (distance < 0){
       clearInterval(this.sI);
       this.days = "Offer is Expired"
     }
  }, 1000)


  
}
