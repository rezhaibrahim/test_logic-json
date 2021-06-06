deteksi_palindrom = (kata) => {
    let reversKata = '';
    for (let i = kata.length - 1; i >= 0; i--) {
        reversKata += kata[i]
        if (i === 0) {
            if (kata === reversKata) {
                console.log("ini kata palindrom");
            } else {
                console.log("ini Bukan kata palindrom");
            }
        }
    }
    return reversKata, kata
}
console.log(deteksi_palindrom("malam"));

const deteksi_palindromV2=(kata)=>{
    let reversKata =kata.split("").reverse().join("");
    if (kata === reversKata) {
        console.log("ini kata palindrom");
    }else{
        console.log("ini Bukan kata palindrom");
    } 
    return reversKata
    
}
console.log(deteksi_palindromV2('aku'));