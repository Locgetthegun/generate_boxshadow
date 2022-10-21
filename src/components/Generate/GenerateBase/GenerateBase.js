import GenerateResult from "../GenerateResult/GenerateResult";
import GenerateSettings from "../GenerateSettings/GenerateSettings";
import classNames from 'classnames/bind';
import style from './GenerateBase.module.scss';
import {useState} from 'react'
const cx = classNames.bind(style);
function GenerateBase() {
    return ( 
        <div className={cx("generate")}>
            <GenerateSettings/>
            <GenerateResult/>
        </div>
     );
}

export default GenerateBase;