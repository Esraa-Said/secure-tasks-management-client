import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem("auth-token");

 
  
  if (token) {
    const reqWithHeaders = req.clone({
      headers: req.headers.set('authorization', `Bearer ${token}`)
      
      
    });

    return next(reqWithHeaders);
  }

  return next(req);
};