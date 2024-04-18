#!/usr/bin/env python3

from app import app
from models import db, TagsList, Token, General, HelpMessage, BlogModel, BlogData, RegisterModel, UserModel, ProfileModel, AuthorModel, AuthorList, AuthorProfile



if __name__ == '__main__':
    
    with app.app_context():
        import ipdb; ipdb.set_trace()