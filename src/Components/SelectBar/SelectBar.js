function SelectBar() {
    return filter();
    return (
        <div id="IndexPage_top_background" className="tm-hero d-flex justify-content-center align-items-center" data-parallax="scroll" data-image-src='Imgs/IndexPage/hero.jpg'>
            <form className="d-flex tm-search-form">
                <input className="form-control tm-search-input" type="search" aria-label="Search" />
                <button className="btn btn-outline-success tm-search-btn" type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    );
}

function row(title, options) {
    options = [...options, '', '', '', '', '', '', '', '', '', '', '', ''];
    options.length = 9;
    console.log(options);
    return (
        <ul class="list-group list-group-flush">
            <li class="list-group-item row d-flex flex-nowrap">
                <dt className="col-auto d-flex justify-content-center align-items-center">{title}</dt>
                <dd className="col row">
                    {options.map((option) => 
                        option ? <a href="#" className="btn btn-sm mx-1 col text-left">{option}</a> : <div href="#" className="mx-1 col"></div>
                    )}
                </dd>
            </li>
        </ul>
    )
}

function filter() {
    const areas = ['北部', '中部', "南部", "東部", "離島"]
    const citys = {
        north: ["台北市", "新北市", "桃園市", "新竹市", "基隆市", "新竹縣", "宜蘭縣"],
        central: ["台中市", "彰化縣", "雲林縣", "苗栗縣", "南投縣"],
        south: ["高雄市", "台南市", "嘉義市", "嘉義縣", "屏東縣"],
        east: ["台東縣", "花蓮縣"],
        outlyingIslands: ["澎湖縣", "金門縣", "連江縣"]
    }
    return (
        <div className="container card bg-info">
            {/* <ul class="list-group list-group-flush">
                {areas.map((area) =>
                    <li class="list-group-item row d-flex flex-nowrap">
                        <dt className="col-auto">{area}</dt>
                        <dd className="col-auto">
                            {citys.north.map((city) => 
                                <a href="#" className="mx-1">{city}</a>
                            )}
                        </dd>
                    </li>
                )}
            </ul> */}
            {row("位置", ['縣市'])}
            {row("類型", ['不限', '整層住家', "獨立套房", '分租套房', '雅房'])}
            {row("格局", ['不限', '1房', "2房", '3房', '4房以上'])}
            {row("特色", ['不限', '新上架', "可養寵", '可開伙', '有陽台', '有電梯', '衛浴乾溼分離'])}
        </div>
    )
}
export default SelectBar;