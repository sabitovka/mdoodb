function prompt(message, predicate = null) {
  return new Promise((resolve, reject) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
    readline.question(message, (num) => {
      readline.close();
      if (predicate && !predicate(+num)) {
        reject(new Error(`Не выполняется заданное условие ${predicate}`))
      }
      resolve(+num)
    });
  })
}

module.exports = prompt;