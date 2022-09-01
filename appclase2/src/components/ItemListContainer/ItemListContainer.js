import ContadorTrusho from "../ContadorTrusho/ContadorTrusho";

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h3>
            {greeting}
        </h3>
        <ContadorTrusho>
          
        </ContadorTrusho>
    </div>
  )
}

export default ItemListContainer;