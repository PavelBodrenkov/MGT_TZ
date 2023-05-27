import {Component} from "react";
import cls from './Comment.module.scss'

interface Props {
    name:string;
    date:string;
    review:string
}

export class Comment extends Component<Props, {}> {
    constructor(props:Props) {
        super(props);
        this.renderName = this.renderName.bind(this)
    }

    renderName() {
        const tmp = this.props?.name?.split(' ') ?? []
        let tmpName = ''
        if(tmp.length > 1) {
            tmpName = tmp[0] + ' ' + tmp?.[1].slice(0, 1).toUpperCase() + '.'
        } else {
            tmpName = tmp[0]
        }
        return tmpName
    }

    render() {
        const {date, review} = this.props
        const name = this.renderName()

        return (
            <div className={cls.comment}>
                <div className={cls.nameBlock}>
                    <div>{name}</div>
                    <div>{date}</div>
                </div>
                <div>
                    {review}
                </div>
            </div>
        )
    }
}