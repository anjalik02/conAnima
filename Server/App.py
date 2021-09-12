from flask import Flask, request
import plagiarismCheck 
 
# Flask constructor takes the name of
# current module (__name__) as argument.
app = Flask(__name__)
 
# The route() function of the Flask class is a decorator,
# which tells the plaglication which URL should call
# the associated function.
@app.route('/')
# ‘/’ URL is bound with hello_world() function.
def hello_world():
    return 'Hello World'
@app.route('/plagiarism')
def plagCheck():
    #print("starting plagCheck")
    lyrics = request.args.get("lyrics","")
    #print(lyrics)
    toReturn = plagiarismCheck.checkPlag(lyrics)
    #print(toReturn)
    return toReturn


# main driver function
if __name__ == '__main__':
 
    # run() method of Flask class runs the application
    # on the local development server.
    app.run()