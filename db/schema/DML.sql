SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s

SELECT * FROM inventario  WHERE precio >= $1 AND precio <= $2 AND categoria = $3 AND metal = $4