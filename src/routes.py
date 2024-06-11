
from flask import request, render_template, make_response

from webapp import flaskapp, cursor
from models import Book


@flaskapp.route('/')
def index():
    name = request.args.get('name')
    author = request.args.get('author')
    read = bool(request.args.get('read'))

    if name:
        cursor.execute(
            "SELECT * FROM books WHERE name LIKE '%" + name + "%'"
        )
        books = [Book(*row) for row in cursor]

    elif author:
        cursor.execute(
            "SELECT * FROM books WHERE author LIKE '%" + author + "%'"
        )
        books = [Book(*row) for row in cursor]

    else:
        cursor.execute("SELECT name, author, read FROM books")
        books = [Book(*row) for row in cursor]

    return render_template('books.html', books=books)


@flaskapp.route('/authors')
def index():
    author = request.args.get('author')

    if author:
        cursor.execute(
            "SELECT DISTINCT author FROM books WHERE author LIKE '%" + author + "%'"
        )
    else:
        cursor.execute("SELECT DISTINCT author FROM books")

    authors = [row[0] for row in cursor.fetchall()]

    return render_template('authors.html', authors=authors)
