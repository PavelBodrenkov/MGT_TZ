import {Component} from "react";
import {Comment} from "shared/ui/Comment/Comment";
import {initialStateCommentsType} from "entities/comments/model/types/commentsType";

interface Props {
    renderComments:[string, initialStateCommentsType][]
}

export class MainList extends Component<Props, {}> {
    constructor(props:Props) {
        super(props);
    }

    render() {
        const {renderComments} = this.props
        return (
            <div>
                {renderComments.map(([_key, value]) => {
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