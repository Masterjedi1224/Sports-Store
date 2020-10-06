import axios from "axios";
import { RestUrls } from "./Urls";
import Axios from "axios";

export class RestDataSource {
    GetData = (dataType) => this.SendRequest("get", RestUrls[dataType]);

    SendRequest = (method, url) => Axios.request({ method, url });
}