function reverse(snap) {
    let kata = snap.split("").reverse().join("").split(" ").reverse().join(" ")
    var result = kata.slice(0, 5) + kata.charAt(5).toUpperCase() + kata.slice(6, 7) + kata.charAt(7).toUpperCase() + kata.slice(8)
    return result
}

console.log(reverse('i am a great human'));