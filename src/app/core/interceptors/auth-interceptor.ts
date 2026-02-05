import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = sessionStorage.getItem("token") ;
  const reqWithHeaders = req.clone({
    //headers: req.headers.set('authorization', )
  })
  return next(req);
};
