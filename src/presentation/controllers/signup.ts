import { MissingParamError } from '../erros/missing-param-error'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { EmailValidator } from '../protocols/email-validator'
import { InvalidParamError } from '../erros/invalid-param-error'
import { ServerError } from '../erros/server-error'

export class SignUpController implements Controller {
  private readonly emailValidatorStub: EmailValidator
  constructor (emailValidatorStub: EmailValidator) {
    this.emailValidatorStub = emailValidatorStub
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const isValid = this.emailValidatorStub.isValid(httpRequest.body.email)
      // Se nenhum dos condicionais anteriores for satisfeito, retorne um HttpResponse padrão
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      return {
        statusCode: 200,
        body: 'Success'
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: new ServerError()
      }
    }
  }
}
