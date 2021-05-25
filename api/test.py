import requests


get_trans_info = "http://127.0.0.1:9800/?username=login1&password=pass1&ACTION=set_user"


if __name__ == '__main__':

    result = requests.get(get_trans_info, verify=False)
    print(result.text)
