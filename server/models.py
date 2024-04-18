from datetime import datetime, date 
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()

class TagsList(db.Model):
    __tablename__ = 'tags_list'

    id = db.Column(db.Integer, primary_key=True)
    total_tags = db.Column(db.Integer)
    tags = db.Column(db.String(255))

    def __repr__(self):
        return f"<TagsList {self.id}>"

class Token(db.Model, SerializerMixin):
    __tablename__ = 'tokens'

    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String)
    access_token = db.Column(db.String)  

    def __repr__(self):
        return f'<Token id={self.id}, message={self.message}, access_token={self.access_token}>'

class General(db.Model, SerializerMixin):
    __tablename__ = 'general'

    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String)

    def __repr__(self):
        return f'<General id={self.id}, message={self.message}>'

class HelpMessage(db.Model, SerializerMixin):
    __tablename__ = 'help_messages'

    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String)
    help = db.Column(db.String)

    def __repr__(self):
        return f'<HelpMessage id={self.id}, message={self.message}, help={self.help}>'

class BlogModel(db.Model, SerializerMixin):
    __tablename__ = 'blog_model'

    id = db.Column(db.String, primary_key=True)  # Change data type to match UUID
    title = db.Column(db.String)
    thumbnail = db.Column(db.String)
    content = db.Column(db.String)
    createdon = db.Column(db.DateTime, default=datetime.utcnow)  # UTC timestamp
    tag = db.Column(db.String)
    name = db.Column(db.String)
    authorid = db.Column(db.String)

    def __repr__(self):
        return f'<BlogModel id={self.id}, title={self.title}, author={self.name}>'

class BlogData(db.Model):
    __tablename__ = 'blog_data'

    id = db.Column(db.Integer, primary_key=True)
    Total_Blogs = db.Column(db.Integer)
    blog_model_id = db.Column(db.Integer, db.ForeignKey('blog_model.id'))
    blogs = db.relationship('BlogModel', backref='blog_data', lazy=True)

    def __repr__(self):
        return f'<BlogData id={self.id}, Total_Blogs={self.Total_Blogs}>'

class RegisterModel(db.Model, SerializerMixin):
    __tablename__ = 'register_model'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String)
    password = db.Column(db.String)
    isverified = db.Column(db.Boolean, default=False)
    createdon = db.Column(db.Date, default=date.today)

    def __repr__(self):
        return f'<RegisterModel id={self.id}, email={self.email}, isverified={self.isverified}>'

class UserModel(db.Model, SerializerMixin):
    __tablename__ = 'user_model'

    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String)
    lastname = db.Column(db.String)
    dob = db.Column(db.Date)
    profileurl = db.Column(db.String)

    def __repr__(self):
        return f'<UserModel id={self.id}, firstname={self.firstname}, lastname={self.lastname}>'

class ProfileModel(db.Model, SerializerMixin):
    __tablename__ = 'profile_model'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String)
    isverified = db.Column(db.Boolean, default=False)
    createdon = db.Column(db.Date, default=date.today)
    firstname = db.Column(db.String)
    lastname = db.Column(db.String)
    dob = db.Column(db.Date)
    profileurl = db.Column(db.String)

    def __repr__(self):
        return f'<ProfileModel id={self.id}, email={self.email}, isverified={self.isverified}>'

class AuthorModel(db.Model, SerializerMixin):
    __tablename__ = 'author_model'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String)
    isverified = db.Column(db.Boolean, default=False)
    createdon = db.Column(db.Date, default=date.today)
    firstname = db.Column(db.String)
    lastname = db.Column(db.String)
    dob = db.Column(db.Date)
    profileurl = db.Column(db.String)

    def __repr__(self):
        return f'<AuthorModel id={self.id}, email={self.email}, isverified={self.isverified}>'

class AuthorList(db.Model):
    __tablename__ = 'author_list'

    id = db.Column(db.Integer, primary_key=True)
    total = db.Column(db.Integer)
    author_model_id = db.Column(db.Integer, db.ForeignKey('author_model.id'))
    authors = db.relationship('AuthorModel', backref='author_list', lazy=True)

    def __repr__(self):
        return f'<AuthorList id={self.id}, total={self.total}>'

class AuthorProfile(db.Model):
    __tablename__ = 'author_profile'

    id = db.Column(db.Integer, primary_key=True)
    profile_model_id = db.Column(db.Integer, db.ForeignKey('profile_model.id'))
    profile = db.relationship('ProfileModel', backref='author_profile')

    blog_data_id = db.Column(db.Integer, db.ForeignKey('blog_data.id'))
    blogs = db.relationship('BlogData', backref='author', lazy=True)

    def __repr__(self):
        return f'<AuthorProfile id={self.id}>'
