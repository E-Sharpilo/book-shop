import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import withShopService from '../hoc';
import { fetchBooks } from '../../actions'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
import { compose } from '../../utils'

import './book-list.css'
const BookList = ({ books }) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}><BookListItem book={book} /></li>
                    )
                })
            }
        </ul>
    )
}


class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks()
    }
    render() {
        const { books, loading, error } = this.props
        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator />
        }

        return <BookList books={books} />
    }
}






const mapStateToProps = ({ books, loading, error }) => {
    return {
        books,
        loading,
        error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { booksService } = ownProps
    return {
        fetchBooks: fetchBooks(booksService, dispatch)
    }
}

export default compose(
    withShopService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)
