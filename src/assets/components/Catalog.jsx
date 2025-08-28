// -- Стили
import '../css/catalog.css'

export default function Catalog() {
    return (
        <>
            <div className='catalog'>
                <div className="catalog-header">
                    <h2 className='header-name'>Репродукции</h2>

                    <div className='catalog-buttons'>
                        <button className='france-button cb'>Франция</button>
                        <button className='germany-button cb'>Германия</button>
                        <button className='england-button cb'>Англия</button>
                    </div>
                </div>
            </div>
        </>
    )
}