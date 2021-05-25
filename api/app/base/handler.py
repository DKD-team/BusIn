import logging
import importlib
import datetime
import traceback

import mysql.connector

from uuid import uuid4

import tornado.web
import tornado.httpserver

class BaseHandler(tornado.web.RequestHandler):
    API_VERSION = 1

    def __init__(self, application, request, **kwargs):
        super().__init__(application, request, **kwargs)
        self.logger = logging.getLogger('main')

    def initialize(self, config):
        self.config = config

    async def get(self):
        action_id = uuid4()
        self.logger.info(f'{action_id} | REQUEST:\n{str(self.request.uri)}')
        try:
            data_dict = {}
            splited_line = self.request.uri.split('&')[1:]
            logging.error(str(splited_line))
            for subline in splited_line:
                splited_subline = subline.split("=")
                subline_dict = {splited_subline[0].lower(): splited_subline[1]}
                data_dict.update(subline_dict)
            action = data_dict.get("action")
            logging.error(str(data_dict))
            if action and action in ("set_user"):
                username = data_dict.get("username")
                password = data_dict.get("password")
                if username and password:
                    cnx = mysql.connector.connect(user='a0534235_database', password='ribuewrien',
                                                  host='localhost',
                                                  database='a0534235_database')
                    mycursor = cnx.cursor()
                    mycursor.execute("""insert into users(username, password) value ('%s', '%s');""" %
                                     (str(username), str(password)))
                    cnx.close()
                    response = ("""{\"status_code\":1, \"time_stamp\": \"""" +
                        datetime.datetime.strftime(datetime.datetime.now(), "%Y-%m-%dT%H:%M:%S") + "\"}").encode('utf-8')
                else:
                    raise Exception
            else:
                raise Exception

        except Exception as e:
            response = ("""{\"status_code\":-1, \"time_stamp\": \"""" +
                        datetime.datetime.strftime(datetime.datetime.now(), "%Y-%m-%dT%H:%M:%S") + "\"}").encode('utf-8')
            self.logger.info(f'{action_id} | RESPONSE:\n{str(response, "utf-8")} | {str(traceback.format_exc())}')
        return self.write(response)

    def get_method_controller(self, method_name):
        controllers = importlib.import_module(f'app.v1.controllers')
        return getattr(controllers, method_name)
