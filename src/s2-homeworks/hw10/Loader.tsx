import s from './Loader.module.css'
import loaderImg from './img/Spinner-1s-200px.svg'


export const Loader = () => <div className={s.loader} ><img src={loaderImg}/></div>
