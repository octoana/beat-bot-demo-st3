
from flask import request, render_template, make_response

from webapp import flaskapp, cursor
from models import Book

testsecret = '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'

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
