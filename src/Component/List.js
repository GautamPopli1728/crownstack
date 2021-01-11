import React from 'react';
// import images from '../Component/images/hello.png';

class List extends React.Component {

    detailHandler = (index, brancName) => {
        this.props.detailsHandler(index, brancName)
    }

    render() {
        return (
            <React.Fragment>
                {this.props.listData && this.props.listData.map((list, index) =>
                    <div class="gallery" key={index} onClick={()=> this.detailHandler(index, list.image)}>
                        <img src={`images/${list.image}`} width="600" height="400" />
                        <div class="desc">{list.name}</div>
                    </div>

                )}
            </React.Fragment>
        )
    }
}

export default List