from flask import Flask
from routes.routes import register_routes 
from commons.models import db
from config.config import Config

app = Flask(__name__)

app.config.from_object(Config)
db.init_app(app)

register_routes(app)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3004)
