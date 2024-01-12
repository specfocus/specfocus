"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lazy = function (importPromise) {
    return importPromise().then(function (module) { return module.default; });
};
exports.default = lazy;
// Usage:
// Assuming you have a module "MyModule" that exports a default object instance
// import('./MyModule').then(module => console.log(module.default));
/*
lazy(() => import('./MyModule'))
  .then(instance => {
    // "instance" here is the default exported object from MyModule
    console.log(instance);
  });
*/ 
