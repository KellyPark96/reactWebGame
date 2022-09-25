import React, { memo } from 'react';

const Try = memo(({ tryInfo }) => {
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    )
});

Try.displayName = 'Try';

export default Try;

// ClassComponent => PureComponent
/*
import React, { PureComponent } from 'react';
class Try extends PureComponent {
    render(){
        const {tryInfo} = this.props;
        return (
            <li>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
            </li>
        )
    }
}
export default Try;
*/