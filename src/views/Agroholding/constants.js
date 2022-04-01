import Kernel from '../../assets/kernel.svg'
import Ukrland from '../../assets/ukrland.svg'
import MHP from '../../assets/mhp.svg'
import Haah from '../../assets/haah.svg'

export const table = {
    header: [
        'Номер',
        'Агрохолдинг',
        'Про компанію',
        'Земельний банк, га'
    ],
    body: [
        {
            image: Kernel,
            description: 'Кернел – провідний у світі та найбільший в Україні виробник та експортер \n' +
                'соняшникової олії, ключовий постачальник сільськогосподарської продукції \n' +
                'з регіону Чорноморського басейну на світові ринки. Свою продукцію Кернел \n' +
                'експортує більш ніж у 80 країн світу. З листопада 2007 року акції компанії \n' +
                'торгуються на Варшавській фондовій біржі (WSE).',
            amount: '510 000'
        },
        {
            image: Ukrland,
            description: 'Укрлендфармінг об\'єднує тисячі співробітників, вкладає ресурси і розвиває \n' +
                'ідеї, щоб забезпечити продуктами харчування мільйони українців та мешканців \n' +
                'інших країн. Ми застосовуємо перевірені технології та постійно вдосконалюємо \n' +
                'знання, щоб бережливо турбуватись про природні ресурси, використовуючи \n' +
                'їх на користь бізнесу і громаді.',
            amount: '475 000'
        },
        {
            image: MHP,
            description: 'МХП — найбільший виробник та експортер курятини в Україні. Компанія \n' +
                'спеціалізується на виробництві курятини та вирощуванні зернових, \n' +
                'а також веде іншу аграрну діяльність (виробництво м\'ясо-ковбасних \n' +
                'виробів і м\'ясних виробів, готових до вживання).',
            amount: '370 000'
        },
        {
            image: Haah,
            description: 'Вчені Академії проводять дослідження в галузях ґрунтознавства та агрохімії, \n' +
                'землеробства, агроекології, водних проблем і меліорації земель, сільськогосподарської \n' +
                'мікробіології, органічного виробництва сільськогосподарської продукції, \n' +
                'хмелярства, механізації та електрифікації сільськогосподарського виробництва \n' +
                'і технічного сервісу.',
            amount: '362 600'
        },
    ]
}