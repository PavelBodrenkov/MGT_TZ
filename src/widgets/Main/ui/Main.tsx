import {Component} from "react";
import {connect} from "react-redux";
import {getComments} from 'entities/comments'
import {AppDispatch, RootState} from "app/providers/StoreProvider";
import cls from './Main.module.scss';
import {Pagination} from "shared/ui/Pagination/Pagination";
import {MainList} from "shared/ui/MainList/MainList";
import {languageType} from "entities/language/model/slice/languageSlice";
import {commentsProps, countsType} from "entities/comments/model/types/commentsType";
import {Error} from 'shared/ui/Error/Error'
import {Loading} from "shared/ui/Loading/Loading";

const ROWS_PER_PAGE = 10;

interface Props {
    language: languageType,
    comments: commentsProps,
    counts: countsType,
    loading: boolean,
    error: string
    dispatch: AppDispatch
    getComments: () => void
}

interface State {
    comments: commentsProps,
    page: number
}

class Main extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            comments: {} as commentsProps,
            page: 1
        }
        this.renderDataPage = this.renderDataPage.bind(this)
        this.onPageChange = this.onPageChange.bind(this)
    }

    //Получаем комментарии
    componentDidMount() {
        this.props.dispatch(getComments())
    }

    onPageChange(page: number) {
        this.setState({
            ...this.state,
            page
        })
    }

    //Формируем массив для отображения
    renderDataPage() {
        const {comments, language} = this.props
        const firstPageIndex = (this.state.page - 1) * ROWS_PER_PAGE;
        const lastPageIndex = firstPageIndex + ROWS_PER_PAGE;
        return Object.keys(comments).length !== 0
            ? Object.entries(comments[language]).slice(firstPageIndex, lastPageIndex)
            : []
    }

    render() {
        const {comments, language, counts, loading, error} = this.props
        const {page} = this.state
        const renderComments = this.renderDataPage()

        return (
            <main className={cls.main}>
                <div className={cls.container}>
                    <Error error={error}>
                        <Loading loading={loading} title={'комментариев'}>
                            <MainList
                                renderDataPage={renderComments}
                            />
                            {Object.keys(comments).length !== 0 && Object.keys(comments[language]).length > 10 &&
                                <Pagination
                                    currentPage={page}
                                    totalCount={counts[language]}
                                    pageSize={ROWS_PER_PAGE}
                                    onPageChange={this.onPageChange}
                                />
                            }
                        </Loading>
                    </Error>
                </div>
            </main>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    language: state.language.language,
    comments: state.comments.comments,
    counts: state.comments.counts,
    loading: state.comments.isLoading,
    error: state.comments.error
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    getComments,
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)