import os
import re
import tarfile
import logging

from lxml import etree

from logging.handlers import TimedRotatingFileHandler


import rsa
import base64

logger = logging.getLogger('main')

def log_namer(name):
    return name + ".tar.gz"


def log_rotator(source, dest):
    with tarfile.open(dest, "w:gz") as tar:
        tar.add(source, arcname=os.path.basename(source))
    os.remove(source)


class TarGzTimedRotatingFileHandler(TimedRotatingFileHandler):
    def __init__(self, filename, when='h', interval=1, backupCount=0,
                 encoding=None, delay=False, utc=False, atTime=None):
        super().__init__(filename, when, interval, backupCount, encoding, delay, utc, atTime)
        self.namer = log_namer
        self.rotator = log_rotator
