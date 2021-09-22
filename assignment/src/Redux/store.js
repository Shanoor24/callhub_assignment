import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk"
import { fieldsReducer } from "./FieldsData/reducer";

const rootreducer = combineReducers({
    fieldData: fieldsReducer,
})


const store = createStore(rootreducer,
        compose(applyMiddleware(thunk))
    )

export default store;