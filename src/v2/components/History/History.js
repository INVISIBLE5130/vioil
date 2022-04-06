import React from "react";
import './History.css'

const history = [
    {
        date: '1991-1995',
        top: '3vw',
        line: true,
        title: 'ПГ КМТ стає експортером соняшникової олії'
    },
    {
        date: '1996-1997',
        right: 0,
        top: '10vw',
        line: true,
        title: 'ПГ КМТ налагоджує переробку на давальницьких умовах насіння соняшнику на Вінницькому та Чернівецькому ОЖК'
    },
    {
        date: '1997-2000',
        top: '20vw',
        toRightBottom: true,
        title: 'Група КМТ придбала контрольні пакети акцій Вінницького та Чернівецького ОЖК та свій перший елеватор в с. Попелюхи. Експортувала першу партію олії до Європи (в Польщу)'
    },
    {
        date: '2001-2005',
        right: 0,
        top: '35vw',
        line: true,
        title: 'ПГ КМТ придбала ще 6 елеваторів'
    },
    {
        date: '1997-2000',
        top: '40vw',
        line: true,
        title: 'Група КМТ придбала контрольні пакети акцій Вінницького та Чернівецького ОЖК та свій перший елеватор в с. Попелюхи. Експортувала першу партію олії до Європи (в Польщу)'
    },
    {
        date: '2006-2009',
        right: 0,
        top: '55vw',
        line: true,
        title: 'ПГ ViOil вийшла з групи КМТ з метою концентрації на олієжировому бізнесі. ПГ ViOil придбала 3 елеватори. Модернізувала Вінницький та Чернівецький ОЖК та збільшила обсяг переробки до 400 000 т на рік. Початок проходження аудитів по МСФО. Експорт першої партії олії в Індію'
    },
    {
        date: '1997-2000',
        top: '70vw',
        toRightBottom: true,
        title: 'Група КМТ придбала контрольні пакети акцій Вінницького та Чернівецького ОЖК та свій перший елеватор в с. Попелюхи. Експортувала першу партію олії до Європи (в Польщу)'
    },
    {
        date: '2013',
        right: 0,
        top: '85vw',
        toLeftBottom: true,
        title: 'ПГ ViOil збільшила виробничі потужності Вінницького ОЖК з 1000 т до 2800 т на добу'
    },
    {
        date: '2017',
        top: '95vw',
        toBottom: true,
        title: 'ПГ ViOil отримала синдикований кредит на $80 млн від банку ING N.V.'
    },
    {
        date: '2018-2020 ',
        right: 0,
        top: '105vw',
        title: 'ПГ ViOil збільшила потужності переробки своїх підприємств до 1,1 млн т насіння олійних культур на рік. Сукупна ємність зберігання на елеваторах групи — до 200 000 т насіння олійних. ПГ ViOil входить в ТОП-3 найбільших підприємств олійножирової галузі України'
    },
]

function History() {
    return (
        <section id="history" className="history_v2">
            <h2 className="history_v2-title">
                ІСТОРІЯ
            </h2>
            <p className="history_v2-sub_title">
                промислової групи ViOil
            </p>
            <div className="history_v2-blocks">
                {
                    history.map((
                        {
                            date,
                            title,
                            top,
                            right,
                            toRightBottom,
                            toLeftBottom,
                            line,
                            toBottom
                        }, i
                    ) => (
                        <div className={`history_v2-blocks-grey ${right === 0 ? 'history_v2-blocks-orange' : ''}`}
                             style={{
                                 right: right === 0 ? 0 : "unset",
                                 left: right === 0 ? "unset" : 0,
                                 top: top || "unset"
                             }}>
                            <div className="history_v2-blocks-item">
                                <h4 className={`history_v2-blocks-grey-title ${right === 0 ? 'history_v2-blocks-orange-title' : ''}`}>
                                    {date}
                                </h4>
                                <p className={`history_v2-blocks-grey-description ${right === 0 ? 'history_v2-blocks-orange-description' : ''}`}>
                                    {title}
                                </p>
                                <div
                                    style={{
                                        height: '5vw',
                                        width: '40vw',
                                        borderBottom: (toBottom || line) &&
                                            '3px solid #FFC94D',
                                        borderLeft: (toLeftBottom || toBottom) &&
                                            '3px solid #FFC94D',
                                        borderRight: toRightBottom &&
                                            '3px solid #FFC94D',
                                        borderTop: (toLeftBottom || toRightBottom) &&
                                            '3px solid #FFC94D',
                                        left:
                                            i === history.length - 2
                                                ? '80%'
                                                : right !== 0 && 'calc(100% + 1vw)',
                                        right: right === 0 && 'calc(100% + 1vw)',
                                        bottom: i === history.length - 2
                                            ? '-6vw'
                                            : '0',
                                        position: 'absolute'
                                    }}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default History