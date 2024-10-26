class CuentaBancaria {
    titular: string;
    cuenta: number;
    saldo: number;

    constructor(titular: string, cuenta: number, saldo: number) {
        this.titular = titular;
        this.cuenta = cuenta;
        this.saldo = saldo;
    }

    depositar(deposito: number) {
        this.saldo = this.saldo + deposito;
        console.log(`${this.titular} su depósito de ${deposito} ha sido exitoso`);
    }

    retirar(retiro: number) {
        this.saldo = this.saldo - retiro;
        console.log(`${this.titular} su retiro de ${retiro} ha sido exitoso`);
    }

    consultar() {
        console.log(`${this.titular} su saldo es de ${this.saldo}`);
    }
}

const cuentaSebas = new CuentaBancaria("Sebastian", 55006897, 1000000);

cuentaSebas.depositar(500000);
cuentaSebas.retirar(100000);
cuentaSebas.consultar();