import { HttpService } from './http.service';
import { of } from 'rxjs';

describe('HttpService', () => {
  let httpClientSpy: { post: jasmine.Spy };
  let httpService: HttpService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    httpService = new HttpService(httpClientSpy as any);
  });

  it('should call http post when graphQLRequest is raised', () => {
    httpClientSpy.post.and.returnValue(of([]));

    httpService.graphQLRequest('').subscribe((data) => {
      expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
    });
  });
});
