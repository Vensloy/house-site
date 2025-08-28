// -- Стили
import '../css/main.css'

// -- Картинки
import bird from '/img/main/bird.png'

export default function Main() {
    return (
        <main>
            <img className='bird' src={bird} alt="" />

            <section>
                <h1>Реплики картин <br /> от <span className='text'>Ink. House</span></h1>
                <p>Высокое качество отрисовки на плотной бумаге или льняном <br/>холсте. Редкие произведения, доступные цены.</p>
                <button className="button">Продукция</button>
            </section>
        </main>
    )
}
    