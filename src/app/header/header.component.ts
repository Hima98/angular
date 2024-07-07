import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  bodyImageURL : string = "https://imageio.forbes.com/specials-images/imageserve/667dd25e2799c32cc63b1ca7/0x0.jpg?format=jpg";
  Teamake : string = "https://imageio.forbes.com/specials-images/imageserve/667dd2d245d3dd761f9ed14c/0x0.jpg?format=jpg";
  Netflix : string = "https://imageio.forbes.com/specials-images/imageserve/667dd2af45d3dd761f9ed14a/0x0.jpg?format=jpg";
  friends : string = "https://imageio.forbes.com/specials-images/imageserve/667dd3262799c32cc63b1ca9/0x0.jpg?format=jpg";


  
}
