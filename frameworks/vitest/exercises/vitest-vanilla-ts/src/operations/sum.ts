
// Function that sum all numbers of the matriz 
export default function sum(...numbers: number[]) {
    return numbers.reduce((total, number) => total + number, 0 )
}

sum(1, 2, 3)