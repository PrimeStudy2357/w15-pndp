const sqlite3 = require("sqlite3").verbose();

/** SQLite DB 위치 */
const DATABASE = "myDB.db";

/** 데이터베이스 테이블 초기화 함수 */
function initDB() {
    const db = new sqlite3.Database(DATABASE, (err) => {
        if (err) {
            console.error(err.message);
            return;
        }
    });

    // USER 테이블 생성 (존재X)
    db.run(
        "CREATE TABLE IF NOT EXISTS user (userID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)"
    );

    db.close((err) => {
        if(err) {
            console.error(err.message);
        }

        console.log("SQLite Database initiated.");
    });
}

/** DB 연결 인스턴스를 생성하는 함수 */
function getDBInstance() {
    return new sqlite3.Database(DATABASE, (err) => {
        if(err) {
            console.error(err.message);
            return;
        }
    });
}

module.exports = {
    initDB,
    getDBInstance,
};