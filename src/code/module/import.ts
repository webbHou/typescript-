import { StringValidator as kk, IP, ZipCodeValidator, mainValidator, RegExpBasedZipCodeValidator } from './test2'

import * as exportApi from './test2'; //把所有模块导入到一个变量

import defaultExport from './test';  //导入默认导出模块
import defaultExport2 from './test2';  //导入默认导出模块

declare function require(moduleName: string): any;

let needZipValidation = 'd';



import { ZipCodeValidator as Zip } from "./test";

if (needZipValidation) {
    let ZipCodeValidator: typeof Zip = require("./test2");
    console.log(ZipCodeValidator);
    
    let validator = new ZipCodeValidator();
    if (validator.isAcceptable("...")) { /* ... */ }
}

//导入第三方模块
import * as URL from 'url';


URL.parse('ee')