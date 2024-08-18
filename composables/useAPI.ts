import * as API from 'aws-amplify/api'

export const useAPI = (name: string = 'dev') => {
  type Option = Parameters<typeof API.post>[0]['options']

  return {
    get: (path: string, options?: Option) => API.get({ apiName: name, path, options }),
    post: (path: string, options?: Option) => API.post({ apiName: name, path, options }),
    put: (path: string, options?: Option) => API.put({ apiName: name, path, options }),
    del: (path: string, options?: Option) => API.del({ apiName: name, path, options }),
    head: (path: string, options?: Option) => API.head({ apiName: name, path, options }),
    patch: (path: string, options?: Option) => API.patch({ apiName: name, path, options }),
  }
}