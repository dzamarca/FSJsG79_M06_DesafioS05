import HATEOAS from "../helpers/joyas.hateoas.js"
import { joyasFilterModel, limitFormatModel } from "../models/joyas.model.js"


export const getOrderAndLimitHateoas= async(req, res)=>{
    try {
        const {order_by, limits, page} = req.query
        const result = await limitFormatModel(order_by, limits, page)
        const hateoasData = await HATEOAS('joya',result)
        res.status(200).json({joyas: hateoasData})
    } catch (error) {
        res.status(500).json({error:'Error al procesar la solicitud'})
        console.error('Error =>',error)
    }
}

export const joyasFilter = async (req, res) =>{
    try {
        const filters = req.query
        const result = await joyasFilterModel(filters)
        res.status(200).json({joyas: result})
    } catch (error) {
        res.status(500).json({error: 'Error al procesar la solicitud'})
        console.error('ERROR =>', error)
    }
}