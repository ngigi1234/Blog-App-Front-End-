from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
import datetime
from models import BlogModel, db

app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

class Articles(db.Model):
    __tablename__ = 'Articles'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(25))
    body = db.Column(db.String(25))
    date = db.Column(db.DateTime, default=datetime.datetime.now)

    def __init__(self, title, body):
        self.title = title
        self.body = body

def article_to_dict(article):
    return {
        'id': article.id,
        'title': article.title,
        'body': article.body,
        'date': article.date.strftime('%Y-%m-%d %H:%M:%S')
    }

@app.route('/create_blog', methods=['POST'])
def create_blog():
    data = request.json  
    new_blog = BlogModel(
        id=data['id'],
        title=data['title'],
        thumbnail=data['thumbnail'],
        content=data['content'],
        tag=data['tag'],
        name=data['name'],
        authorid=data['authorid']
    )
    db.session.add(new_blog)
    db.session.commit()
    return 'Blog created successfully'

if __name__ == '__main__':
    app.run(debug=True)

@app.route('/blogs', methods=['GET'])
def get_blogs():
    blogs = BlogModel.query.all()
    blog_data = [{'title': blog.title, 'createdon': blog.createdon} for blog in blogs]
    return {'blogs': blog_data}

@app.route('/update_blog', methods=['PUT'])
def update_blog():
    data = request.json  
    blog_to_update = BlogModel.query.filter_by(id=data['id']).first()
    if blog_to_update:
        blog_to_update.title = data['title']
        db.session.commit()
        return 'Blog updated successfully'
    return 'Blog not found', 404

@app.route('/delete_blog', methods=['DELETE'])
def delete_blog():
    blog_id = request.args.get('id')
    blog_to_delete = BlogModel.query.filter_by(id=blog_id).first()
    if blog_to_delete:
        db.session.delete(blog_to_delete)
        db.session.commit()
        return 'Blog deleted successfully'
    return 'Blog not found', 404

@app.route('/get', methods=['GET'])
def get_articles():
    all_articles = Articles.query.all()
    if not all_articles:
        return jsonify([])  # Return an empty list if there are no articles

    results = [article_to_dict(article) for article in all_articles]
    return jsonify(results)


@app.route('/get/<int:id>/', methods=['GET'])
def get_article(id):
    article = Articles.query.get(id)
    if not article:
        return jsonify({'error': 'Article not found'}), 404

    return jsonify(article_to_dict(article))

@app.route('/add', methods=['POST'])
def add_article():
    title = request.json.get('title')
    body = request.json.get('body')

    article = Articles(title=title, body=body)
    db.session.add(article)
    db.session.commit()
    db.create_all()


    return jsonify(article_to_dict(article))

@app.route('/update/<int:id>/', methods=['PUT'])
def update_article(id):
    article = Articles.query.get(id)
    if not article:
        return jsonify({'error': 'Article not found'}), 404

    article.title = request.json.get('title', article.title)
    article.body = request.json.get('body', article.body)
    db.session.commit()

    return jsonify(article_to_dict(article))

@app.route('/delete/<int:id>/', methods=['DELETE'])
def delete_article(id):
    article = Articles.query.get(id)
    if not article:
        return jsonify({'error': 'Article not found'}), 404

    db.session.delete(article)
    db.session.commit()

    return jsonify(article_to_dict(article))


if __name__ == '__main__':
    app.run(debug=True)