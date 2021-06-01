"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spec = void 0;
require("reflect-metadata");
var auth_change_passwordcontroller_1 = require("./app/@modules/auth/controllers/auth-change-passwordcontroller");
var auth_login_controller_1 = require("./app/@modules/auth/controllers/auth-login.controller");
var auth_register_controller_1 = require("./app/@modules/auth/controllers/auth-register.controller");
var category_controller_1 = require("./app/@modules/ecommarce/controllers/category.controller");
var customer_controller_1 = require("./app/@modules/customer/controllers/customer.controller");
var department_controller_1 = require("./app/@modules/ecommarce/controllers/department.controller");
var ENV_1 = require("./ENV");
var user_controller_1 = require("./app/@modules/user/controllers/user.controller");
var routing_controllers_1 = require("routing-controllers");
var routing_controllers_openapi_1 = require("routing-controllers-openapi");
var class_validator_jsonschema_1 = require("class-validator-jsonschema");
var defaultMetadataStorage = require("class-transformer/cjs/storage").defaultMetadataStorage;
//* DOCS
var schemas = class_validator_jsonschema_1.validationMetadatasToSchemas({
    classTransformerMetadataStorage: defaultMetadataStorage,
    refPointerPrefix: "#/components/schemas/",
});
var storage = routing_controllers_1.getMetadataArgsStorage();
var _controllers = [
    auth_login_controller_1.AuthLoginController,
    auth_register_controller_1.AuthRegisterController,
    auth_change_passwordcontroller_1.AuthChangePasswordController,
    user_controller_1.UserController,
    customer_controller_1.CustomerController,
    department_controller_1.DepartmentController,
    category_controller_1.CategoryController,
];
exports.spec = routing_controllers_openapi_1.routingControllersToSpec(storage, {
    controllers: _controllers,
    routePrefix: ENV_1.ENV.API_PREFIX,
}, {
    components: {
        schemas: schemas,
        securitySchemes: {
            basicAuth: {
                scheme: "basic",
                type: "http",
            },
        },
    },
    info: {
        description: ENV_1.ENV.API_DESC,
        title: ENV_1.ENV.API_TITLE,
        version: ENV_1.ENV.API_TITLE,
    },
});
//# sourceMappingURL=docs.js.map