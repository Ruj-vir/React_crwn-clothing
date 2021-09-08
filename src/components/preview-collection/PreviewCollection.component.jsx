import React from "react";
import './PreviewCollection.style.scss';
import CollectionItem from "../collection-item/CollectionItem.component";

const PreviewCollection = ({title,items})=> {
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
                {items
                .filter((item,idx)=> idx<4)
                .map(({id, ...otherItemProps})=> {
                    return(
                        <CollectionItem key={id} {...otherItemProps}/>
                    );
                })}
            </div>
        </div>
    );
}


export default PreviewCollection