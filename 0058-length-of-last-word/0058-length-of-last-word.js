var lengthOfLastWord = function(s) {
    // Trim the string to remove trailing spaces, then split by spaces
    const words = s.trim().split(" ");
    // Return the length of the last word
    return words[words.length - 1].length;
};
