showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

enum Category {
    HTML,
    CSS,
    TypeScript,
    JavaScript
}

interface IDamageLogger {
    (value: string): void;
}

interface IPerson {
    name: string,
    email: string
}

interface IAuthor extends IPerson {
    numBooksPublished: number
}

interface ILibrarian extends IPerson {
    department: string
    assistCustomer(castName: string, bookTitle: string): void
}
interface IBook {
    id: number
    title: string
    author: string
    available: boolean
    category: Category,
    pages?: number,
    markDamaged?: IDamageLogger
}

function printBook(book: IBook): void {
    console.log(`${book.title} by ${book.author}`);
}

const myBook: IBook = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason) => {
        console.log(`Damaged: ${reason}`);
    }
}

printBook(myBook)
if (myBook.markDamaged) {
    myBook.markDamaged('missing back cover')
}

