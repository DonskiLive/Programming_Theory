import Card from './Card'
import '../css/CardList.css'

const CardList = ({cards})=>{
    return(
    <div className='cards-list'>
        {cards.map((card, index)=>
        <Card 
            key ={index}
            title={card.title}
            subtitle={card.subtitle}
            text={card.text}
            src = {card.src} 
        />)}  
    
</div>
)
}

export default CardList

/* export default function cardList() {
    return (
        <div className='cards-list'>
            <Card title='Card-1'
                subtitle='Subtitle1'
                text='some text1' />
            <Card title='Card-2'
                subtitle='Subtitle2'
                text='some text2' />
            <Card title='Card-3'
                subtitle='Subtitle3'
                text='some text3' />
        </div>

    )
} */