import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }


  getLoan = (value: number): void => {
    if (this.validateStatus()) {
      console.log("Emprestimo concedido");
      this.deposit(value);
      console.log(`Seu saldo atual é de R$${this.getBalance()}`)
    }

  }
}
