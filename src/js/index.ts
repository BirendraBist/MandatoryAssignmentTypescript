let inputNumber: HTMLInputElement = <HTMLInputElement>document.getElementById("inputNumber");
let toGrams: HTMLButtonElement = <HTMLButtonElement>document.getElementById("toGrams")

let output: HTMLElement = <HTMLElement>document.getElementById("output");

function ConverttoGrams(): void {
    let number1string: string = inputNumber.value;
    let number1number = Number(number1string);
    let result: number = number1number * 28.3495231;
    output.innerHTML = result.toString()
}
toGrams.addEventListener("click", ConverttoGrams);



function ConverttoOunces(): void {
    let number1string: string = inputNumber.value;
    let number1number = Number(number1string);
    let result: number = number1number * 0.0352739619;
    output.innerHTML = result.toString();

}
let toOunces: HTMLButtonElement = <HTMLButtonElement>document.getElementById("toOunces");

toOunces.addEventListener("click", ConverttoOunces);