class APIService {
  origin = 'https://edu-online-shop.herokuapp.com/api/v1/';

  post(params) {
    const {
      url,
      body,
      token = '',
      queryParams = '',
    } = params;

    const headers = new Headers();
    
    headers.append('Content-Type', 'application/json');
    token && headers.append('Authorization', `Bearer: ${token}`);
    
    return new Promise((resolve, reject) => {
      fetch(`${this.origin}${url}${queryParams}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
        cache: 'default',
        mode: 'cors'
      })
      .then(response => {
        response.json()
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          console.error(error);
          reject(error);
        });
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
    });
  }
}

const service = new APIService();

export default service;