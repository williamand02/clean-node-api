import { MissingParamError } from '../erros/missing-param-error'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest } from '../helpers/http-helper'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    // Se nenhum dos condicionais anteriores for satisfeito, retorne um HttpResponse padrão
    return {
      statusCode: 200,
      body: 'Success'
    }
  }
}
