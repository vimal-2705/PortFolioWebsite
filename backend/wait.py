from wsgi import app
from waitress import serve
from paste.translogger import TransLogger
import logging


if __name__ == "__main__":
    serve(app, host="127.0.0.1", port=9000)

logger = logging.getLogger('waitress')
logger.setLevel(logging.INFO)
