import { Request, Response, NextFunction } from "express";
import { convert, getallCurrencies} from "./currencyController";


export default [
    {
        path: '/currencies/getall',
        method: 'get',
        handler: [
            async (req: Request, res: Response, next: NextFunction) => {
                try {
                    let result = await getallCurrencies();
                    res.status(200).send(result);
                } catch (e) {
                    next(e);
                }
            },
        ],
    },
    {
        path: '/currency/convert',
        method: 'post',
        handler: [
            async (req: Request, res: Response, next: NextFunction) => {
                try {
                    let result = await convert(req.body);
                    res.status(200).send(result);
                } catch (e) {
                    next(e);
                }
            },
        ],
    }

]