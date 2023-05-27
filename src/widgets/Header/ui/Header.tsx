import React, {Component} from 'react';
import LOGO from './../../../shared/assets/img/logo.jpg'
import cls from './Header.module.scss'
import {Dropdown} from "shared/ui/Dropdown/Dropdown";
import {Watch} from "shared/ui/Watch/Watch";
import {classNames} from "shared/lib/classNames/classNames";
import {languageType} from "entities/language/model/slice/languageSlice";
import {connect} from "react-redux";
import {AppDispatch} from "app/providers/StoreProvider";
import {languageActions} from "entities/language/model/slice/languageSlice";
import {Props, State} from "widgets/Header/types/headerTypes";

class Header extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            title: 'Ru',
            isOpenDropdown:false,
            language: [
                {
                    id: 1,
                    title: 'Ru',
                    selected: true,
                    key: languageType.RU
                },
                {
                    id: 2,
                    title: 'En',
                    selected: false,
                    key: languageType.EN
                }
            ]
        }
        this.toggleSelected = this.toggleSelected.bind(this)
        this.toggleList = this.toggleList.bind(this)
    }

    //Выбор языка
    toggleSelected(id: number, key: languageType) {
        const title = this.state.language.find((item) => item.id === id).title
        const tmpLanguage = this.state.language.map((item) => {
            return (
                item.id === id
                    ? {...item, selected: true}
                    : {...item, selected: false}
            )
        })
        this.setState({
            title,
            language: tmpLanguage,
            isOpenDropdown:false
        })

        this.props.dispatch(languageActions.setLanguage(key))
    }

    //открытие-закрытие селекта
    toggleList() {
        this.setState( ({
            isOpenDropdown: !this.state?.isOpenDropdown
        }))
    }

    render() {
        const {title, language} = this.state
        return (
            <header className={cls.header}>
                <div className={classNames(cls.wrapper, {}, [cls.container])}>
                    <div className={cls.wrapperBlockLogo}>
                        <div className={cls.logo}>
                            <img src={LOGO} alt={'logo'}/>
                        </div>
                        <Dropdown
                            isOpen={this.state.isOpenDropdown}
                            title={title}
                            list={language}
                            toggleItem={this.toggleSelected}
                            toggleList={this.toggleList}
                        />
                    </div>
                    <Watch/>
                </div>
            </header>
        )
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    languageActions,
    dispatch
})

export default connect(null, mapDispatchToProps)(Header)