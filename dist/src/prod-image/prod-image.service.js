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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdImageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const prod_image_entity_1 = require("./entities/prod-image.entity");
const typeorm_2 = require("typeorm");
let ProdImageService = class ProdImageService {
    constructor(prodImagenesRepository) {
        this.prodImagenesRepository = prodImagenesRepository;
    }
    async findByCodProducto(codProducto) {
        return this.prodImagenesRepository.findOne({ where: { CodProducto: codProducto } });
    }
};
exports.ProdImageService = ProdImageService;
exports.ProdImageService = ProdImageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(prod_image_entity_1.ProdImage, 'sqlserverConnection')),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProdImageService);
//# sourceMappingURL=prod-image.service.js.map