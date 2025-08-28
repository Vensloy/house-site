// -- Стили
import '../css/header.css'

// -- Картинки
import logo from '/img/header/logo.svg'
import basket from '/img/header/basket.svg'

export default function Header() {
    return (
        <header>
            <a href="#">
                <img src={logo} alt="" />
            </a>

            <nav>
                <a href="#">Репродукции</a>
                <a href="#">Новинки</a>
                <a href="#">О нас</a>
                <a href="#">
                    <img src={basket} alt="" />
                </a>
            </nav>
        </header>
    )
}