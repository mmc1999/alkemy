import Loader from "./Loader";
import NuevaReceta from "./NuevaReceta";
import BasicFormModule from "./BasicForm.module.css";

export default function BasicForm({loading, handleSubmit, handleChange, values, errors, datos}) {
    
    return(
        <>
            <form onSubmit={handleSubmit} className={BasicFormModule.form}>
                <h2 className={BasicFormModule.h2}>Agregar al menu</h2>
                <input 
                    type="text" 
                    placeholder="Ingrese el menu" 
                    name="comida" 
                    value={values.comida}
                    onChange={handleChange}
                    className={BasicFormModule.input}
                />
                {values.comida && <p>{errors.comida}</p>}
            </form>
            <div>
                
                <div className={BasicFormModule.divMenues}>
                    {
                        loading 
                            ?   <Loader />
                            : datos.map(el => 
                                <NuevaReceta key={el.id} el={el}  />
                            )
                    }
                </div>
                    
            </div>
        </>
    )
}