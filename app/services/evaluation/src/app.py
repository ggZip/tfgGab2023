from flask import Flask
from routes import register_routes
from models import db

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://gabuntu:gabuntuPassword@db:5432/mydb"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)

register_routes(app)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3004)
