import React from 'react';
import './styles.scss';

// import {Link} from 'react-router-dom';
import RouterCategory from './../../router/routerCategory';
export default function Home(props){
    return(
        <>
        <div className="container">
            <div className="container-layout-home">
                <div className="container-layout-main-home">
                    <div className="container-h-title-home">
                        <p>Chọn Khóa Học Lập Trình</p>
                        {props.showCategory}
                    </div>
                    <div className="container-main-right-home">
                       <RouterCategory />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}