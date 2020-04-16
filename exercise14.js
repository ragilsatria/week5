function changeVocals(str) {
    var temp = '';

    for (i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o' ||
            str[i] === 'A' || str[i] === 'I' || str[i] === 'U' || str[i] === 'E' || str[i] === 'O') {
            if (str[i] === str[i].toLowerCase()) {
                switch (str[i]) {
                    case 'a':
                        temp += 'b';
                        break;
                    case 'i':
                        temp += 'j';
                        break;
                    case 'u':
                        temp += 'v';
                        break;
                    case 'e':
                        temp += 'f';
                        break;
                    case 'o':
                        temp += 'p';
                        break;
                }
            } else {
                switch (str[i].toUpperCase()) {
                    case 'A':
                        temp += 'B';
                        break;
                    case 'I':
                        temp += 'J';
                        break;
                    case 'U':
                        temp += 'V';
                        break;
                    case 'E':
                        temp += 'F';
                        break;
                    case 'O':
                        temp += 'P';
                        break;
                }
            }
        } else {
            temp += str[i];
        }
    }
    return temp;
}

function reverseWord(str) {
    var temp = '';
    for (i = str.length - 1; i >= 0; i--) {
        temp += str[i];
    }
    return temp;
}

function setLowerUpperCase(str) {
    var temp = '';
    for (i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            temp += str[i].toLowerCase();
        } else {
            temp += str[i].toUpperCase();
        }
    }
    return temp;
}

function removeSpaces(str) {
    temp = '';
    for (i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            temp += str[i];
        }
    }
    return temp;
}

function passwordGenerator(name) {
    var gantiVokal = changeVocals(name);
    var balikKata = reverseWord(gantiVokal);
    var setKecilBesar = setLowerUpperCase(balikKata);
    var final = removeSpaces(setKecilBesar);

    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    } else {
        return final;
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'