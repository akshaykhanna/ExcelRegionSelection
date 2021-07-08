import { Observable } from 'rxjs';
import { HttpService } from './http.service';

export const httpServiceStub: Partial<HttpService> = {
  graphQLRequest: () => new Observable(),
};
