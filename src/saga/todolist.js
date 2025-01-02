import { put,call,takeLatest} from  'redux-saga/effects'
import { requesttodo, requesttodosuce } from '../slice/todolistnew'

async function getData()
{
    var p = await fetch("https://jsonplaceholder.typicode.com/users");

    return  await  p.json()

}

function* todolist()
{

    try
    {
        var p = yield call(getData)

        yield put(requesttodosuce(p))
    }
    catch(error)
    {
        yield put(requesttodo(error))
    }

}

export function* watchtodolist()
{
    yield takeLatest(requesttodo().type,todolist)

}