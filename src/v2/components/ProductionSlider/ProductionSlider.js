import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductionSlider.css'
import Product_1 from '../../assets/slide_1.png'
import Product_2 from '../../assets/slide_2.png'

function ProductionSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        autoplaySpeed: 1000
    };

    return (
        <section id="slider" className="slider">
            <Slider {...settings}>
                <div className="slider-item">
                    <div className="slider-item-info">
                        <h3 className="slider-item-info-title">
                            Олія рослинна фасована
                        </h3>
                        <p className="slider-item-info-description">
                            Ідеально фасована 100% соняшникова олія, яка відповідає всім світовим стандартам якості. Це
                            максимально очищений натуральний продукт без додавання консервантів, барвників з вмістом
                            натурального вітаміну Е.
                            Якість нашої продукції відповідає всім вимогам якості країн Євросоюзу, СНД, Китаю, а також
                            всім світовим стандартам якості харчових продуктів. Всі підприємства промислової групи ViOil
                            пройшли сертифікацію ISO 9001 та ISO 2200.
                            <br/><br/>
                            Ми створимо Вашу бездоганну репутацію високою якістю нашої продукції:
                            <br/><br/>
                            - контроль якості продукції на всіх етапах виробництва;
                            - використання тільки якісної сировини та упаковки;
                            - індивідуальний підхід до вимог кожного клієнта.
                            - повний сервіс, починаючи від розробки дизайну і закінчуючи поставкою в кінцевий пункт
                            призначення.
                        </p>
                    </div>
                    <img src={Product_1} alt="Product 1" className="slider-item-img"/>
                </div>
                <div className="slider-item">
                    <div className="slider-item-info">
                        <h3 className="slider-item-info-title">
                            Олія рослинна наливна
                        </h3>
                        <p className="slider-item-info-description">
                            ПГ ViOil є одним з лідерів в Україні з виробництва олії рослинної наливної. Завдяки
                            сучасному мультикультурному обладнанню ми можемо переробляти звичайний і високоолеїновий
                            соняшник, а також ріпак, сою та льон. Продукція заводів компанії відповідає всім стандартам
                            якості країн Європейського Союзу та СНД, китайського CIQ, а також іншим світовим стандартам
                            якості харчових продуктів. Група ViOil отримала сертифікат екологічної стійкості та викидів
                            парникових газів (ISCC), який дозволяє застосовувати нашу ріпакову олію для виробництва
                            біопалива.
                            <br/><br/>
                            У компанії є власна залізнична гілка, а також парк залізничних та автомобільних цистерн.
                            Завдяки ефективній логістичної інфраструктури, а також вдалому географічному розташуванню
                            заводів групи наша продукція добре відома споживачам з країн Європи, Азії, Південної та
                            Північної Америки, Африки та Австралії.
                        </p>
                    </div>
                    <img src={Product_2} alt="Product 2" className="slider-item-img"/>
                </div>
            </Slider>
        </section>
    )
}

export default ProductionSlider