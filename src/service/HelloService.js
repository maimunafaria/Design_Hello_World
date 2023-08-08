import HelloModel from '../model/HelloModel';
import axios from 'axios';

class HelloService {
  async getHelloMessage() {
    const response = await axios.get('http://localhost:3002/hello');
    const data = await response.data;
    const helloModel = new HelloModel();
    helloModel.message = data.message;
    return helloModel;
  }
}

export default HelloService;

