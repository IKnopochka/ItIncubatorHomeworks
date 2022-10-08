import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC, StateType} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import loaderImg from './img/Spinner-1s-200px.svg'

function HW10() {
    debugger
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        // dispatch
        // setTimeout
        debugger
        dispatch(loadingAC(true));

        const timeBackDispatcher = () => {
            return dispatch(loadingAC(false))
        }

        setTimeout(timeBackDispatcher, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img src={loaderImg}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
