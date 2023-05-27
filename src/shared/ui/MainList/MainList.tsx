import {Component} from "react";
import {Comment} from "shared/ui/Comment/Comment";

interface Props {
    renderDataPage:any
}

export class MainList extends Component<Props, {}> {

    constructor(props:Props) {
        super(props);
    }

    render() {
        const {renderDataPage} = this.props
        return (
            <div>
                {renderDataPage.map(([_key, value]:any) => {
                    const {name, date, review} = value
                    return (
                        <Comment
                            key={_key}
                            name={name}
                            date={date}
                            review={review}
                        />
                    )
                })}
            </div>
        )
    }
}