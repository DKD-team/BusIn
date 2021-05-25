import logging
import asyncio
import os

from argparse import ArgumentParser
from configparser import ConfigParser
from pathlib import Path

import tornado.web
import tornado.ioloop
import tornado.httpserver

from app.base.utils import TarGzTimedRotatingFileHandler
from app.handlers import BaseHandler


base_path = Path(__file__).parent

config = ConfigParser()
config.read('%s/config/app.ini' % base_path)

os.makedirs(base_path.joinpath('logs'), exist_ok=True)


def start_server(_host, _port, loglevel: int = None):
    asyncio.set_event_loop(asyncio.new_event_loop())
    io_loop = tornado.ioloop.IOLoop()
    filename = "logs/%s.log" % str(_port)
    logfile = base_path.joinpath(filename)
    loglevel = loglevel or config.get('DEFAULT', 'logging_level', fallback=logging.ERROR)
    logger = logging.getLogger('main')
    logger.setLevel(loglevel)
    fh = TarGzTimedRotatingFileHandler(logfile, encoding='utf8', when='MIDNIGHT', backupCount=7)
    fh.setLevel(loglevel)

    formatter = logging.Formatter('%(asctime)s | %(levelname)s | %(module)s:%(lineno)s | %(message)s')
    fh.setFormatter(formatter)
    logger.addHandler(fh)

    app = tornado.web.Application([
            (r'/', BaseHandler, dict(config=config)),  # All
        ])

    context = None
    server = tornado.httpserver.HTTPServer(app, ssl_options=context)
    server.listen(_port, _host)

    logger.info('Application started on port: ' + str(_port))
    io_loop.start()


if __name__ == '__main__':
    parser = ArgumentParser()
    parser.add_argument("port", type=int, help="port number")
    parser.add_argument('-d', '--debug', action='store_true')

    args = parser.parse_args()
    port = args.port
    host = config.get('DEFAULT', 'host')
    log_level = None

    if args.debug:
        logging.getLogger('main').addHandler(logging.StreamHandler())
        log_level = logging.DEBUG

    start_server(host, port, log_level)

