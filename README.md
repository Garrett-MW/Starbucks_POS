# Starbucks_POS

A Python-based recreation of the Starbucks Point of Sale (POS) system, designed to simulate the core functionalities of a typical Starbucks store's POS interface.

---

## 📌 Overview

This project aims to replicate the user interface and basic operations of the Starbucks POS system.
While it does not interface with actual hardware or process real transactions, it serves as an educational tool to understand the structure and flow of a POS system in a retail environment.

---

## 🛠️ Features

- **User Interface**: Simulates the Starbucks POS interface, including order entry, payment processing, and receipt generation.
- **Menu Management**: Allows customization of menu items, including drinks and food options.
- **Order Processing**: Supports adding items to the order, modifying quantities, and applying discounts.
- **Payment Simulation**: Simulates payment processing with options for cash, card, and mobile payments.
- **Receipt Generation**: Generates printable receipts for each transaction.

---

## 🚀 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Garrett-MW/Starbucks_POS.git
   cd Starbucks_POS
   ```

2. **Set up a virtual environment**:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. **Install dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**:

   ```bash
   python app.py
   ```

   The application should now be running locally.

---

## 🧪 Usage

- Upon launching, the POS interface will appear in your browser.
- Navigate through the menu to add items to the order.
- Use the payment section to simulate completing the transaction.
- View and print the receipt after finalizing the order.

## 🧱 Technologies Used

- **Backend**: Python
- **Frontend**: HTML, CSS, JavaScript
- **Web Framework**: Flask
- **Virtual Environment**: venv

---

## 📂 Project Structure

```
Starbucks_POS/
│
├── app.py              # Main application file
├── config.py           # Configuration settings
├── requirements.txt    # Python dependencies
├── templates/          # HTML templates
│   └── index.html      # Main POS interface
├── static/             # Static files (CSS, JS, images)
│   ├── style.css
│   └── script.js
└── data/               # Sample data (menu items, orders)
    └── menu.json
```

---

## 🧑‍💻 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
