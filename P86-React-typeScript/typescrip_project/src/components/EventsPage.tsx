import { FC } from 'react';
import Card, { CardVariant } from './Card';
import EventsExample from './EventsExample';

const EventsPage: FC = () => {
	return (
		<div>
			<EventsExample />
			<Card onClick={(num) => console.log('click', num)} variant={CardVariant.outlined} width='200px' height='200px'>
				<button>Button</button>
				<div>some text</div>
			</Card>
		</div>
	)
}

export default EventsPage