import { DioAccount } from "./DioAccount";

export class AnotherAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      console.log('Deposito realizado com sucesso!')
      let valorTotal = super.getBalance() + (value + 10)
      super.setBalance(valorTotal)
      console.log(`Seu saldo atual é de R$${super.getBalance()}`)
    }
  }
}