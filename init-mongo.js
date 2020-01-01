
mongo -- "$MONGO_INITDB_DATABASE" <<EOF

var rootUser = process.env.MONGO_INITDB_ROOT_USERNAME;
var rootPassword = process.env.MONGO_INITDB_ROOT_PASSWORD;
var User = process.env.MONGO_INITDB_USERNAME;
var Password = process.env.MONGO_INITDB_PASSWORD;
var admin = db.getSiblingDB('admin');
admin.auth(rootUser, rootPassword);

db.createUser(
        {
            user: User,
            pwd: Password,
            roles: [
                {
                    role: "readWrite",
                    db: Database
                }
            ]
        }
)
EOF