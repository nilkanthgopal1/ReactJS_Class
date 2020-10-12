import React from 'react';

const Newslist=(props) =>{
    console.log("props in newslist",props);
    const renderList =props.newsdata.map((data) =>{
        return(
            <div>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
            </div>
        )
    })
    

return(
    <div>
    {renderList}
    </div>
)

}

export default Newslist;