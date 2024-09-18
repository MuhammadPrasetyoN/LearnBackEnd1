/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs');

const readableStream = fs.createReadStream('./stream/input.txt', {
    encoding: 'UTF-8',
    highWaterMark: 15
});

const writableStream = fs.createWriteStream('./stream/output.txt');

readableStream.on('data', (chunk) => {
    writableStream.write(chunk + '\n');
})

readableStream.on('end', () => {
    writableStream.end();
    console.log('teks ditulis ulang ke output.txt')
})