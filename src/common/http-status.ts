import { Status, ResponseBase, Message } from "./http.interface";

class HttpStatus {
  build(status: Status): ResponseBase {
    const resp: ResponseBase = {
      ok: false,
      status: Status.UNDEFINED,
      detail: "Without details",
      statusCode: 0,
    };

    switch (status) {
      case Status.OK:
        resp.ok = true;
        resp.status = Status.OK;
        resp.detail = Message.OK;
        resp.statusCode = 200;
        break;

      case Status.CREATED:
        resp.ok = true;
        resp.status = Status.CREATED;
        resp.detail = Message.CREATED;
        resp.statusCode = 201;
        break;

      case Status.READED:
        resp.ok = true;
        resp.status = Status.READED;
        resp.detail = Message.READED;
        resp.statusCode = 200;
        break;

      case Status.NOT_FOUND:
        resp.ok = false;
        resp.status = Status.NOT_FOUND;
        resp.detail = Message.NOT_FOUND;
        resp.statusCode = 404;
        break;
    }
    return resp;
  }
}

export default new HttpStatus();
