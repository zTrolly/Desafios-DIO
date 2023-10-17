import { AnotherAccount } from "./class/AnotherAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const anotherAccount: AnotherAccount = new AnotherAccount('Breno AnotherAccount', 123456)

const companyAccount: CompanyAccount = new CompanyAccount('Breno CompanyAccount', 123456)

const peopleAccount: PeopleAccount = new PeopleAccount(123456789, 'Breno PeopleAccount', 123456)


console.log("Métodos da classe AnotherAccount(CRIADA PARA O DESAFIO)")
console.log(anotherAccount.getName())
anotherAccount.deposit(100)
anotherAccount.withdraw(50)
console.log(anotherAccount.getBalance())
console.log("====================================")

console.log("Métodos da classe CompanyAccount")
console.log(companyAccount.getName())
companyAccount.deposit(100)
companyAccount.withdraw(50)
companyAccount.getLoan(100)
console.log(companyAccount.getBalance())
console.log("====================================")

console.log("Métodos da classe PeopleAccount")
console.log(peopleAccount.getName())
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
console.log(peopleAccount.getBalance())

