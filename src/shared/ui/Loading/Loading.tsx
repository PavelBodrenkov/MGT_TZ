
import {Component, ReactNode} from "react";

interface Props {
    loading: boolean
    children: ReactNode
    title?:string
}

export class Loading extends Component<Props, {}> {
    constructor(props: Props | Readonly<Props>) {
        super(props);

    }

    render() {
        const {children, loading} = this.props
        return (
            <>
                {loading
                    ? <div>{`Загрузка ${this.props.title}...`}</div>
                    : children
                }
            </>
        )
    }
}