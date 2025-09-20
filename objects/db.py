import certifi
from pymongo import MongoClient
import os

class DB:

### RETURN CONNECTION TO DB ###
    def __init__(self):
        try:
            url = 'mongodb+srv://Cluster49758:cpGZ1xeck1EIQMbA@cluster49758.fu3djlb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster49758'
            client = MongoClient(
                url, 
                tls=True,
                tlsCAFile=certifi.where()
                )
            self.conn = client['POSProject'] # connect to POSProject database
            print('DB Connection Successful')

        except Exception as err:
            raise ConnectionError("Failed to connect to DB") from err
        

        
## PRODUCT FUNCTIONS START ###
    def update_category_quantity(self, collection_name, category_name): ## updates quantity field of category based on number of items in that category
       current_collection = self.conn[collection_name] ##select collection
       current_category = current_collection.find_one({'category':category_name}) ## find category
       new_quantity = len(current_category['items']) ##get current quantity of items in category
       result = current_collection.update_one({'category':category_name},{'$set':{'quantity': new_quantity}}) ## update quantity field and store boolean result
       return True if result.modified_count == 1 else False ## return true if update was successful

    def select_item(self,collection_name, category_name ,abrev): ## returns item from category based on abreviation
        current_collection = self.conn[collection_name] ##select collection
        retrieved_item = current_collection.find_one({'category':category_name},{'items':{'$elemMatch':{'abrev':abrev}}})  ## find item in category based on abrev
        return retrieved_item if retrieved_item else False

    def insert_item(self,collection_name, category_name, item): 
        current_collection = self.conn[collection_name]
        result = current_collection.update_one({'category':category_name},{"$push":{'items':item}})
        if result.modified_count == 1:
            self.update_category_quantity(collection_name,category_name)
            return True if result == True else False
        else: 
            return False

    def delete_item(self,collection_name, category_name,abrev):
         current_collection = self.conn[collection_name]
         result = current_collection.update_one({'category':category_name},{'$pull':{'items':{'abrev':abrev}}})
         if result.modified_count == 1:
            self.update_category_quantity(collection_name,category_name)
            return True if result == True else False
         else:
             return False
         
    def load_category_items(self,collection_name, category_name):
        current_collection = self.conn[collection_name]
        data = current_collection.find_one({'category':category_name})
        items = data['items']
        return items if items else False
    
    def load_categories(self,collection_name):
        current_collection = self.conn[collection_name]
        categories_cursor = current_collection.find()
        categories = list(categories_cursor)
        return categories if categories else False
    
    def update_item_quantity(self, collection_name, category_name, abrev, new_quan):
        current_collection = self.conn[collection_name]
        item = current_collection.find_one({'category':category_name})
        items = item['items']
        for item in items:
            if item['abrev'] == abrev:
                item['quantity'] = new_quan
        current_collection.update_one({'category':category_name},{'$set':{'items':items}})



## PARTNER FUNCTIONS START ###
    def insert_partner(self,partner):
        result = self.validate_partner_info(partner) ##need to finish validate_partner_info()
        if result == True:
            current_collection = self.conn['Partners']
            current_collection.insert_one({'partner_num':partner.partner_num, 'pin':partner.pin, 'first_name':partner.first_name, 'last_name':partner.last_name, 'phone':partner.phone, 'email':partner.email, 'access':partner.access, 'assigned_drawer':partner.assigned_drawer})
            return True
        else:
            return False
    
    def find_partner(self,partner_num):
        print('DB find_partner Accessed')
        current_collection = self.conn['Partners']
        partner = current_collection.find_one({'partner_num':partner_num})
        if partner:
            return partner
        else:
            return False
    
    def delete_partner(self,partner_num):
        current_collection = self.conn['Partners']
        result = current_collection.delete_one({'partner_num':partner_num})
        return True if result.deleted_count == 1 else False

    def verify_pin(self, partner_num, pin):
        current_collection = self.conn['Partners']
        partner = current_collection.find_one({'partner_num':partner_num})
        return True if partner['pin'] == pin else False
    
    def verify_partner_num(self, partner_num):
        current_collection = self.conn['Partners']
        partner = current_collection.find_one({'partner_num':partner_num})
        return partner

    def validate_partner_info(self,partner):
        return True


## ORDER FUNCTIONS START ###

    def insert_order(self, order):
        current_collection = self.conn['Orders']
        current_category = current_collection.find({'status':order.status})
        order = current_category.insert_one({'orderID':order.orderID, 'name':order.name, 'count':order.item_count, 'items':order.items, 'method':order.method, 'status': order.status, 'total':order.total})
        print(order)

    def delete_order(status, orderID):
        pass
               