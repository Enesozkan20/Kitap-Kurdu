import Form from "./components/Form"
import Header from "./components/Header"

const App = () => {
  return (
    <div>
      <Header />
      <Form />
      {/* todo:Bir kullanıcı dizisinde bulunan her eleman için  birer div ekrana render edelim 
      
         {users.map((user, key) => (
        <div key={key}>Selamlar,react</div>
         ))}
      
      */}
    </div>
  )
}

export default App