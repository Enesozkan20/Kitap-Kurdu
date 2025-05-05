import { RiDeleteBinFill } from "react-icons/ri";
const Card = ({ book, handleDelete }) => {
    // Bir react bileşenini dinamik hale getirmek için ilk olarak bileşen prop geçilir.Sonrasında ise bu prop bileşen adının yanınderisinde gereken şeka yazılan () içerisinde karşılanır.Karşılama işleminden sonra bu prop bileşen içerisinde kullanılabilir.
    return (
        <div className="d-flex justify-content-between p-4 border mt-3 rounded align-items-center shadow">
            <div>
                <h3>{book.bookName}</h3>
                <p className="lead">{book.date}</p>
            </div>
            <button onClick={() => handleDelete(book.id)} className="btn btn-danger">
                <RiDeleteBinFill className="fs-3" />
            </button>
        </div>
    )
}

export default Card