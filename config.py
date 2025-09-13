from dotenv import load_dotenv #import in order to read .env file data
import os #import for paths


def set_app_config(app): # methods sets config of app object passed 
    load_dotenv() #read .env data
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY') or "SeCrEt_KeY"; # sets encryption key for app
    app.config['DEBUG'] = True
    app.config['HOST'] = '0.0.0.0'
    

def print_app_config(app): # method prints app config
    print('\n--- APP CONFIG ---')
    print(f'Secret Key: {app.config['SECRET_KEY']}')
    print(f'Debug: {app.config['DEBUG']}')
    print(f'Host: {app.config['HOST']}\n')