// export interface IP {
//     [props:string]: number
// }

// export interface StringValidator {
//     isAcceptable(s: string): boolean;
// }

// class ZipCodeValidator implements StringValidator {
//     isAcceptable(s: string) {
//         return s.length === 5
//     }
// }
// export { ZipCodeValidator };
// export { ZipCodeValidator as mainValidator }; //重命名


// export default ZipCodeValidator;


//外部模块
import * as URL from 'url';

console.log(URL.parseUrl);


let p = URL.parseUrl('http://www.baidu.com');

console.log(p);
