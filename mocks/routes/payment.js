/**
 *  결제 서비스 테스트를 위한 mock server
 * @type {[{msg: string, name: string, type: string, status: string},{msg: string, name: string, type: string, status: string},{msg: string, name: string, type: string, status: string}]}
 */

const pay = [
    {
        type : "card",
        name : "카드",
        status : "200",
        msg : "결제 성공입니다."
    },
    {
        type : "virtual",
        name : "가상계좌",
        status : "200",
        msg : "결제 성공입니다."
    },
    {
        type : "account",
        name : "계좌이체",
        status : "200",
        msg : "결제 성공입니다."
    }
];

const paycancel = [
    {
        type : "card",
        name : "카드",
        status : "200",
        msg : "결제 취소입니다."
    },
    {
        type : "virtual",
        name : "가상계좌",
        status : "200",
        msg : "결제 취소입니다."
    },
    {
        type : "account",
        name : "계좌이체",
        status : "200",
        msg : "결제 취소입니다."
    }
];

module.exports = [
    {
        id: "post-pay",
        url : "/mocks/pay/:payType/:amount",
        method : "POST",
        variants: [
            {
                id:"test",
                type: "middleware",
                options : {
                    middleware : (req,res) => {
                        const payType = req.params.payType;
                        const amount = req.params.amount;
                        const checkType = pay.find((data)=> data.type === payType);
                        if(checkType){
                            var data = {
                                amount : amount,
                                result : checkType
                            }
                            res.status(200);
                            res.send(data);
                        }else{
                            res.status(500);
                            res.send({
                                status : "00",
                                msg : "결제 실패하였습니다",
                            });
                        }
                    }
                }
            }
        ]
    },
    {
        id: "post-payCancel",
        url : "/mocks/cancel/:payType/:amount",
        method : "POST",
        variants: [
            {
                id:"test",
                type: "middleware",
                options : {
                    middleware : (req,res) => {
                        const payType = req.params.payType;
                        const amount = req.params.amount;
                        const checkType = paycancel.find((data)=> data.type === payType);
                        if(checkType){
                            var data = {
                                amount : amount,
                                result : checkType
                            }
                            res.status(200);
                            res.send(data);
                        }else{
                            res.status(500);
                            res.send({
                                status : "00",
                                msg : "결제취소 실패하였습니다",
                            });
                        }
                    }
                }
            }
        ]
    }
]