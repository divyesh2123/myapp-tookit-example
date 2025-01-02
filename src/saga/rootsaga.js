import { all } from "redux-saga/effects";
import { watchersaga } from "./countersaga";
import { watchtodolist } from "./todolist";

export default function* rootSaga()
{
    yield all([watchersaga(),watchtodolist()])
}