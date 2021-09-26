// str has every letter of the alphabet in it
function isPangram(str) {
    const len = str.length;
    if (len < 26) {
        return 'not pangram';
    }

    const map = new Map();
    
    [...Array(len)].forEach((_, index) => {
        if (str[index].match(/[a-z]/i)) {
            map.set(str[index].toLocaleLowerCase(), true);
        }
    })
    
    return map.size === 26 ? 'pangram' : 'not pangram';
}