"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
/* para criar o usuario: name,email e password */
function createUser2(name, email, password) {
    if (name === void 0) { name = ""; }
    var User = {
        name: name,
        email: email,
        password: password,
    };
    return User;
}
exports.default = createUser2;
exports.createUser = function (_a) {
    var name = _a.name, email = _a.email, password = _a.password, disciplinas = _a.disciplinas, formacoes = _a.formacoes;
    var User = {
        name: name,
        email: email,
        password: password,
        disciplinas: disciplinas,
        formacoes: formacoes
    };
    return User;
};
