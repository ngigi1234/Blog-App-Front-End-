from flask import Flask
from datetime import datetime
from faker import Faker
from models import db, TagsList, Token, General, HelpMessage, BlogModel, BlogData, RegisterModel, UserModel, ProfileModel, AuthorModel, AuthorList, AuthorProfile
from app import app

fake = Faker()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

def seed_tags():
    with app.app_context():
        db.create_all()
        tags_list = TagsList(total_tags=5, tags='tag1,tag2,tag3')
        db.session.add(tags_list)
        db.session.commit()
        print("Tags seeded successfully.")

def seed_tokens():
    with app.app_context():
        for _ in range(5):
            token = Token(message=fake.sentence(), access_token=fake.uuid4())  # Updated to access_token
            db.session.add(token)
        db.session.commit()
        print("Tokens seeded successfully.")

def seed_general():
    with app.app_context():
        general_message = General(message="Hello, world!")
        db.session.add(general_message)
        db.session.commit()
        print("General message seeded successfully.")

def seed_help_messages():
    with app.app_context():
        help_messages = [
            HelpMessage(message="Help message 1", help="Explanation 1"),
            HelpMessage(message="Help message 2", help="Explanation 2"),
            HelpMessage(message="Help message 3", help="Explanation 3"),
        ]
        db.session.bulk_save_objects(help_messages)
        db.session.commit()
        print("Help messages seeded successfully.")

def seed_blogs():
    with app.app_context():
        for _ in range(10):
            paragraphs = fake.paragraphs(nb=3)
            content = '\n\n'.join(paragraphs)
            blog = BlogModel(
                id=fake.uuid4(),
                title=fake.sentence(),
                thumbnail=fake.image_url(),
                content=content,
                createdon=datetime.utcnow(),
                tag="tag1",
                name=fake.name(),
                authorid=fake.uuid4()
            )
            db.session.add(blog)
        db.session.commit()

def seed_register_models():
    with app.app_context():
        for _ in range(5):
            register = RegisterModel(
                email=fake.email(),
                password=fake.password(),
                isverified=False,
                createdon=fake.date_this_year()
            )
            db.session.add(register)
        db.session.commit()
        print("Register models seeded successfully.")

def seed_users():
    with app.app_context():
        for _ in range(10):
            user = UserModel(
                firstname=fake.first_name(),
                lastname=fake.last_name(),
                dob=fake.date_of_birth(),
                profileurl=fake.image_url()
            )
            db.session.add(user)
        db.session.commit()
        print("Users seeded successfully.")

def seed_profiles():
    with app.app_context():
        for _ in range(5):
            profile = ProfileModel(
                email=fake.email(),
                isverified=True,
                createdon=fake.date_this_year(),
                firstname=fake.first_name(),
                lastname=fake.last_name(),
                dob=fake.date_of_birth(),
                profileurl=fake.image_url()
            )
            db.session.add(profile)
        db.session.commit()
        print("Profiles seeded successfully.")

def seed_authors():
    with app.app_context():
        for _ in range(5):
            author = AuthorModel(
                email=fake.email(),
                isverified=True,
                createdon=fake.date_this_year(),
                firstname=fake.first_name(),
                lastname=fake.last_name(),
                dob=fake.date_of_birth(),
                profileurl=fake.image_url()
            )
            db.session.add(author)
        db.session.commit()
        print("Authors seeded successfully.")

def seed_author_lists():
    with app.app_context():
        author_list = AuthorList(total=5)
        db.session.add(author_list)
        db.session.commit()
        print("Author list seeded successfully.")


def seed_author_profiles():
    with app.app_context():
        profile = ProfileModel.query.first()
        blog_data = BlogData.query.first()  
        if profile is None or blog_data is None:
            print("Error: No existing profile or blog data found.")
            return

        for _ in range(5):
            author_profile = AuthorProfile(
                profile=profile,
                blog_data=blog_data
            )
            db.session.add(author_profile)
        db.session.commit()
        print("Author profiles seeded successfully.")

if __name__ == "__main__":
    seed_tags()
    seed_tokens()
    seed_general()
    seed_help_messages()
    seed_blogs()
    seed_register_models()
    seed_users()
    seed_profiles()
    seed_authors()
    seed_author_lists()
    seed_author_profiles()
