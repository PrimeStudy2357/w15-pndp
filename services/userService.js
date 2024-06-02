const { getDBInstance } = require("../db");

/** 이름 정보를 받아 User 테이블에 신규 유저 추가 */
function addNewUser(userName) {
    const db = getDBInstance();

    // 쿼리 준비 및 실행
    let stmt = db.prepare("INSERT INTO user VALUES (NULL, ?)");
    stmt.run(userName);
    stmt.finalize();

    // 사용 후 직접 연결을 닫아줘야 함
    db.close();
}

module.exports = {
    addNewUser,
};