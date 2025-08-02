from objects.db import DB


class RTDE:

    def __new__(cls,*args,**kwargs):
        return super().__new__(cls)
    
    def __init__(self, item_name, category, identifier, abrev, quantity, price):
        self.item_name = item_name
        self.category = category
        self.identifier = identifier
        self.abrev = abrev
        self.quantity = quantity
        self.price = price
        self.collection_name = 'RTDE'

    def db_select_item(self,category_name,abrev):
        db = DB()
        returned_item = db.select_item('RTDE',category_name,abrev)
        if  returned_item:
           data = returned_item['items'][0]
           item = RTDE(data['item_name'],data['category'],data['identifier'],data['abrev'],data['quantity'],data['price'])
           return item
        else:
            return KeyError('Item Not Found')
        
    def db_insert_item(self):
        db = DB()
        db.insert_item(self.collection_name,self.category,{'item_name':self.item_name,'category':self.category,'identifier':self.identifier,'abrev': self.abrev,'quantity':self.quantity,'price':self.price})

    def db_delete_item(self):
        db = DB()
        db.delete_item(self.collection_name,self.category,self.abrev)

    def retrieve_rtde(self):
        db = DB()
        data = db.load_categories('RTDE')
        rtde = {}
        for x in data:
            rtde[x['category']] = x['items']
        return rtde if rtde else False


if __name__ == '__main__':
   pass



    
    

