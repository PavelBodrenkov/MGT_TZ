import {Component} from "react";
import cls from './Watch.module.scss';

interface Props {}
interface State {
    time:string
}

export class Watch extends Component<Props, State> {
    private timerHandle: any
    constructor(props: Props) {
        super(props);
        this.state = {time:''}
        this.timerHandle = null
        this.timer = this.timer.bind(this)
    }

    timer() {
        let d = new Date();
        let s = d.getSeconds();
        let m = d.getMinutes();
        let h = d.getHours();
        this.setState({
            time: ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2)
        })
        this.timerHandle = 0;
    }

    componentDidMount() {
        this.timer()
        this.timerHandle = setInterval(this.timer, 1000);
    }

    componentWillUnmount() {
        if(this.timerHandle) {
            clearInterval(this.timerHandle)
            this.timerHandle = 0
        }
    }

    render() {
        const {time} = this.state

        return (
            <div className={cls.watch}>
                {time}
            </div>
        )
    }
}