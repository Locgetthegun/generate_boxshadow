import classNames from 'classnames/bind';
import style from './GenerateResult.module.scss';
import {useSelector} from 'react-redux'
const cx = classNames.bind(style);
function GenerateResult() {
    const data = useSelector((state)=>state)
    
    return ( 
        <div className={cx("wrapper")}>
            <div style={{
                width:data.width,
                height:data.height,
                backgroundColor:data.backgroundColor,
                boxShadow:`${data.horizontal}px ${data.vertical}px ${data.blur}px 
                ${data.spread}px rgba(${data.color.r},${data.color.g},${data.color.b},${data.opacity}) ${data.inset?"inset":""}`
            }} className={cx("box")}>

            </div>
        </div> 
    );
}

export default GenerateResult;