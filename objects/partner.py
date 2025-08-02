
from objects.db import DB

class Partner:

    def __new__(cls ,*args,**kwargs):
        return super().__new__(cls)
    
    def __init__(self,partner_num,pin,first_name,last_name,phone,email,access,assigned_drawer):
        self.partner_num = partner_num
        self.pin = pin 
        self.first_name = first_name
        self.last_name = last_name
        self.phone = f'({phone[0:3]}) {phone[3:6]}-{phone[6:10]}'
        self.email = email
        self.access = access
        self.assigned_drawer = assigned_drawer
        self.collection_name = 'Partners'

    def to_dict(self):
        return {
            'partner_num': self.partner_num,
            'pin': self.pin,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'phone': self.phone,
            'email': self.email,
            'access': self.access,
            'assigned_drawer': self.assigned_drawer
        }

    def db_find_partner(self,partner_num):
        db = DB()
        print(f'Partner db_find_partner Accessed')
        returned_partner = db.find_partner(partner_num)
        if returned_partner == False:
            print(f'Partner db_find_partner returning: False')
            return 'NO PARTNER FOUND'
        else:
            partner = Partner(returned_partner['partner_num'],returned_partner['pin'],returned_partner['first_name'],returned_partner['last_name'],returned_partner['phone'],returned_partner['email'],returned_partner['access'],returned_partner['assigned_drawer'])
            print(f'Partner db_find_partner Retunrning: {partner}')
            return partner
                
               
    def db_delete_partner(self):
        db = DB()
        result = db.delete_partner(self.partner_num)
        return result
       
        
    def db_insert_partner(self):
        db = DB()
        partner = Partner(self.partner_num,self.pin,self.first_name,self.last_name,self.phone,self.email,self.access,self.assigned_drawer)
        boolean = db.insert_partner(partner)
        return boolean
    
    ##SEARCH PARTNER DATA FROM MATCHING PARTNER ID AND RETURN TRUE OR FALSE
    def db_verify_partner_num(self, partner_num):
        db = DB()
        returned_partner = db.verify_partner_num(partner_num)
        if not returned_partner:
            return None
        updated_partner = Partner(
                returned_partner['partner_num'],
                returned_partner['pin'],
                returned_partner['first_name'],
                returned_partner['last_name'],
                returned_partner['phone'],
                returned_partner['email'],
                returned_partner['access'],
                returned_partner['assigned_drawer']
        )
        return updated_partner.to_dict()
        

##SEE IF ENTERED PIN MATCHED PIN FROM PARTNER DATA RETRIEVED FROM VERIFY_ID()
    def db_verify_pin(self, partner_num, pin):
        db = DB()
        result = db.verify_pin(partner_num, pin)
        return result


if __name__ == '__main__':
  
  pass

    

   
    

    
    
    

   
