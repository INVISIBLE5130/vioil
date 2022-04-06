import React from "react";
import './Contacts.css'

function Contacts() {
    return (
        <section id={'contacts'} className={'contacts'}>
            <div className="contacts-info">
                <h2 className="contacts-info-title">
                    Зв'яжіться з нами
                </h2>
                <p className={'contacts-info-text'}>
                    Немирівське шосе, 26 <br/>
                    Вінниця, 21034, Україна
                </p>
                <p className={'contacts-info-text'}>
                    Тел/факс: <br/>
                    +38 (0432) 509-600 <br/>
                    +38 (0432) 509-601
                </p>
                <p className={'contacts-info-text'}>
                    E-mail: <br/>
                    office@vioil.com
                </p>
            </div>
            <div
                className={'contacts-map'}
                dangerouslySetInnerHTML={{
                    __html: `
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.5192249042234!2d28.519659315687523!3d49.2286442793256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b1fafb5cbaf%3A0xf516ac5ad13b7e22!2z0J3QtdC80LjRgNGW0LLRgdGM0LrQtSDRiNC-0YHQtSwgMjYsINCS0ZbQvdC90LjRhtGPLCDQktGW0L3QvdC40YbRjNC60LAg0L7QsdC70LDRgdGC0YwsIDIxMDAw!5e0!3m2!1suk!2sua!4v1649238292286!5m2!1suk!2sua"
                    width="100%"
                    height="450"
                    style="border:0;"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
            `
                }}
            />
        </section>
    )
}

export default Contacts