import logging
import datetime
from abc import abstractmethod, ABCMeta

from app.base.api import API

logger = logging.getLogger('main')


class BaseController(metaclass=ABCMeta):
    statuses = {}

    def __init__(self, config, api=None, request_id=''):
        self.api = api if api is not None else API(config)
        self.config = config
        self.request_id = request_id

    def __str__(self):
        return f'{self.__class__.__name__} controller>'

    @abstractmethod
    async def run(self, data: dict) -> dict:
        pass
