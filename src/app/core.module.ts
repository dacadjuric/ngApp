import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { AuthGuard } from "./auth/auth.guard";
import { DataStorageService } from "./shared/data-storage.service";
import { ShoppingCartListService } from "./shopping-cart/shopping-cart-list/shopping-cart-list.service";
import { SneakersService } from "./sneakers/sneakers.service";

@NgModule({
    providers: [
        ShoppingCartListService,
        SneakersService,
        DataStorageService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        },
        AuthGuard]
})
export class CoreModule{}