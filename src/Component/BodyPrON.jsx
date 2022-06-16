import React from 'react';
import "../index.css"

const BodyPrON = (props) => {

       let dates = props.dates;
       let newd = new Date(dates).toLocaleString();

    return (
        <>    
        <div>
             <div className="card mt-3 mb-3" style={{width: "18rem"}} >
                <img src={!props.urlToImage?"https://images.moneycontrol.com/static-mcnews/2022/06/Market-trading-Pexels-770x433.jpg":props.urlToImage} className="card-img-top" alt="img neews"  style={{height:"200px"}} />
                    <div className="card-body">
                        <h5 className="card-title card_c_title">{!props.title?"mising title":props.title}...</h5>
                        <p className="card-text card_c_text">{!props.content?"Click on Read more button for read more about this news...":props.content}....</p>
                        <p className='extradate'>{!props.authore?"unnone":props.authore} - {!props.dates?"Missing Date - Time":newd}</p>
                        <a href={props.url} target="_blank" className="btn btn-primary">read more</a>
                    </div>
            </div>
        </div>

        </>
    )
}

export default BodyPrON;