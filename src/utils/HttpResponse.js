import { StatusCodes } from "@/enums";

export default class HttpResponse {
  static handle(response = {}) {
    switch (response.status) {
      case 200:
      case 201:
      case 204:
        return response.data;
      case 401:
        return { code: 401, message: StatusCodes[401] };
      case 403:
        return { code: 403, message: StatusCodes[403] };
      case 404:
        return { code: 404, message: StatusCodes[404] };
      case 408:
        return { code: 408, message: StatusCodes[408] };
      default:
        return { code: 500, message: StatusCodes[500] };
    }
  }
}
