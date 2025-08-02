import datetime
from .ticket import Ticket


class Order:

    def __init__(self, name, order_id, item_count, list, method): # creates order object when called | Order(params)

        date_time = datetime.datetime.now() # get current date/time
        formatted_date_time = date_time.strftime("%m/%d/%Y, %H:%M")
        current_date = formatted_date_time.split(',')[0]
        current_time = formatted_date_time.split(',')[1]

        self.name = name
        self.order_id = order_id
        self.item_count = item_count
        self.list = list
        self.method = method
        self.date = current_date
        self.time = current_time

        tickets = [] # create empty list of tickets
        count = 1 #set count to 1 for first item of order

        for item in list: # for each item in list
            new_ticket = Ticket(item.item_name, item.mods, count, self.item_count, self.method, self.date, self.time) #create new ticket object with item and order data
            tickets.append(new_ticket) # add ticket to ticket list
            count += 1 # increase count after each ticket

        for ticket in tickets: # print each ticket in order
            print(f'{ticket}')
            

    
    def __str__(self): # string respresentation of ticket object | print(ticket)
        string = "\n--- Order Info ---"
        string += f'\nCustomer Name: {self.name}'
        string += f'\nOrder ID: {self.order_id}'
        string += f'\nItems: {self.item_count}'
        string += f'\nPickup Method: {self.method}'
        string += f'\nTime Placed: {self.time}'
        string += f'\nDate Placed: {self.date}\n'
        return string
    

