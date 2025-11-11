import promisePool from '../../utils/database.js';



const listAllUsers = async () => {
  const [rows] = await promisePool.query('SELECT * FROM wsk_users');
  console.log('rows', rows);
  return rows;
};


const findUserById = async (id) => {
  const [rows] = await promisePool.execute('SELECT * FROM wsk_users WHERE user_id = ?', [id]);
  console.log('rows', rows);
  if(rows.length === 0){
    return false;
  }
  return rows[0];
};


const addUser = async (user) => {
  try{
    const {name, username, email, role, password} = user;
  const sql = `INSERT INTO wsk_users (name, username, email, role, password)
               VALUES (?, ?, ?, ?, ?)`;
  const params = [name, username, email, role, password];
  const rows = await promisePool.execute(sql, params);
  console.log('rows', rows);
  if(rows[0].affectedRows === 0){
    return false;
  }
  return {user_id: rows[0].insertId};

  }
  catch (error){
    console.error("Database error in addUser:", error);
    throw error;
  }
  
};


const modifyUser = async (user, id) => {
  const sql = promisePool.format(`UPDATE wsk_users SET ? WHERE user_id = ?`, [user, id]);
  const rows = await promisePool.execute(sql);
  console.log('rows', rows);
  if(rows[0].affectedRows === 0){
    return false;
  }
  return {message: 'success'};
};


const removeUser = async (id) => {
  const connection = await promisePool.getConnection();
  try {
    await connection.beginTransaction();

    // 1️⃣ Delete cats owned by this user first
    await connection.execute('DELETE FROM wsk_cats WHERE owner = ?', [id]);

    // 2️⃣ Then delete the user
    const [result] = await connection.execute('DELETE FROM wsk_users WHERE user_id = ?', [id]);

    if (result.affectedRows === 0) {
      await connection.rollback();
      return false;
    }

    // 3️⃣ Commit if everything went fine
    await connection.commit();
    return { message: 'success' };
  } catch (err) {
    await connection.rollback();
    console.error('Transaction error:', err);
    throw err;
  } finally {
    connection.release();
  }
};



/*
const removeUserOLD = async (id) => {
  const [rows] = await promisePool.execute('DELETE FROM wsk_users where user_id = ?', [id]);
  console.log('rows', rows);
  if(rows.affectedRows === 0){
    return false;
  }
  return {message: 'success'};
};
*/


export {listAllUsers, findUserById, addUser, modifyUser, removeUser};