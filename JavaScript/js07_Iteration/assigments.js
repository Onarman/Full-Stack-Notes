// ÖDEV1:

// fiyatlar dizisinde her bir fiyata %10 zam yapalım. NOT: FOREACH kullanılmalı ve orjinal dizi değiştirilmeli.

// const fiyatlar = [100, 250, 50, 89];

// fiyatlar.forEach((value,indis,dizi) =>{
//     dizi[indis]= (value*1.1).toFixed(2);
    
// });console.log(fiyatlar);



// ÖDEV2:
// fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri konsola tek tek bastırınız.

// const fiyatlar = [100, 250, 50, 89];

// let buyuk90= fiyatlar.filter((x) => x > 90);
// console.log(buyuk90);


// ÖDEV3:

// fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

// const fiyatlar = [100, 250, 50, 89];

// fiyatlar.filter((x) => x < 110)
// .map((x) =>x*1.1)
// .forEach((x) =>
// console.log(x.toFixed(2)));



// ÖDEV4:
// maaslar dizisinde 4000'den düsük olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.

// const maaslar = [3000, 5000, 4000, 6000, 6500];

// let zamlı = maaslar.filter((x) => x < 4000).map((x) => x*1.5);
// console.log(zamlı);


// ÖDEV5:
// Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari konsolda yazdiralim.

// const maaslar = [3000, 5000, 4000, 6000, 6500];

// console.log(maaslar.filter((x) => 4000).map((x) => x*1.25));



// ÖDEV6:
// Maaslarin toplamini hem forEach ile hem de reduce methodu ile çözünüz.

// const maaslar = [3000, 5000, 4000, 6000, 6500];

// let sum = 0;

// maaslar.forEach((x) => sum += x);
// console.log(`Toplam maas : ${sum}`);


//use reduce

const maaslar = [3000, 5000, 4000, 6000, 6500];

let toplam = maaslar.reduce((toplamMaas,maas) => toplamMaas += maas);

console.log(`Toplam maas : ${toplam}`);







