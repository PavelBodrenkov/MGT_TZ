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
        return (
            <>
                {this.props.error ?
                    <div>{this.props.error}</div> :
                    this.props.children
                }
            </>
        )
    }

}