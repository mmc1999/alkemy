import Loader from "./Loader";
import NuevaReceta from "./NuevaReceta";
import BasicFormModule from "./BasicForm.module.css";

export default function BasicForm({loading, handleSubmit, handleChange, values, errors, datos}) {
    
    return(
        <>
            <form onSubmit={handleSubmit} className={BasicFormModule.form}>
                <input 
                    type="text" 
                    placeholder="Ingrese el menu" 
                    name="comida" 
                    value={values.comida}
                    onChange={handleChange}
                    className={BasicFormModule.input}
                />
                {errors.comida && <p className={BasicFormModule.mensajeError}>{errors.comida}</p>}
            </form>
            <div>
                
                <div>
                    {
                        loading 
                            ?   <Loader />
                            : datos.length === 0  
                                ? <p className={BasicFormModule.datosVacio}>No se encontraron platos con el nombre "{values.comida}"</p> 
                                : (
                                    <div className={BasicFormModule.divMenues}>
                                        {
                                            datos.map(el => 
                                                <NuevaReceta key={el.id} el={el}  />
                                            )
                                        }
                                    </div>
                                ) 
                                
                                
                    }
                </div>
                    
            </div>
        </>
    )
}