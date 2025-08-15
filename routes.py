from flask import Response, json, render_template, redirect, request, url_for, jsonify, session#import flask in order to render html, and redirect user to other pages
import requests
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
    
        
    @app.route('/data/<category>', methods=['GET'])
    def return_data(category):

        match category:

            case 'drinks':
                try:
                    drink = Drink.__new__(Drink)
                    data = drink.retrieve_drinks()
                    return jsonify(data)
        
                except Exception as e:
                    traceback.print_exc()
                    return jsonify({'error': str(e)}), 500      ##INTERNAL SERVER ERROR
            

            case 'food':
                try:
                    food = Food.__new__(Food)
                    data = food.retrieve_food()
                    return jsonify(data)
                except Exception as e:
                    traceback.print_exc()
                    return jsonify({'error': str(e)}), 500  ##INTERNAL SERVER ERROR
                

            case 'rtde':
                try:
                    rtde = RTDE.__new__(RTDE)
                    data = rtde.retrieve_rtde()
                    return jsonify(data)
        
                except Exception as e:
                    traceback.print_exc()
                    return jsonify({'error': str(e)}), 500      ##INTERNAL SERVER ERROR
                

            case 'beans':
                try:
                    bean = Bean.__new__(Bean)
                    data = bean.retrieve_beans()
                    return jsonify(data)
        
                except Exception as e:
                    traceback.print_exc()
                    return jsonify({'error': str(e)}), 500      ##INTERNAL SERVER ERROR
                

            case _:
                return jsonify({'error': 'Invalid Category'}), 404   ##CATEGORY NOT FOUND



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
                return jsonify({'success': True, 'partner':returned_partner}), 200   ##SUCCESS
        
            except Exception as e:
                traceback.print_exc()
                return jsonify({"error": str(e)}), 500       ##INTERNAL SERVER ERROR
        

    
    @app.route('/login/<pin>', methods=['POST'])
    def get_pin(pin):
        try:
            partner = Partner.__new__(Partner)
            session_data = request.get_json()
            data = partner.db_verify_pin(session_data['partner_num'], pin)
    
            if data == True:
                session[str(session_data['drawer'])] = {
                    'name': session_data['name'],
                    'partner_num': session_data['partner_num']
                }
                return jsonify(success=True)
            else:
                return jsonify({'error': 'Unauthorized, Try Again'}), 401        ##UNAUTHORIZED: INVALID CREDENTIALS
            
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500      ##INTERNAL SERVER ERROR

    

    @app.route('/sessions/<partner_num>', methods=['POST'])
    def search_duplicate_sessions(partner_num):
        try:
            for x in session:
                if session[x]['partner_num'] == partner_num: 
                     return jsonify(success=True)
        
            return jsonify(success=False)
        except Exception as e:
            traceback.print_exc()
            return jsonify({'error': str(e)}), 500      ##INTERNAL SERVER ERROR
        
        

    @app.route('/session/<drawer>', methods=['POST'])
    def get_session(drawer):
        try:
            data = session.get(str(drawer))
            if data:
                return jsonify({'success': True}), 200   ##SUCCESS
            else:
                 return jsonify({"error": "Session not found"}), 404   ##SESSION NOT FOUND
        except Exception as e:
            return jsonify({'error': str(e)}), 500      ##INTERNAL SERVER ERROR
        

    @app.route('/session', methods=['GET', 'DELETE'])
    def session_mananger():
        
        match request.method:

            case 'GET':
                try:
                    session_list = {}
                    for x in session:
                        session_list[str(x)] = session.get(x)
                    return jsonify(session_list)
                except Exception as e:
                    traceback.print_exc()
                    return jsonify({'error': str(e)}), 500      ##INTERNAL SERVER ERROR
                

            case 'DELETE':
                try:
                    request_content = request.get_json()
                    session.pop(str(request_content['drawer']), None)
                    return jsonify({'success': True}), 200     ##SUCCESS
                except Exception as e:
                    return jsonify({'error': str(e)}), 500      ##INTERNAL SERVER ERROR
                
    