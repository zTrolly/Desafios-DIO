export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value
      console.log('Deposito realizado com sucesso!')
      console.log(`Seu saldo atual é de R$${this.balance}`)
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.balance >= value) {
      this.balance -= value
      console.log('Saque realizado com sucesso!')
      console.log(`Seu saldo atual é de R$${this.balance}`)
    } else {
      console.log('Saldo insuficiente ou status inválido')
    }

  }

  getBalance(): number {
    return this.balance
  }

  setBalance(value: number): void {
    this.balance = value
  }
  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
