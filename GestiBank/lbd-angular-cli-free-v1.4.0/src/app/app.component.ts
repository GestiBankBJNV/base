import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    
     constructor(public location: Location, public translate : TranslateService) {
       // this language will be used as a fallback when a translation isn't found in the current language
<<<<<<< HEAD
       translate.setDefaultLang('en');
       location
=======
       translate.setDefaultLang(translate.getBrowserLang());
>>>>>>> master
       // the lang to use, if the lang isn't available, it will use the current loader to get them
       this.setLanguage('fr');
     }

     setLanguage(lang : string){
       this.translate.use(lang);
     }

    ngOnInit(){
    }

    isMap(path){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if(path == titlee){
        return false;
      }
      else {
        return true;
      }
    }
}
