import React from 'react';
import '../Titles/Titles.css'

const Title = ({title}) => {
    return ( 
       <div className='section-title'>
            <h4 className='title title-center'>{title}</h4>
            <div />
       </div>
     );
}
 
export default Title;