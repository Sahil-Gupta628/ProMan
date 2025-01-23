# ProMan - Password Manager

ProMan is a Django-based web application designed to securely store and manage passwords for users. It offers features like user authentication, password encryption, and a user-friendly interface to ensure the safety and privacy of your sensitive information.

## Features

- **User Authentication**: Secure login and registration system with password encryption.
- **Password Management**: Store and manage multiple passwords with strong encryption.
- **Search Functionality**: Quickly search and filter passwords for easy access.
- **Password Strength**: Ensure that passwords are strong and meet security requirements.
- **Responsive Design**: Optimized for use on both desktop and mobile devices.

## Installation

### Prerequisites

- Python 3.x
- Django 4.x or higher
- SQLite (default database) or any other database of choice

### Steps to Run the Project

1. Clone the repository:
    ```bash
    git clone https://github.com/Sahil-Gupta628/ProMan.git
    ```

2. Navigate to the project directory:
    ```bash
    cd ProMan
    ```

3. Create a virtual environment:
    ```bash
    python -m venv venv
    ```

4. Activate the virtual environment:
    - On Windows:
      ```bash
      venv\Scripts\activate
      ```
    - On Mac/Linux:
      ```bash
      source venv/bin/activate
      ```

5. Install required dependencies:
    ```bash
    pip install -r requirements.txt
    ```

6. Apply migrations to set up the database:
    ```bash
    python manage.py migrate
    ```

7. Create a superuser (optional, for admin access):
    ```bash
    python manage.py createsuperuser
    ```

8. Run the development server:
    ```bash
    python manage.py runserver
    ```

9. Open your browser and go to `http://127.0.0.1:8000` to start using the application.

## Usage

- After logging in, you can start adding passwords for various services.
- Each password is encrypted and stored securely.
- You can search, view, and edit your passwords from the dashboard.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Django Framework
- Cryptography for password encryption
