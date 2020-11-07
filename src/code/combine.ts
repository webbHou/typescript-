
//接口合并
interface Cloner {
    clone(animal: string): string;
}

interface Cloner {
    clone(animal: number): number;
}

let abs:Cloner = {
    clone: (a:any):any=>a
}


abs.clone([]);

//命名空间合并
namespace Animal2 {
    let haveMuscles = true;

    export function animalsHaveMuscles() {
        return haveMuscles;
    }
}

namespace Animal2 {
    export function doAnimalsHaveMuscles() {
        return haveMuscles;  // Error, because haveMuscles is not accessible here
    }
}

//函数命名空间合并
function buildLabel(name: string): string {
    return buildLabel.prefix + name + buildLabel.suffix;
}

namespace buildLabel {
    export let suffix = "";
    export let prefix = "Hello, ";
}

console.log(buildLabel("Sam Smith"));