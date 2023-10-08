// if
var umur = 21
if(umur == 21) {
    console.log("Selamat Nurdila");
}
console.log('Umur kamu sekarang 21 tahun');


//else
var sepupu ="Rani"
if (sepupu === "Dina")
{
    console.log("Dia adalah sepupu saya");
}
else
{
    console.log("Dia bukan sepupu saya");
}



// Nested if

var nilai = prompt("masukkan nilai:");
var absensi = 16;

// Memeriksa =nilai
if (nilai>= 70 && nilai<=100) 
{
    console.log("Anda lulus semester ini.");

    // Memeriksa jika absensi mencukupi
    if (absensi >= 14) 
    {
        console.log(" Nurdila, absen kamu baik sekali");
    } else 
    {
        console.log("Nurdila, tingkatkan lagi absensi mu");
    }

}
else {
    console.log("Anda tidak lulus semester ini.");
}



//switch case
var mobil= 3
switch (mobil)
{
    case 1:
        console.log("Isi mobil digarasi ada 1");
        break;
    case 2:
        console.log("isi mobil di garasi ada 2");
        break;
    case 3:
        console.log("isi mobil di garasi ada 3");
        break;
    case 4:
        console.log("isi mobil di garasi ada 4");
        break;
}


//  For statement
for (var x = 1; x < 7; x++ )
{
    console.log(x);
}


//while
var angka =prompt("masukkan angka:");
while (angka<5)
{
    console.log (angka);
    angka++;
}


//do while
var angka= 10;
do 
{
  console.log(angka);
  angka++
}
while(angka<=15);



//function
function introduction(nama,usia)
{
    console.log("Hallo, perkenalkan nama saya "+nama, "saya berusia " +usia);
}
var nama= prompt("siapa nama kamu?")
var usia= prompt("berapa usia kamu?")

introduction(nama, usia);