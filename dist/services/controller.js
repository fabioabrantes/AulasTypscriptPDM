"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayUser = void 0;
var createUser_1 = require("./createUser");
exports.displayUser = function (req, res) {
    var user = createUser_1.createUser({
        name: 'ffafsfgsd',
        email: 'fdsffgfd',
        password: 'fgdfbcgb',
        disciplinas: ['fnaoo', { cod: 'eedfds', name: 'PDM' }],
        formacoes: ['mestrado', 'especializacao']
    });
    res.json(user);
};
