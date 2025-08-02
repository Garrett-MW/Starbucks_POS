from flask import Response, json, render_template, redirect, request, url_for, jsonify, session#import flask in order to render html, and redirect user to other pages
from objects.order import Order #import order object 
import datetime #import datetime in order to set a date and time for each order 
from objects.partner import Partner
from objects.food import Food
from objects.drink import Drink
from objects.rtde import RTDE
from objects.bean import Bean
import traceback


def set_app_routes(app):  #method declares routes for app parameter passed


    @app.route('/') #index route
    def login():
        return render_template('login.html')


    
    @app.route('/order')
    def order():
            return render_template('main.html')

    
    @app.route('/login/<partner_num>/<drawer>', methods=['POST'])
    def get_id(partner_num, drawer):  
        total_sessions = len(session)
        if (total_sessions == 2):
            return jsonify({'error':'no more sessions allowed'}), 429       ##TOO MANY REQUESTS: MAX SESSIONS
        else:
            try:
                partner = Partner.__new__(Partner)
                returned_partner = partner.db_verify_partner_num(str(partner_num))
                if not returned_partner:
                    return jsonify({"error": "Partner not found"}), 404         ##RESOURCE NOT FOUND
                returned_partner['assigned_drawer'] = {'drawer':str(drawer)}
                return(redirect(url_for('create_session', partner=json.dumps(returned_partner), drawer=drawer)))
        
            except Exception as e:
                traceback.print_exc()
                return jsonify({"error": str(e)}), 500       ##INTERNAL SERVER ERROR
        

    
    @app.route('/login/<partner_num>/<pin>/<drawer>', methods=['POST'])
    def get_pin(partner_num, pin, drawer):
        try:
            partner = Partner.__new__(Partner)
            data = partner.db_verify_pin(str(partner_num), str(pin))
            if data == True:
                return jsonify(success=True)
            else:
                session.pop(str(drawer), None)
                return jsonify({'error': 'Unauthorized, Try Again'}), 401        ##UNAUTHORIZED: INVALID CREDENTIALS
            
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500      ##INTERNAL SERVER ERROR
        

        
    @app.route('/logout/<drawer>', methods=['DELETE'])
    def delete_session(drawer):
        try:
            session.pop(str(drawer), None)
            return jsonify({'success': True}), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 500      ##INTERNAL SERVER ERROR
        
    @app.route('/session/<drawer>', methods=['POST'])
    def get_session(drawer):
        try:
            data = session.get(str(drawer))
            if data:
                return jsonify({'success': True}), 200
            else:
                 return jsonify({"error": "Session not found"}), 404 
        except Exception as e:
            return jsonify({'error': str(e)}), 500      ##INTERNAL SERVER ERROR
    


    @app.route('/data/food', methods=['GET'])
    def return_food():
        try:
            food = Food.__new__(Food)
            data = food.retrieve_food()
            return jsonify(data)
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500
        


    @app.route('/data/beans', methods=['GET'])
    def return_beans():
        try:
            bean = Bean.__new__(Bean)
            data = bean.retrieve_beans()
            return jsonify(data)
        
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500      ##INTERNAL SERVER ERROR
        


    @app.route('/data/rtde', methods=['GET'])
    def return_rtde():
        try:
            rtde = RTDE.__new__(RTDE)
            data = rtde.retrieve_rtde()
            return jsonify(data)
        
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500      ##INTERNAL SERVER ERROR



    @app.route('/data/drinks', methods=['GET'])
    def return_drinks():
        try:
            drink = Drink.__new__(Drink)
            data = drink.retrieve_drinks()
            return jsonify(data)
        
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500      ##INTERNAL SERVER ERROR
        


    @app.route('/sessions', methods=['POST'])
    def get_all_sessions():
        try:
            sessions = {}
            for x in session:
                sessions[str(x)] = session.get(x)
            return jsonify(sessions)
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500      ##INTERNAL SERVER ERROR
    
    

    @app.route('/session/<partner>/<drawer>') ##FIX SO INFO ISNT SENT THROUGH TERMINAL 
    def create_session(partner, drawer):
        try:
            partner_dict = json.loads(partner)
            for key in session:
                if session[key]['partner_num'] == partner_dict['partner_num']:
                    return jsonify({'error': 'session already exists'}), 409        ##CONFLICT ERROR
            session[str(drawer)] = {'name':f'{partner_dict['first_name']} {partner_dict['last_name']}', 'partner_num': f'{partner_dict['partner_num']}'}
            return jsonify(success=True) 
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500      ##INTERNAL SERVER ERROR

    
    