var db = require('./dbConfig.js'); // This might change.

// This is where your database query functions are defined!

const testQueries = {
    getSomething: function (callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                return callback(err, null)
            } else {
                let sql =
                    `
                SELECT * from test
                `
                conn.query(sql, function (err, result) {
                    if (err) {
                        return callback(err, null)
                    } else {
                        return callback(null, result)
                    }
                })
            }
        })
    },
    postSomething: function (something, callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                return callback(err, null)
            } else {

                let sql = `
                INSERT INTO test (bruh) VALUES (?);
                `
                // Inserts the value of "something" into the "test" table under the "bruh" column.

                conn.query(sql, [something], function (err, result) {
                    if (err) {
                        return callback(err, null)
                    } else {
                        returnValue = { "Affected Rows": result.affectedRows.toString() }
                        return callback(null, returnValue)
                    }
                })
            }
        })
    },
    putSomething: function (ID, colum1, colum2, colum3, callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
          if (err) {
            console.log(err);
            return callback(err, null);
          } else {
            console.log("no err");
            let sql = `
                    UPDATE foodmenu SET colum1 = ?, colum2 = ?, colum3 = ? WHERE id = ?;                `;
            conn.query(
              sql,
              [colum1, colum2, colum3, foodID],
              function (err, result) {
                if (err) {
                  console.log(err);
                  return callback(err, null);
                } else {
                  returnValue = { "Affected Rows": result.affectedRows.toString() };
                  return callback(null, returnValue);
                }
              }
            );
          }
        });
      },
}

module.exports = testQueries; // Change the name to match line 5.