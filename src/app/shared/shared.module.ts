import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DropdownDirective } from "./dropdown.directive";
import { ErrorBoxComponent } from "./error-box/error-box.component";
import { HelperDirective } from "./helper/helper.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { FavouritesComponent } from './favourites/favourites.component';

@NgModule({
    declarations:[
        ErrorBoxComponent,
        HelperDirective,
        LoadingSpinnerComponent,
        DropdownDirective,
        FavouritesComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ErrorBoxComponent,
        HelperDirective,
        LoadingSpinnerComponent,
        DropdownDirective,
        CommonModule
    ],
  entryComponents: [ErrorBoxComponent]

})
export class SharedModule{}