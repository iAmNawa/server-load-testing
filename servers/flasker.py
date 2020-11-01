from flask import Flask
app = Flask(__name__)

@app.route('/why-am-i-so-slow')
def why_am_i_so_slow():
    for i in range(1,10000):
        pass
    return 'pizza is out of the oven'

if __name__ == '__main__':
    print('server is running')
    app.run()
