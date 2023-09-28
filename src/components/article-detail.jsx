import {useParams} from 'react-router-dom'
import {useEffect} from "react";
import ArticleService from "../service/article";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {
    getArticleDetailFailure,
    getArticleDetailStart,
    getArticleDetailSuccess,
} from "../slice/article";

const ArticleDetail = () =>{
    const {slug} = useParams()
    const dispatch = useDispatch()
    const {articleDetail} = useSelector(state => state.article)

    useEffect(() =>{
        const getArticleDetail = async () =>{
            dispatch(getArticleDetailStart())
            try {
                const response = await ArticleService.getArticleDetail(slug)
                dispatch(getArticleDetailSuccess(response.article))
            }catch (error){
                dispatch(getArticleDetailFailure())
            }
        }
        getArticleDetail()
    }, [slug])

    return(
        articleDetail !== null && (
            <div>

                <div className="p-4 mb-3  rounded-3">
                    <div className="container-fluid py-4">
                        <h1 className="display-5 fw-bold">{articleDetail.title}</h1>
                        <p className="col-md-8 fs-4">{articleDetail.description}</p>
                        <p className='text-muted'>
                            <span className='fw-bold'>Created at:</span> {moment(articleDetail.createdAt).format('DD MMM, YYYY')}
                        </p>
                        <div className="col-md-6">
                            <div
                                className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2  text-primary-emphasis">Jack</strong>
                                    <p className="card-text mb-auto">This is a wider card with supporting text below as
                                        a natural lead-in to additional content.</p>

                                </div>
                                <div className="col-auto d-none d-lg-block">

                                </div>
                            </div>
                        </div>
                        <div>{articleDetail.body}</div>
                    </div>
                </div>
            </div>
        )
    )
}
export default ArticleDetail