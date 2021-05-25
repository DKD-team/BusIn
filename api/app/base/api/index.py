import uuid
import requests_async as requests
import logging

logger = logging.getLogger('main')

class API:
    timeout = 60

    def __init__(self, config, name='database_api'):
        self.config = config
        self._name = name
        self.prepare()
        self.last_request_data = None

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        self._name = value
        self.prepare()

    def prepare(self):
        self.url = self.config.get(self._name, 'url')

    async def send(self, method, data=None, action_id=None):
        data = data or {}
        url = self.url + method
        self.last_request_data = data

        logger.info(f'{str(action_id)}| URL:\n{str(url)} | API REQUEST:\n{str(data)}')
        try:
            resp = await requests.post(url=url, json=data, timeout=self.timeout)
        except Exception as e:
            logger.exception(f'{str(action_id)} | {str(url)} | {str(e)}')
            raise
        logger.info(f'{str(action_id)} | URL:\n{str(url)} | API RESPONSE: {str(resp.json()) if resp else "RESPONSE EMPTY"}')
        return resp.json()
