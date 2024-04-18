from flask import Flask, request, jsonify, make_response, render_template, session
import jwt
from datetime import datetime, timedelta
from functools import wraps
#from flask_migrate import Migrate
#from models import db



#app instance
app = Flask(__name__)

app.config['SECRET_KEY'] = 'd3be1246382136324c1d7412c70a478a8df75918295db28601ea849543175d35'

users = {
    'user1': 'password1',
    'user2': 'password2'
}

#sqlalchemy configurations
#app.config['SQLALCHEMY_DATABASE URI'] =  'sqlite:///database.db'
#app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = 'False'

#migrate = Migrate(app, db)

#db.init_app(app)

def token_required(func):
    @wraps(func)
    def decorated(*args, **kwargs):
        token = request.args.get('token')
        if not token:
            return jsonify({'message': 'Token is missing!'}), 403
        try:
            payload = jwt.decode(token, app.config['d3be1246382136324c1d7412c70a478a8df75918295db28601ea849543175d35'])
            # You can do something with the payload here if needed
        except jwt.ExpiredSignatureError:
            return jsonify({'message': 'Expired Token!'}), 403
        except jwt.InvalidTokenError:
            return jsonify({'message': 'Invalid Token!'}), 403
        return func(*args, **kwargs)
    return decorated

# Protected route
@app.route('/auth')
@token_required
def auth():
    return "Verified JWT. Welcome!"

#Home
@app.route("/")
def home():
    if not session.get('logged_in'):
        return render_template('login.html')
    else:
        return "Currently logged in!"

#Public
@app.route('/public')
def public():
    return "This is public"

#Login
@app.route("/login", methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
     # Check if username and password are provided
    if not username or not password:
        return jsonify({'message': 'Username or password is missing!'}), 400
    
    # Check if username and password match
    if username in users and users[username] == password:
        session['logged_in'] = True
        token = jwt.encode({'user': username, 'exp': datetime.utcnow() + timedelta(minutes=30)}, app.config['d3be1246382136324c1d7412c70a478a8df75918295db28601ea849543175d35'])
        return jsonify({'token': token.decode('utf-8')})
    else:
        return jsonify({'message': 'Invalid username or password!'}), 401



#@app.route("/about")
#def about():
#    return "hello from about"


if __name__== "__main__":
    app.run(port =5000, debug=True)