function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  // Exemplo de uso:
  const arrayComDuplicatas = [1, 2, 2, 3, 4, 4, 5];
  const arraySemDuplicatas = removeDuplicates(arrayComDuplicatas);
  
  console.log(arraySemDuplicatas); // Saída: [1, 2, 3, 4, 5]
  