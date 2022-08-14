const books = require('./database')

const readline = require('readline-sync')

const initialEntry = readline.question('Gostaria de buscar um livro? S/N?')

if (initialEntry.toLocaleUpperCase() === 'S') {
  const categoryOptions = books.map(book => ' ' + book.category + ': ')
  const selectCategory = readline.question(
    'Escolhe por uma categoria: ' + '\n' + categoryOptions
  )
  const selectedCategory = books.filter(
    book => book.category === selectCategory
  )

  console.table(selectedCategory)
} else {
  const ordenedBooks = books.sort((a, b) => a.pages - b.pages)
  console.log('Livros disponíveis: ')
  console.table(ordenedBooks)
}
