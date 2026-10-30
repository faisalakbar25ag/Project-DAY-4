const daftarbarang = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor"
];
for(let i = 0; i < daftarbarang.length; i++){
    console.log(daftarbarang[i]);
}

function tentukanStatusStok(stok) {
    if (stok === 0) {
        return "habis";
    } else if (stok < 5) {
        return "menipis";
    } else {
        return "aman"
    }
}

console.log(tentukanStatusStok(0));
console.log(tentukanStatusStok(3));
console.log(tentukanStatusStok(15));