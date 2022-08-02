function pairElement(str) {
    const pairs = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C'
    }
    const arr = str.split('');
    

    return arr
        .map(elem => [elem, pairs[elem]])
  }
  
  console.log(pairElement("GCG"));

/*DNA Pairing
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
0.split up each character into an array
1. access the value of each index,
2. evaluate what letter it is, A, T, C, or G;
3. if A, add T; if T, add A; if C, add G; if G, add C; else, break;
4. push the pairs into their own array,
5. push the arrays onto the master DNA arr.

*/