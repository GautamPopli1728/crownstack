import React from 'react';
// import images from '../Component/images/hello.png';

class Details extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="btn-group">
                    <button className="button" onClick={() => this.props.backButtonHandler(true)}>Back</button>
                </div>
                {this.props.detailsListData && this.props.detailsListData.map((list, index) =>
                    <div class="gallery" key={index}>
                        <img src={`images/subcategory/${list.image}`} width="600" height="400" />
                        <div class="desc">{list.name}</div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}

export default Details