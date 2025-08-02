from objects.db import DB


class Drink():

    def __new__(cls, *args, **kwargs):
        return super().__new__(cls)
    
    def __init__(self, item_name, category, abrev, modifications, price, available):
        self.item_name = item_name
        self.category = category
        self.abrev = abrev
        self.modifications = modifications
        self.price = price
        self.available = available
        self.collection_name = 'Drinks'

    def db_select_item(self,category_name,abrev):
        db = DB()
        returned_item = db.select_item('Drinks',category_name,abrev)
        if returned_item:
            data = returned_item['items'][0]
            item = Drink(data['item_name'],data['category'],data['abrev'],data['modification'],data['price'],data['available'])
            return item
        else:
            return KeyError('Item Not Found')
        
    def db_insert_item(self):
        db = DB()
        db.insert_item(self.collection_name,self.category,{'item_name':self.item_name,'category':self.category,'abrev': self.abrev, 'modifications':self.modifications,'price':self.price,'available': self.available})

    def db_delete_item(self):
        db = DB()
        db.delete_item(self.collection_name,self.category,self.abrev)
    
    def retrieve_drinks(self):
        db = DB()
        data = db.load_categories('Drinks')
        drinks = {}
        for x in data:
            drinks[x['category']] = x['items']
        return drinks if drinks else False


if __name__ == '__main__':
    pass

