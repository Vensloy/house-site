// -- Стили
import '../css/header.css'

// -- Картинки
import logo from '../img/logo.svg'
import basket from '../img/basket.svg'

export default function Header() {
    return (
        <header>
            <img src={logo} alt="" />

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