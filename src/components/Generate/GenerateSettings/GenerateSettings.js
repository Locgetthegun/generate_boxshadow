import classNames from 'classnames/bind';
import style from './GenerateSettings.module.scss';
import { useState ,useRef} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { boxSetting } from '../../../redux/boxsetting';
const cx = classNames.bind(style);
function GenerateSettings() {
    const codeRef = useRef();
    const data = useSelector(state => state);
    const dispatch = useDispatch();
    const handleInset = ()=>{
        dispatch(boxSetting.actions.setInset(!data.inset))
    }
    const handleChangeWidth = (value,type)=>{
        const valueConvert = parseInt(value);
        if(valueConvert <= 400 && valueConvert >=0){
            dispatch(boxSetting.actions.setWidth(valueConvert));
        }
    }
    const handleChangeHeight = (value,type)=>{
        const valueConvert = parseInt(value);
        if(valueConvert <= 400 && valueConvert >=0){
            dispatch(boxSetting.actions.setHeight(valueConvert));
        }
    }
    const handleChangeBackground = (value,type)=>{
        dispatch(boxSetting.actions.setBackgroundColor(value));
    }
    const handleChangeHor = (value,type)=>{
        const valueConvert = parseInt(value);
        if(valueConvert <= 200 && valueConvert >=0){
            dispatch(boxSetting.actions.setHorizontal(valueConvert));
        }
    }
    const handleChangeVer = (value,type)=>{
        const valueConvert = parseInt(value);
        if(valueConvert <= 200 && valueConvert >=0){
            dispatch(boxSetting.actions.setVertical(valueConvert));
        }
    }
    const handleChangeBlur = (value,type)=>{
        const valueConvert = parseInt(value);
        if(valueConvert <= 400 && valueConvert >=0){
            dispatch(boxSetting.actions.setBlur(valueConvert));
        }
    }
    const handleChangespread = (value,type)=>{
        const valueConvert = parseInt(value);
        if(valueConvert <= 200 && valueConvert >=0){
            dispatch(boxSetting.actions.setSpread(valueConvert));
        }
    }
    const handleChangeShadowColor = (value,type)=>{
        const color = value;
        const r = parseInt(color.substr(1, 2), 16);
        const g = parseInt(color.substr(3, 2), 16);
        const b = parseInt(color.substr(5, 2), 16);
        const rgb = {
            r:r,
            g:g,
            b:b,
        }
        dispatch(boxSetting.actions.setColor(rgb));
    }
    const handleChangeOpacity = (value,type)=>{
        const valueConvert = parseFloat(value);
        if(valueConvert <= 1 && valueConvert >=0){
            dispatch(boxSetting.actions.setOpacity(valueConvert));
        }
    }
    const saveCode = ()=>{
        navigator.clipboard.writeText(codeRef.current.innerHTML);
        alert("copied")
    }
    return ( 
        <div className={cx("wrapper")}>
            <div className={cx("shadow-controls")}>
                <div className={cx("width")}>
                    <h4>Box Width</h4>
                    <input value={data.width} onChange={(e)=>{handleChangeWidth(e.target.value,"number")}} max={400} min={40} type="number" name="" id="" />
                    <input value={data.width} onChange={(e)=>{handleChangeWidth(e.target.value,"range")}} max={400} min={40} type="range" name="" id="" />
                </div>
                <div className={cx("height")}>
                    <h4>Box Height</h4>

                    <input value={data.height} onChange={(e)=>{handleChangeHeight(e.target.value,"number")}} max={400} min={40} type="number" name="" id="" />
                    <input value={data.height}  onChange={(e)=>{handleChangeHeight(e.target.value,"range")}} max={400} min={40} type="range" name="" id="" />
                </div>
                <div className={cx("box-color")}>
                    <h4>Box color</h4>
                    

                    <div style={{display:"flex",}}>
                    <input onChange={(e)=>{handleChangeBackground(e.target.value,"BGcolor")}} type="color" name="" id="" />
                    
                    </div>
                    

                </div>
                <div className={cx("horizontal")}>
                    <h4>Horizontal Shadow Length</h4>
                    
                    <input value={data.horizontal} onChange={(e)=>{handleChangeHor(e.target.value,"number")}} max={200} min={0} type="number" name="" id="" />
                    <input value={data.horizontal} onChange={(e)=>{handleChangeHor(e.target.value,"range")}} max={200} min={0} type="range" name="" id="" />
                </div>
                <div className={cx("vertical")}>
                    <h4>Vertical Shadow Length</h4>

                    <input value={data.vertical} onChange={(e)=>{handleChangeVer(e.target.value,"number")}} max={200} min={0} type="number" name="" id="" />
                    <input value={data.vertical} onChange={(e)=>{handleChangeVer(e.target.value,"range")}} max={200} min={0} type="range" name="" id="" />
                </div>
                <div className={cx("blur")}>
                    <h4>Blur Radius</h4>

                    <input value={data.blur} onChange={(e)=>{handleChangeBlur(e.target.value,"number")}} max={400} min={0} type="number" name="" id="" />
                    <input value={data.blur} onChange={(e)=>{handleChangeBlur(e.target.value,"range")}} max={400} min={0} type="range" name="" id="" />
                </div>
                <div className={cx("spread")}>
                    <h4>Spread Radius</h4>

                    <input value={data.spread} onChange={(e)=>{handleChangespread(e.target.value,"number")}} max={200} min={0} type="number" name="" id="" />
                    <input value={data.spread} onChange={(e)=>{handleChangespread(e.target.value,"range")}} max={200} min={0} type="range" name="" id="" />
                </div>
                <div className={cx("color")}>
                    <h4>Shadow Color</h4>

                    <input onChange={(e)=>{handleChangeShadowColor(e.target.value,"color")}} type="color" name="" id="" />
                </div>
                <div className={cx("color-opacity")}>
                    <h4>Shadow Color Opacity</h4>

                    <input value={data.opacity} onChange={(e)=>{handleChangeOpacity(e.target.value,"number")}}  step={0.01} max={1} min={0} type="number" name="" id="" />
                    <input value={data.opacity} onChange={(e)=>{handleChangeOpacity(e.target.value,"range")}}  step={0.01} max={1} min={0} type="range" name="" id="" />
                </div>
                <div className={cx("inset")}>
                    <h4>Inset</h4>
                    <div className={cx("inset-toggle",data.inset?"active":"")}>
                        <div onClick={handleInset} className={cx("inset-circle")}>

                        </div>
                    </div>
                </div>
                <div className={cx("result")}>
                    <p ref={codeRef}>box-shadow: {data.horizontal}px {data.vertical}px {data.blur}px {data.spread}px rgba({data.color.r},{data.color.g},{data.color.b},{data.opacity}){data.inset?" inset":""};</p>
                </div>
                <div onClick={saveCode} className={cx("copy")}>
                    COPY
                </div>
            </div>
        </div>
     );
}

export default GenerateSettings;