import {
    withRouter
} from 'react-router-dom'

function Breadcrumb(props) {
    const history = props.location.pathname;
    const history_Arys = history.split("/");
    const history_Ary = history_Arys.filter((value) => {
        return value != "";
    })
    const history_splice = history_Ary.splice("-1");
    history_Ary.unshift("IndexPage");
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {(history_Ary).map((value,index) => (
                    <li key={index} className="breadcrumb-item"><a href="#">{value}</a></li>
                ))}
                <li className="breadcrumb-item active">{history_splice}</li>
            </ol>
        </nav>
    );
}
Breadcrumb = withRouter(Breadcrumb);
export default Breadcrumb;