// Evgeny Nemchenko 
// 48-5
// Introductory exercise 2

/**
 * Checks if a number is prime.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} - Returns true if the number is prime, false otherwise.
 */
const isPrime = (num) => {
    
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) 
        if (num % i === 0) 
            return false; 
       
    return true;
};

  
// Print all prime numbers less than 237

for (let i = 2; i < 237; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
  


/*
Write code that prints all prime numbers whose value is less than 237.
*/