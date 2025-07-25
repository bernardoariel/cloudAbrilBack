"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosModule = void 0;
const common_1 = require("@nestjs/common");
const productos_service_1 = require("./productos.service");
const productos_controller_1 = require("./productos.controller");
const producto_entity_1 = require("./entities/producto.entity");
const typeorm_1 = require("@nestjs/typeorm");
const prod_costos_module_1 = require("../prod-costos/prod-costos.module");
const prod_image_module_1 = require("../prod-image/prod-image.module");
const prod_stock_module_1 = require("../prod-stock/prod-stock.module");
const prod_marca_module_1 = require("../prod-marca/prod-marca.module");
let ProductosModule = class ProductosModule {
};
exports.ProductosModule = ProductosModule;
exports.ProductosModule = ProductosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([producto_entity_1.Producto], 'sqlserverConnection'),
            prod_costos_module_1.ProdCostosModule,
            prod_image_module_1.ProdImageModule,
            prod_stock_module_1.ProdStockModule,
            prod_marca_module_1.ProdMarcaModule
        ],
        controllers: [productos_controller_1.ProductosController],
        providers: [productos_service_1.ProductosService],
    })
], ProductosModule);
//# sourceMappingURL=productos.module.js.map