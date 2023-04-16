import { HttpContext, HttpContextToken, HttpInterceptorFn } from '@angular/common/http';

const CACHE_IT = new HttpContextToken<boolean>(() => false);

export function cacheIt() {
  return new HttpContext().set(CACHE_IT, true);
}

export const casheInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.context.get(CACHE_IT)) {
    return next(req);
  }

  const modifiedReq = req.clone({ 
    headers: req.headers.set('cashe', 'on'),
  });
  return next(modifiedReq);
};
