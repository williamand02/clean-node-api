import { HttpRequest, HttpResponse } from './protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email')
      }
    }
    // Se nenhum dos condicionais anteriores for satisfeito, retorne um HttpResponse padrão
    return {
      statusCode: 200,
      body: 'Success'
    }
  }
}
