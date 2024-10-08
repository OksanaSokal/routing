import React from 'react';
import {adidasArr, type AdidasItem} from './Adidas';
import {useParams} from 'react-router-dom';
import {pumaArr} from './Puma';

type CrossModel = {
    [key: string]: AdidasItem[]
}

export const Model = () => {

    const modelObj: CrossModel = {
        adidas: adidasArr,
        puma: pumaArr
    }
    const {brand, id} = useParams()

    const currentModel = brand ? modelObj[brand].filter(el => el.id === Number(id)) : null
    return (
        <div>
            {currentModel ?
                currentModel.map(el => {
                    return <>
                        <h2>{el.model}--</h2>
                        <h2>{el.price}</h2>
                        <img src={el.picture} alt={'img'}/>
                    </>
                })
                : <span>no</span>
            }
        </div>
    );
};
