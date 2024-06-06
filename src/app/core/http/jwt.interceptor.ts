import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
    ): Observable<HttpEvent<unknown>> {

      console.log("request ", request);

    let req: HttpRequest<unknown> | null = null;

    const authToken = sessionStorage.getItem("token");

    if (authToken) {
      req = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + authToken
        }
      });
    }

    return next.handle(req || request);
  }
}
