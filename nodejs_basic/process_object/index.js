const initialMemoryUsage = process.memoryUsage().heapUsed; // TODO 1
const yourName = process.argv[2] || 'User';// TODO 2
const environment = process.env.NODE_ENV || 'development'; // TODO 3
 
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
    let memoryHog = new Array(10000).fill('*')
}
 
const currentMemoryUsage = process.memoryUsage().heapUsed;// TODO 4
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);