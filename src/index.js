import { render } from 'react-dom'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DragAndDropArea } from './DragAndDropArea'

	function App() {
		return (
			<div className="App">
				<DndProvider backend={HTML5Backend}>
					<DragAndDropArea/>
				</DndProvider>
			</div>
		)
	}

	const rootElement = document.getElementById('root')
	render(<App />, rootElement)


