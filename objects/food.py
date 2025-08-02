
from objects.db import DB


class Food:

    def __new__(cls,*args,**kwargs):
        return super().__new__(cls)

    def __init__(self, item_name, category, warmed, abrev, identifier, quantity, price):
        self.item_name = item_name
        self.category = category
        self.warmed = warmed 
        self.abrev = abrev
        self.identifier = identifier
        self.quantity = quantity
        self.price = price
        self.collection_name = 'Food'

    def db_select_item(self,category_name,abrev):
        db = DB()
        returned_item = db.select_item('Food',category_name,abrev)
        if returned_item:
            data = returned_item['items'][0]
            item = Food(data['item_name'],data['category'],data['warmed'],data['identifier'],data['quantity'],data['price'])
            return item
        else:
            return KeyError('Item Not Found')
        
    
    def db_insert_item(self):
        db = DB()
        db.insert_item(self.collection_name,self.category,{'item_name':self.item_name,'category':self.category,'warmed':self.warmed,'abrev':self.abrev,'identifier':self.identifier,'quantity':self.quantity,'price':self.price})


    def db_delete_item(self):
        db = DB()
        db.delete_item(self.collection_name,self.category,self.abrev)

    def retrieve_food(self):
        db = DB()
        data = db.load_categories('Food')
        food = {}

        for x in data:
            food[x['category']] = x['items']
        return food if food else False

    

       
if __name__ == '__main__':
    pass