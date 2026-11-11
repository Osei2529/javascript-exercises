const palindromes = function (str) {
    const cleaned = str.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
    const reversed = Array.from(cleaned).reverse().join("");
    return reversed === cleaned;
}

// Do not edit below this line
module.exports = palindromes;
