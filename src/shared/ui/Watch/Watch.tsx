import {Component} from "react";
import cls from './Watch.module.scss';

export class Watch extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {time:''}
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
    }

    componentDidMount() {
        this.timer()
        const timer = setInterval(this.timer, 1000);
        return () => {
            clearInterval(timer)
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