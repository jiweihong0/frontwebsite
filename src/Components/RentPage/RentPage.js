
import React from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap"
import Counter from 'react-mui-counter'

const Row = (props) => {
    return (
        <div className="row bg-light py-2 border-top">
            <div className="col col-2 subTitle">{props.required ? <RequiredTag /> : null}{props.name}：</div>
            <div className="col">
                <InputGroup className="mb-3">
                    <InputGroup.Text>First and last name</InputGroup.Text>
                    <FormControl aria-label="First name" />
                    <FormControl aria-label="Last name" />
                </InputGroup>
            </div>
        </div>
    )
}

const Vr = () => {
    return <div style={{width: '1px', backgroundColor: 'lightgray', marginLeft: '10px', marginRight: '10px'}}></div>
}
const RequiredTag = () => {
    return <span style={{color: 'red'}}>*</span>
}

const content = () => {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text>First and last name</InputGroup.Text>
            <FormControl aria-label="First name" />
            <FormControl aria-label="Last name" />
        </InputGroup>
    )
}

const RentPage = () => {
    return (
        <>
            <div className="text-center">
                <Form>
                    <div className="row bg-light py-2 border-top">
                        <div className="col col-2 subTitle">社區名稱：
                        </div>
                        <div className="col col-2">
                            <InputGroup className="">
                                <FormControl aria-label="First name" />
                            </InputGroup>
                        </div>
                    </div>
                    <div className="row bg-light py-2 border-top">
                        <div className="col col-2 subTitle"><RequiredTag />出租地址：</div>
                        <div className="col col-9">
                            <InputGroup>
                                <FormControl aria-label="Last name" placeholder="高雄市" />
                                <FormControl aria-label="Last name" placeholder="橋頭區" />
                                <FormControl aria-label="Last name" placeholder="橋新二路" />
                                <FormControl aria-label="Last name" />
                                <InputGroup.Text>巷</InputGroup.Text>
                                <FormControl aria-label="Last name" />
                                <InputGroup.Text>弄</InputGroup.Text>
                                <FormControl aria-label="Last name" />
                                <InputGroup.Text>衖</InputGroup.Text>
                                <FormControl aria-label="Last name" />
                                <InputGroup.Text>號</InputGroup.Text>
                                <InputGroup.Text>之</InputGroup.Text>
                                <FormControl aria-label="Last name" />
                            </InputGroup>
                        </div>
                    </div>
                    <div className="row bg-light py-2 border-top">
                        <div className="col xmym">
                            <Button variant="outline-primary">下一步</Button>
                        </div>
                    </div>
                    <div className="row bg-light py-2 border-top">
                        <div className="col col-2 subTitle"><RequiredTag />出租樓層：</div>
                        <div className="col col-4">
                            <InputGroup>
                                <InputGroup.Radio aria-label="Radio button for following text input" name="flexRadioDefault" />
                                <InputGroup.Text>整棟出租</InputGroup.Text>
                                <Vr />
                                <InputGroup.Radio aria-label="Radio button for following text input" name="flexRadioDefault" />
                                <FormControl aria-label="Last name" />
                                <InputGroup.Text>樓</InputGroup.Text>
                                <InputGroup.Text>之</InputGroup.Text>
                                <FormControl aria-label="Last name" />
                            </InputGroup>
                        </div>
                        <div className="col col-auto">    
                            <RequiredTag />總樓層：<br /><small>(不含頂樓加蓋)</small>
                        </div>
                        <div className="col col-1">
                            <InputGroup>
                                <FormControl aria-label="Last name" />
                            </InputGroup>
                        </div>
                        <div className="col col-3">
                            <InputGroup>
                                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                <InputGroup.Text>地下室</InputGroup.Text>
                                <Vr />
                                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                <InputGroup.Text>頂樓加蓋</InputGroup.Text>
                            </InputGroup>
                        </div>
                    </div>
                    <Row required={true} name="格局" />
                    <div className="row bg-light py-2 border-top">
                        <div className="col col-2 subTitle"><RequiredTag />房屋坪數：</div>
                        <div className="col col-1">
                            <InputGroup className="">
                                <FormControl aria-label="First name" />
                                <InputGroup.Text>坪</InputGroup.Text>
                            </InputGroup>
                        </div>
                    </div>
                    <div className="row bg-light py-2 border-top">
                        <div className="col col-2 subTitle"><RequiredTag />租金：</div>
                        <div className="col col-2">
                            <InputGroup className="">
                                <FormControl aria-label="First name" />
                                <InputGroup.Text>元/月</InputGroup.Text>
                            </InputGroup>
                        </div>
                        <div className="col col-1 subTitle"><RequiredTag />押金：</div>
                        <div className="col col-1">
                            <Form.Select size="md" style={{paddingTop: "0px", paddingBottom: "0px"}}>
                                <option value="1">無</option>
                                <option value="2">一個月</option>
                                <option value="3">兩個月</option>
                                <option value="3">其它</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div className="row bg-light py-2 border-top">
                        <div className="col col-2 subTitle"><RequiredTag />最短租期：</div>
                        <div className="col col-2">
                            <Form.Select size="md" style={{paddingTop: "0px", paddingBottom: "0px"}}>
                                <option value="1">一個月</option>
                                <option value="2">半年</option>
                                <option value="3">一年</option>
                                <option value="3">兩年</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div className="row bg-light py-2 border-top">
                        <div className="col col-2 subTitle">可入住日期：</div>
                        <div className="col col-1">
                            <InputGroup className="">
                                <FormControl aria-label="First name" />
                            </InputGroup>
                        </div>
                    </div>
                    <div className="row bg-light py-2 border-top">
                        <div className="col col-2 subTitle">開伙：</div>
                        <div className="col col-4">
                            <InputGroup>
                                <InputGroup.Radio aria-label="Radio button for following text input" name="fire" />
                                <InputGroup.Text>可</InputGroup.Text>
                                <Vr />
                                <InputGroup.Radio aria-label="Radio button for following text input" name="fire" />
                                <InputGroup.Text>有條件</InputGroup.Text>
                                <Vr />
                                <InputGroup.Radio aria-label="Radio button for following text input" name="fire" />
                                <InputGroup.Text>不可</InputGroup.Text>
                            </InputGroup>
                        </div>
                    </div>
                    <div className="row bg-light py-2 border-top">
                        <div className="col col-2 subTitle">養寵物：</div>
                        <div className="col col-4">
                            <InputGroup>
                                <InputGroup.Radio aria-label="Radio button for following text input" name="pet" />
                                <InputGroup.Text>可</InputGroup.Text>
                                <Vr />
                                <InputGroup.Radio aria-label="Radio button for following text input" name="pet" />
                                <InputGroup.Text>有條件</InputGroup.Text>
                                <Vr />
                                <InputGroup.Radio aria-label="Radio button for following text input" name="pet" />
                                <InputGroup.Text>不可</InputGroup.Text>
                            </InputGroup>
                        </div>
                    </div>
                </Form>
            </div>
        </>
    )
}
export default RentPage;