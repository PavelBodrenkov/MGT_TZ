import {Component} from "react";
import cls from './Watch.module.scss';


export class Watch extends Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {time:''}
        this.test = this.test.bind(this)
    }

    test() {
        let d = new Date();
        let s = d.getSeconds();
        let m = d.getMinutes();
        let h = d.getHours();
        this.setState({time:("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2)})
    }

    componentDidMount() {
        const timer =  setInterval(this.test, 1000);
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