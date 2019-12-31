import { createPool, Pool, Promise } from 'mysql2'
 
const connection= createPool({
    host: 'localhost',
    user: 'root',
    password: 'Password@1',
    database: 'ausdb',
    connectionLimit: 10
})
const db = connection.promise();
export { db }

