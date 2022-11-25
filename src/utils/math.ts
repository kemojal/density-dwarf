export  const randomInRange = (min: number, max: number) => {  
    return Math.floor(Math.random() * (max - min) + min); 
} 

export const pickOneFromArray = (arr: any) => {
    let min = 0;
    let max = arr.length - 1;
    let n = Math.floor(Math.random() * (max - min) + min); 
    return arr[n];
}