"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
let Usuario = class Usuario {
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'CodUser' }),
    __metadata("design:type", Number)
], Usuario.prototype, "CodUser", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Usuario' }),
    __metadata("design:type", String)
], Usuario.prototype, "Usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Descripcion' }),
    __metadata("design:type", String)
], Usuario.prototype, "Descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Estado' }),
    __metadata("design:type", String)
], Usuario.prototype, "Estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'eMail' }),
    __metadata("design:type", String)
], Usuario.prototype, "eMail", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'CodEmpleado' }),
    __metadata("design:type", Number)
], Usuario.prototype, "CodEmpleado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'CodSucursal' }),
    __metadata("design:type", Number)
], Usuario.prototype, "CodSucursal", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)('Usuarios')
], Usuario);
//# sourceMappingURL=usuario.entity.js.map