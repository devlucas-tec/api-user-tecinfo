export class User {
    constructor(
        public nome: string,
        public email: string,
        private senha: string
    ) {}

    verificarSenha(senha: string): boolean {
        return this.senha === senha;
    }
}