const HATEOAS = async(entity, data) =>{
    // console.log(data)
    const result = data.map((item) =>{
        return {
            name:   `${item.nombre}`,
            href: `/joyas/${entity}/${item.id}`  
        }
    }).slice(0,9)

    // console.log(result)
    const totalJoyas = data.length
    const totalStock = data.reduce((acc, item) => acc + item.stock, 0);

    const dataWithHateoas = {
        totalJoyas,
        totalStock,
        result
    }
    console.log(dataWithHateoas)
    return dataWithHateoas
}
export default HATEOAS