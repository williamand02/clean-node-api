import { MissingParamError } from '../erros/missing-param-error'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest } from '../helpers/http-helper'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
    // Se nenhum dos condicionais anteriores for satisfeito, retorne um HttpResponse padrão
    return {
      statusCode: 200,
      body: 'Success'
    }
  }
}
