//BÀI 1
// let x = parseInt(prompt("Nhập số nguyên dương x:"));
//
// function tinhGiaiThua(x) {
//     let giaiThua = 1;
//     for (let i = x; i >= 1; i--) {
//         giaiThua *= i;
//     }
//     return giaiThua;
// }
//
// alert(tinhGiaiThua(x));

//BÀI 2

// function inSoChiaHetCho3(n) {
//     let dem = 0;
//     let soKiemTra = n;
//
//     while (dem < 15) {
//         if (soKiemTra % 3 == 0) {
//             console.log(soKiemTra);
//             dem++;
//         }
//         soKiemTra++;
//     }
// }
// alert(inSoChiaHetCho3(1)) ;

//BÀI 3

function laySoDuong(arr) {
    let mangSoDuong = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            mangSoDuong.push(arr[i]);
        }
    }

    return mangSoDuong;
}

let mangSo = [-1, 2, -3, 4, -5, 6, 8, -10, -6];
let mangSoDuong = laySoDuong(mangSo);
document.write(mangSoDuong);