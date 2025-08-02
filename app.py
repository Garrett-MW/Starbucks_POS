from flask import Flask # import Flask in order to create main app object
from routes import set_app_routes # import method in order to set routes
from config import set_app_config # import method in order to set config


app = Flask(__name__) # create app 
set_app_config(app) # set config
set_app_routes(app) #set routes


if __name__ == "__main__":	
	app.run() #run app
    

    
