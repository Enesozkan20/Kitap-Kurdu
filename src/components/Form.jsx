import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { v4 } from 'uuid'
import Card from './Card';

const Form = () => {
    const [books, setBooks] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault()

        const bookName = e.target[0].value
        if (!bookName) {
            toast.info('Eklemek istediginiz kitap adini giriniz !')
            return
        }
        const newBook = {
            id: v4(),
            date: new Date().toDateString("de", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            }).replaceAll(".", "/"),
            bookName,
        }

        //Book dizisine olusturulan newBook oobejesini ekle
        setBooks([...books, newBook]);
        //input icerigini temizle
        e.target.reset();
        //Kullaniciya gönder
        toast.success("Kitap basariyla eklendi")
    }
    //Sil butonu fonksiyonu
    const handleDelete = (delete_id) => {
        const filtredBooks = books.filter((book) => book.id != delete_id);
        setBooks(filtredBooks);

        toast.error("Kitap basariyla silindi")
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='d-flex justify-content-center mt-5 gap-4'>
                <input placeholder='Kitap adi giriniz ...' className='form-control w-50 shadow' type="text" />
                <button className='btn btn-warning shadow'>Ekle</button>
            </form>
            { /*Book cards*/}
            <div className='container'>
                {books.map((book, key) => (
                    <Card key={key} book={book} handleDelete={handleDelete} />
                ))}
            </div>
        </>
    )
}

export default Form