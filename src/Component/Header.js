import React from 'react';

class Header extends React.Component {

    selectedDataHandler = (event, index, branchIndex) => {
        event.stopPropagation()
        let selectedObj = {
            country: "",
            branch: ""
        }

        if (typeof index === "number" && typeof branchIndex === "number") {
            selectedObj.country = this.props.data[index].name
            selectedObj.branch = this.props.data[index].branches[branchIndex].name
        }

        else if (typeof index === "number") {
            selectedObj.country = this.props.data[index].name
        }

        this.props.selectedCountryBranchHandler(selectedObj)
    }

    render() {
        return (
            <React.Fragment>
                <ul class="main-navigation">
                    <li><a href="#">Select Location</a>
                        <ul >
                            {this.props.data && this.props.data.map((location, index) =>
                                <li key={index} onClick={(e) => this.selectedDataHandler(e, index)}><a>{location.name}</a>
                                    <ul >
                                        {location.branches.length > 0 && location.branches.map((branch, branchesIndex) =>
                                            <li key={branchesIndex} onClick={(e) => this.selectedDataHandler(e, index, branchesIndex)}><a href="#">{branch.name}</a></li>
                                        )}
                                    </ul>
                                </li>
                            )}
                        </ul>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}

export default Header;