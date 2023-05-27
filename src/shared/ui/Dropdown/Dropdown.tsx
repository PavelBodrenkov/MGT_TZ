import {Component} from "react";
import cls from './Dropdown.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ArrowDown} from "shared/assets/icons/ArrowDown";
import {ArrowUp} from "shared/assets/icons/ArrowUp";
import {itemLanguage} from "widgets/Header/types/headerTypes";

interface State {
    listOpen: boolean
}

interface Props {
    title: string
    list: itemLanguage[]
    toggleItem: (id: number, key: string) => void
    isOpen: boolean;
    toggleList: () => void
}

export class Dropdown extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            listOpen: false
        }
    }

    render() {
        const {list, toggleItem, title, isOpen, toggleList} = this.props

        return (
            <div className={cls.ddWrapper}>
                <div className={cls.ddHeader} onClick={() => toggleList()}>
                    <div className={cls.ddTitle}>{title}</div>
                    {isOpen
                        ? <ArrowUp/>
                        : <ArrowDown/>
                    }
                </div>
                {isOpen &&
                    <ul className={cls.ddList}>
                        {list.map((item) => (
                            <li className={classNames(cls.ddListItem, {[cls.active]: item.selected}, [])}
                                key={item.id}
                                onClick={() => toggleItem(item.id, item.key)}>{item.title}
                            </li>
                        ))}
                    </ul>}
            </div>
        )
    }

}