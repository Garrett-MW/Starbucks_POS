
from objects.db import DB


class Bean():

    def __new__(cls, *args, **kwargs):
        return super().__new__(cls)
    
    def __init__(self,item_name,category,abrev,quantity,price):
        self.item_name = item_name
        self.category = category
        self.abrev = abrev
        self.quantity = quantity
        self.price = price
        self.collection_name = 'Beans'
    
    def db_select_item(self,category_name,abrev):
        db = DB()
        returned_item = db.select_item('Beans',category_name,abrev)
        if returned_item:
            data = returned_item['items'][0]
            item = Bean(data['item_name'],data['category'],data['abrev'],data['quantity'],data['price'])
            return item
        else:
            return False
        
    def db_insert_item(self):
        db = DB()
        db.insert_item(self.collection_name,self.category,{'item_name':self.item_name,'category':self.category,'abrev':self.abrev,'quantity':self.quantity,'price':self.price})
        
    def db_delete_item(self):
        db = DB()
        db.delete_item(self.collection_name,self.category,self.abrev)

    def retrieve_beans(self):
        db = DB()
        data = db.load_categories('Beans')
        beans = {}
        for x in data:
            beans[x['category']] = x['items']
        return beans if beans else False
        
    
if __name__ == '__main__':
   pass

