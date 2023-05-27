import {Component, ReactNode} from "react";

interface Props {
    error: string
    children: ReactNode
}

export class Error extends Component<Props, {}> {
    constructor(props: Props | Readonly<Props>) {
        super(props);

    }

    render() {
        const {error, children} = this.props
        return (
            <>
                {this.props.error
                    ? <div>{error}</div>
                    : children
                }
            </>
        )
    }

}