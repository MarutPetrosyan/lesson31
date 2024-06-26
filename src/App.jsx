import { useDispatch, useSelector} from 'react-redux'
import './App.css'
import { changeText, add ,del, changeInput } from './store/slices/todoSlice'

function App() {
  const {text,todos} = useSelector((state)=> state.todosData)
  const dispatch = useDispatch()
  return (
    <div className='div'>
      <input value={text} onChange={(e) => dispatch(changeText(e.target.value))} />
      <button onClick={() => dispatch(add())}>+</button>
      {
        todos.map((el) => {
          return <li>
            <input onClick={() => dispatch(changeInput(el.id))} type={'checkbox'} />
            {el.title}
            <button className='btn' onClick={() => dispatch(del(el.id))}>*</button>
          </li>
        })
      }
    </div>
  )
}

export default App
