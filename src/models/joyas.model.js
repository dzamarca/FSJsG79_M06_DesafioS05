import format from 'pg-format'
import pool from '../../db/config.js'
import postQuery from '../helpers/joyas.filter.js'

export const limitFormatModel = async(
    order_by= 'id_ASC',
    limits = 40,
    page=0
)=>{
    const [attribute, direction] = order_by.split('_')
    const offset = page * limits
    const formatQuery = format(
        'SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s',
        attribute,
        direction,
        limits,
        offset
    )
    console.log(formatQuery)
    const result = await pool.query(formatQuery)
    return result.rows
}


export const joyasFilterModel = async(filters)=>{
    const {query, values} = postQuery('inventario', filters)
    const result = await pool.query(query, values)
    // console.log('MODEL SQL =>', query, values)
    return result.rows
}