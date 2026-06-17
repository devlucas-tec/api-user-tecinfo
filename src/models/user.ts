export class User {
    constructor(
        public nome: string,
        public email: string,
        private senha: string
    ) {}

    verificarSenha(senhaDiigitada: string): boolean {
        return this.senha === senhaDiigitada;
    }
}