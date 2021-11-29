import React from 'react';

interface ListProps<T>{ // inside <> written generic - any type of generic normally named <T>
	items: T[];
	renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>){
	return(
		<div>
			{props.items.map(props.renderItem)}
		</div>
	)
}

/* const List: FC<ListProps> =({items, children})=>{
	return(
		<div>

		</div>
	)
}
export default List */