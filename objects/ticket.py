

class Ticket: 
     
    def __init__(self, item_name, mods, item_num , item_count, method, time, date): ## method creates a ticket object when called | Ticket(params)
        self.item_name = item_name
        self.mods = mods
        self.item_num = item_num
        self.item_count = item_count
        self.method = method
        self.time = time
        self.date = date


    def __str__(self): ## string representation of ticket object | print(ticket)
        string = "\n--- Ticket Info ---"
        string += f'\nItem: {self.item_name}'
        string += f'\nModifications: {self.mods}'
        string += f'\nItem {self.item_num}' 
        string += f'\nNumber of Items: {self.item_count}'
        string += f'\nPickup Method: {self.method}'
        string += f'\nTime Placed: {self.time}'
        string += f'\nDate Placed: {self.date}\n'
        return string
     